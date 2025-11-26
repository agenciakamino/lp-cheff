import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton'; // <--- Importamos o componente aqui

function HeroSection({ plateImage, alt = 'Prato Cheff Instituto' }) {
  
  // Configurações de animação
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section className="relative z-30 w-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        
        {/* === LADO ESQUERDO: TEXTO === */}
        <div className="flex flex-col items-start w-full text-left order-2 lg:order-1">
          <motion.h1 
            className="text-white drop-shadow-2xl leading-none"
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={textVariant} 
              custom={0}
              className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight mb-2"
            >
              Somos mais que
            </motion.span>
            <motion.span 
              variants={textVariant} 
              custom={1}
              className="block font-serif italic font-light text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              uma escola
            </motion.span>
          </motion.h1>

          <motion.div 
            variants={textVariant} 
            custom={2}
            initial="hidden"
            animate="visible"
            className="flex items-center w-full max-w-md gap-4 mt-8 mb-10 md:mt-10 md:mb-12"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="font-sans font-light tracking-[0.25em] text-gray-400 uppercase text-[10px] md:text-xs whitespace-nowrap">
              Cheff Instituto Gastronômico
            </span>
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-white/40"></div>
          </motion.div>

          <motion.div
            variants={textVariant}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            {/* === SUBSTITUÍDO PELO MAGNETIC BUTTON === */}
            {/* Adicionei text-sm md:text-base para manter a responsividade original do texto */}
            <MagneticButton className="text-sm md:text-base">
              Agendar visita
            </MagneticButton>
          </motion.div>
        </div>

        {/* === LADO DIREITO: IMAGEM === */}
        <div className="relative flex items-center justify-center lg:justify-end w-full order-1 lg:order-2">
          
          {/* Glow/Brilho atrás do prato */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[80%] h-[80%] bg-orange-500/10 rounded-full blur-[80px] lg:blur-[120px]"></div>
          </div>

          {/* Imagem Flutuante */}
          <motion.div 
            className="relative w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[600px] aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={plateImage}
              alt={alt}
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;