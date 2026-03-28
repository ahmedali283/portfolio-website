'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth,
      h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let points: { x: number; y: number }[] = [];
    let ripples: { x: number; y: number; radius: number; alpha: number }[] = [];

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY });
      if (points.length > 10) points.shift();
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        let last = points[points.length - 1];
        let grad = ctx.createLinearGradient(points[0].x, points[0].y, last.x, last.y);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, 'rgba(255,255,255,0.5)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      ripples.forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        r.radius += 1;
        r.alpha -= 0.02;
      });
      ripples = ripples.filter((r) => r.alpha > 0);

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail d-none d-xl-block" id="trail" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
}
