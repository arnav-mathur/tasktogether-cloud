
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const AccountabilityChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, chartRef.current.clientWidth / chartRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(chartRef.current.clientWidth, chartRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    if (chartRef.current.firstChild) {
      chartRef.current.removeChild(chartRef.current.firstChild);
    }
    chartRef.current.appendChild(renderer.domElement);
    
    // Create pie chart pieces
    const pieGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100, Math.PI * 0.44);
    const improvementMaterial = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color("#6366f1"),
      shininess: 100,
      specular: new THREE.Color("#ffffff")
    });
    const improvementPiece = new THREE.Mesh(pieGeometry, improvementMaterial);
    improvementPiece.rotation.z = Math.PI * 0.78;
    scene.add(improvementPiece);
    
    const otherGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100, Math.PI * 0.12);
    const otherMaterial = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color("#1e293b"),
      shininess: 80,
      specular: new THREE.Color("#c7d2fe")
    });
    const otherPiece = new THREE.Mesh(otherGeometry, otherMaterial);
    otherPiece.rotation.z = Math.PI * 0.12;
    scene.add(otherPiece);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x6366f1, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    
    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      improvementPiece.rotation.y += 0.005;
      otherPiece.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!chartRef.current) return;
      
      camera.aspect = chartRef.current.clientWidth / chartRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(chartRef.current.clientWidth, chartRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      scene.clear();
    };
  }, []);

  return (
    <section id="accountability-stats" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="title-gradient">78%</span> of People Achieve More with Accountability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none">
              Our research shows that having an accountability partner dramatically 
              increases task completion rates. With Focus Flow's AI accountability system, 
              you're never alone in your productivity journey.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 h-80 flex flex-col items-center justify-center glass-card p-6 rounded-2xl subtle-shadow relative"
          >
            <div ref={chartRef} className="w-full h-full" />
            
            <div className="absolute">
              <div className="text-center">
                <span className="text-5xl font-bold text-primary animate-pulse-subtle">78%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountabilityChart;
