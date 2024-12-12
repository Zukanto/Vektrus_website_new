import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  connections: Node[];
  phase: number;
  brightness: number;
  targetBrightness: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for sharp rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize nodes
    const nodes: Node[] = [];
    const numNodes = 40;
    const centerY = canvas.height / (2 * (window.devicePixelRatio || 1));
    const verticalRange = canvas.height / (4 * (window.devicePixelRatio || 1));

    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * (canvas.width / (window.devicePixelRatio || 1));
      const y = centerY + (Math.random() * 2 - 1) * verticalRange;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        baseRadius: 2 + Math.random() * 2,
        radius: 2 + Math.random() * 2,
        connections: [],
        phase: Math.random() * Math.PI * 2,
        brightness: 0.2,
        targetBrightness: 0.2
      });
    }

    // Create initial connections
    const updateConnections = () => {
      nodes.forEach(node => {
        const numConnections = 2 + Math.floor(Math.random() * 2);
        const sorted = nodes
          .filter(n => n !== node)
          .sort((a, b) => {
            const distA = Math.hypot(a.x - node.x, a.y - node.y);
            const distB = Math.hypot(b.x - node.x, b.y - node.y);
            return distA - distB;
          });
        node.connections = sorted.slice(0, numConnections);
      });
    };
    updateConnections();

    // Random node activation
    const activateRandomNode = () => {
      const node = nodes[Math.floor(Math.random() * nodes.length)];
      node.targetBrightness = 1;
      node.connections.forEach(conn => {
        conn.targetBrightness = 0.8;
      });

      setTimeout(() => {
        node.targetBrightness = 0.2;
        node.connections.forEach(conn => {
          conn.targetBrightness = 0.2;
        });
      }, 1000);
    };

    setInterval(activateRandomNode, 2000);

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      // Update and draw nodes
      nodes.forEach(node => {
        // Update position with subtle movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off boundaries with some padding
        const padding = 50;
        if (node.x < padding || node.x > canvas.width / (window.devicePixelRatio || 1) - padding) node.vx *= -1;
        if (node.y < centerY - verticalRange || node.y > centerY + verticalRange) node.vy *= -1;

        // Update phase and radius for pulsing effect
        node.phase += 0.02;
        node.radius = node.baseRadius * (1 + Math.sin(node.phase) * 0.2);

        // Smooth brightness transition
        node.brightness += (node.targetBrightness - node.brightness) * 0.1;

        // Draw node with gradient and glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        const alpha = 0.3 + node.brightness * 0.5;
        gradient.addColorStop(0, `rgba(45, 212, 191, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(52, 211, 153, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (1 + node.brightness), 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections
        node.connections.forEach(connected => {
          const distance = Math.hypot(connected.x - node.x, connected.y - node.y);
          const maxDistance = 200;
          const opacity = Math.max(0, 1 - distance / maxDistance);
          const brightness = Math.max(node.brightness, connected.brightness);

          // Calculate control point for curved lines
          const midX = (node.x + connected.x) / 2;
          const midY = (node.y + connected.y) / 2;
          const offset = Math.sin(node.phase) * 5;
          const controlX = midX + Math.cos(node.phase) * offset;
          const controlY = midY + Math.sin(node.phase) * offset;

          // Draw curved connection
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.quadraticCurveTo(controlX, controlY, connected.x, connected.y);
          
          const gradient = ctx.createLinearGradient(
            node.x, node.y,
            connected.x, connected.y
          );
          const alpha = opacity * (0.15 + brightness * 0.25);
          gradient.addColorStop(0, `rgba(45, 212, 191, ${alpha})`);
          gradient.addColorStop(1, `rgba(52, 211, 153, ${alpha})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + brightness;
          ctx.stroke();
        });
      });

      // Periodically update connections
      if (Math.random() < 0.01) updateConnections();

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gray-900"
        style={{ opacity: 0.8 }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Transform data into{' '}
          <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
            results
          </span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Make the best decisions with the best data. Vektrus AI Engine powers nearly every major optimization,
          leveraging your enterprise data to unlock the value of AI.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-teal-300 hover:to-secondary-300">
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20">
          <p className="text-sm text-gray-400 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {['Microsoft', 'OpenAI', 'Meta', 'Nvidia'].map((company) => (
              <div
                key={company}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xl font-semibold"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;