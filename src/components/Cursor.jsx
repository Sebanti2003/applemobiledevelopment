import React, { useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const cursorRef = React.createRef();

  const handleMouseMove = useCallback((event) => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  const handleTouchMove = useCallback((event) => {
    setX(event.touches[0].clientX);
    setY(event.touches[0].clientY);
  }, []);

  useGSAP(() => {
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 1,
      ease: 'back.out',
    });
  }, [x, y]);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div ref={cursorRef} className="cursor opacity-50 z-50 w-16 h-16 fixed rounded-full flex justify-center items-center bg-white">
      
    </div>
  );
};

export default Cursor;