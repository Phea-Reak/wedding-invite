import React, { useMemo } from 'react';

export const SakuraBackground = () => {
  // Use useMemo to prevent regeneration of petals on re-renders
  const petals = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 10 + 10}px`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div 
          key={p.id} 
          className="sakura" 
          style={{ 
            left: p.left, 
            width: p.size, 
            height: p.size, 
            animationDuration: p.duration, 
            animationDelay: p.delay 
          }} 
        />
      ))}
    </div>
  );
};