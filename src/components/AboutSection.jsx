import React from 'react';
import { motion } from 'framer-motion';

// Importe a imagem da equipe
import teamImage from '../assets/images/team.jpg'; // Certifique-se que o nome do arquivo está certo
// Importe o logo novamente
import logo from '../assets/images/logo.png'; 

function AboutSection() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="sobre" className="relative w-full py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      
      {/* Luz de fundo decorativa */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* === LADO ESQUERDO: TEXTO === */}
          <motion.div 
            className="flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F3E5D8] leading-tight"
            >
              Sobre o Cheff <br />
              <span className="italic font-light text-white">Instituto Gastronômico</span>
            </motion.h2>

            <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed font-light text-justify">
              <motion.p variants={itemVariants}>
                O Cheff Instituto Gastronômico nasceu com o propósito de servir e transformar vidas por meio da gastronomia. Mais do que uma escola, somos um espaço onde o sabor se une ao conhecimento, e cada aula é uma experiência que desperta talento, criatividade e paixão.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Nossa missão é tornar a arte de cozinhar acessível a todos — desde quem busca uma formação profissional sólida até aqueles que desejam vivenciar a gastronomia como um hobby inspirador. Aqui, cada aluno é acolhido e incentivado a desenvolver seu próprio estilo, sempre guiado por professores experientes e uma estrutura moderna.
              </motion.p>

              <motion.p variants={itemVariants}>
                No Cheff Instituto, acreditamos que cozinhar é mais do que uma técnica: é uma forma de expressão. Seja para transformar sua carreira ou seu dia a dia, a cozinha certa começa aqui.
              </motion.p>
            </div>
            
            {/* Linha de separação elegante */}
            <motion.div variants={itemVariants} className="pt-2">
               <div className="h-[2px] w-16 bg-[#D62828]"></div>
            </motion.div>
          </motion.div>

          {/* === LADO DIREITO: FOTO E SELO === */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Moldura Vermelha */}
            <div className="relative p-3 md:p-5 border border-[#D62828]/60 rounded-[2rem] md:rounded-[2.5rem]">
              
              {/* Foto Principal */}
              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] aspect-[3/4] max-h-[600px] group">
                <img 
                  src={teamImage} 
                  alt="Equipe Cheff Instituto" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* === AQUI: O SELO COM A LOGO REAL === */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-28 md:h-28 bg-[#121212] rounded-full flex items-center justify-center border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hidden md:flex">
                 <img 
                   src={logo} 
                   alt="Selo CIG" 
                   className="w-16 md:w-20 object-contain opacity-90 drop-shadow-lg" 
                 />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;