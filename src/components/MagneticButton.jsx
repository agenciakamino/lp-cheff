import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group inline-flex items-center justify-center bg-[#D62828] text-white font-sans font-medium tracking-wide rounded-full overflow-hidden transition-colors duration-300 hover:bg-[#b01e1e] shadow-[0_4px_10px_rgba(214,40,40,0.1)] hover:shadow-[0_8px_20px_rgba(214,40,40,0.15)] ${className}`}
    >
      {/* === CORREÇÃO AQUI: Padding Responsivo === */}
      {/* Mobile: px-6 py-3 | Desktop: px-10 py-4 */}
      <span className="relative z-10 flex items-center gap-2 px-6 py-3 md:px-10 md:py-4">
        {children}
      </span>

      {/* Efeitos de fundo */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out z-0"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
    </motion.button>
  );
};

export default MagneticButton;