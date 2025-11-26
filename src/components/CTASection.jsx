import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton'; 

import ctaBg from '../assets/images/cta.jpg';

function CTASection() {
  const containerRef = useRef(null);
  
  // Ajustei o offset para garantir que a animação termine no momento certo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const textVariant = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={containerRef}
      // AJUSTES MOBILE:
      // h-[60vh] no mobile -> h-[85vh] no desktop (md)
      // min-h-[500px] -> min-h-[600px] no desktop
      // -mt-10 no mobile -> -mt-20 no desktop (para não invadir demais a seção anterior no celular)
      className="relative w-full h-[60vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center -mt-12 md:-mt-20 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div style={{ y: yParallax, scale: 1.2 }} className="absolute inset-0 w-full h-full">
          <img 
            src={ctaBg} 
            alt="Fundo" 
            className="w-full h-full object-cover object-center" 
          />
        </motion.div>
      </div>

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Linha Superior (Menor no mobile) */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          // w-16 no mobile, w-48 no desktop
          className="h-[1px] w-16 md:w-48 bg-gradient-to-r from-transparent via-[#D62828] to-transparent mb-6 md:mb-10"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* AJUSTE FONTE E SOMBRA: text-3xl no mobile, drop-shadow mais forte */}
          <motion.h2 variants={textVariant} className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F3E5D8] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Pronto para começar sua
          </motion.h2>
          
          <motion.h2 variants={textVariant} className="font-serif italic font-light text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight mt-1 md:mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            jornada na gastronomia?
          </motion.h2>
        </motion.div>

        {/* Linha Inferior */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
          className="h-[1px] w-16 md:w-48 bg-gradient-to-r from-transparent via-[#D62828] to-transparent mt-6 md:mt-10 mb-8 md:mb-12"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Botão um pouco menor no mobile para não ficar grosseiro */}
          <MagneticButton className="text-base md:text-lg px-8 py-2 md:px-8 md:py-2">
            Agendar visita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
}

export default CTASection;