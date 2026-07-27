import React, { useEffect, useRef } from 'react';

export default function CyberGridBackground({ isThreatActive = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Subtle particle nodes
    const particleCount = 25;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pitch black background base
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Very subtle radial lighting
      const mainGlow = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.15,
        10,
        canvas.width * 0.5,
        canvas.height * 0.15,
        canvas.width * 0.5
      );
      if (isThreatActive) {
        mainGlow.addColorStop(0, 'rgba(255, 46, 84, 0.06)');
        mainGlow.addColorStop(1, 'rgba(3, 3, 3, 0)');
      } else {
        mainGlow.addColorStop(0, 'rgba(0, 255, 102, 0.04)');
        mainGlow.addColorStop(1, 'rgba(3, 3, 3, 0)');
      }
      ctx.fillStyle = mainGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid Lines (Subtle)
      const gridSize = 50;
      ctx.strokeStyle = isThreatActive ? 'rgba(255, 46, 84, 0.03)' : 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Particles
      ctx.fillStyle = isThreatActive ? '#FF2E54' : '#00FF66';
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isThreatActive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-colors duration-500"
    />
  );
}
