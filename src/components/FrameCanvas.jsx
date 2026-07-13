import React, { useEffect, useRef, useState } from "react";

// Helper to pad numbers (e.g. 1 -> 001)
const pad = (num, size) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

// Canvas drawing helper mimicking CSS object-fit: cover
const drawImageCover = (ctx, img, w, h) => {
  const imgW = img.width;
  const imgH = img.height;
  const imgRatio = imgW / imgH;
  const canvasRatio = w / h;

  let sx, sy, sWidth, sHeight;

  if (imgRatio > canvasRatio) {
    // Image is wider than canvas
    sHeight = imgH;
    sWidth = imgH * canvasRatio;
    sx = (imgW - sWidth) / 2;
    sy = 0;
  } else {
    // Image is taller than canvas
    sWidth = imgW;
    sHeight = imgW / canvasRatio;
    sx = 0;
    sy = (imgH - sHeight) / 2;
  }

  ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, w, h);
};

// Static list to hold preloaded Image objects globally to prevent reload on hot-reload/strict-mode re-mount
let preloadedImagesCache = null;
let preloadingStarted = false;

export default function FrameCanvas({ scrollProgress, onLoadingProgress, onLoadingComplete }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastDrawnFrameRef = useRef(-1);

  // Preload images
  useEffect(() => {
    if (preloadedImagesCache) {
      setImages(preloadedImagesCache);
      setIsLoaded(true);
      if (onLoadingProgress) onLoadingProgress(100);
      if (onLoadingComplete) onLoadingComplete();
      return;
    }

    if (preloadingStarted) return;
    preloadingStarted = true;

    const totalFrames = 221;
    const tempImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${pad(i, 3)}.png`;
      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        if (onLoadingProgress) onLoadingProgress(pct);

        if (loadedCount === totalFrames) {
          preloadedImagesCache = tempImages;
          setImages(tempImages);
          setIsLoaded(true);
          if (onLoadingComplete) onLoadingComplete();
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        // Still count it so loading doesn't hang
        loadedCount++;
        if (loadedCount === totalFrames) {
          preloadedImagesCache = tempImages;
          setImages(tempImages);
          setIsLoaded(true);
          if (onLoadingComplete) onLoadingComplete();
        }
      };
      tempImages.push(img);
    }
  }, [onLoadingProgress, onLoadingComplete]);

  // Handle canvas sizing and frame drawing
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      // Set display size (css pixels)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Force draw current frame on resize
      drawFrame(true);
    };

    const drawFrame = (force = false) => {
      if (images.length === 0) return;

      // Map scrollProgress (0 to 1) to frame index (0 to 220)
      const frameCount = images.length;
      const rawIndex = Math.floor(scrollProgress * frameCount);
      const frameIndex = Math.max(0, Math.min(frameCount - 1, rawIndex));

      // Performance optimization: only draw if the frame actually changed, unless forced
      if (frameIndex === lastDrawnFrameRef.current && !force) return;

      const img = images[frameIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawImageCover(ctx, img, canvas.width, canvas.height);
        lastDrawnFrameRef.current = frameIndex;
      }
    };

    window.addEventListener("resize", handleResize);
    
    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw initial frame
    drawFrame(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images, scrollProgress]);

  // Separate effect to draw when scrollProgress updates
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const frameCount = images.length;
    const rawIndex = Math.floor(scrollProgress * frameCount);
    const frameIndex = Math.max(0, Math.min(frameCount - 1, rawIndex));

    if (frameIndex === lastDrawnFrameRef.current) return;

    const img = images[frameIndex];
    if (img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawImageCover(ctx, img, canvas.width, canvas.height);
      lastDrawnFrameRef.current = frameIndex;
    }
  }, [scrollProgress, isLoaded, images]);

  // Calculate dynamic opacity: fade out canvas between 0.88 and 0.98 scrollProgress
  const canvasOpacity = scrollProgress >= 0.88
    ? Math.max(0, (0.98 - scrollProgress) / 0.10)
    : 1;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
        pointerEvents: "none",
        opacity: canvasOpacity,
        transition: "opacity 0.1s ease-out"
      }}
    />
  );
}
