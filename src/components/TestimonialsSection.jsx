import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton'; 
import mariaImage from '../assets/images/maria.jpg';
import ricardoImage from '../assets/images/ricardo.jpg';
import ricardoAlvesImage from '../assets/images/ricardo-alves.jpg';
import dishImage from '../assets/images/depoimento.jpg';
import mariaAvatar from '../assets/images/maria-perfil.png';
import ricardoAlmeidaAvatar from '../assets/images/ricardo-almeida-perfil.png';
import ricardoAlvesAvatar from '../assets/images/ricardo-alves-perfil.png';
import camilaAvatar from '../assets/images/camila-perfil.png';

// === DADOS DOS DEPOIMENTOS ===
// AJUSTE DE ALTURA: Aumentei o min-h para lg:min-h-[450px] para garantir imagens grandes
const columns = [
  // COLUNA 1
  {
    id: 1,
    items: [
      {
        type: 'image',
        src: mariaImage,
        alt: 'Chef maçaricando sobremesa',
        className: 'flex-1 h-full w-full min-h-[300px] lg:min-h-[450px]' 
      },
      {
        type: 'feedback',
        name: "Maria Fernandes",
        role: "Cozinha por Hobby",
        avatar: mariaAvatar,
        text: "Comecei cozinhando como uma forma de relaxar e acabei descobrindo uma nova paixão. As aulas são leves e inspiradoras!"
      }
    ]
  },
  // COLUNA 2
  {
    id: 2,
    items: [
      {
        type: 'feedback',
        name: "Ricardo Almeida",
        role: "Chefe de Cozinha",
        avatar: ricardoAlmeidaAvatar,
        text: "Excelente. O curso é prático, os professores são chefs de mercado e a estrutura é impecável. Saí pronto para os desafios reais da profissão."
      },
      {
        type: 'image',
        src: ricardoImage,
        alt: 'Chef preparando pães e hambúrgueres',
        className: 'flex-1 h-full w-full min-h-[300px] lg:min-h-[450px]'
      }
    ]
  },
  // COLUNA 3
  {
    id: 3,
    items: [
      {
        type: 'image',
        src: ricardoAlvesImage,
        alt: 'Tortinhas de morango com chantilly',
        className: 'flex-1 h-full w-full min-h-[300px] lg:min-h-[450px]'
      },
      {
        type: 'feedback',
        name: "Ricardo Alves",
        role: "Chefe de Cozinha",
        avatar: ricardoAlvesAvatar,
        text: "O curso mudou totalmente minha visão sobre gastronomia. Professores excelentes e um ambiente acolhedor."
      }
    ]
  },
  // COLUNA 4
  {
    id: 4,
    items: [
      {
        type: 'feedback',
        name: "Camila Duarte",
        role: "Panificação e Confeitaria",
        avatar: camilaAvatar,
        text: "Aprendi técnicas que hoje uso no meu próprio negócio. Cada aula foi uma experiência única!"
      },
      {
        type: 'image',
        src: dishImage,
        alt: 'Prato com carne ao molho e purê',
        className: 'flex-1 h-full w-full min-h-[300px] lg:min-h-[450px]'
      }
    ]
  }
];

// === COMPONENTE DO CARD DE TEXTO ===
const FeedbackCard = ({ data }) => (
  <div className="bg-[#EAE0D5] p-6 rounded-[20px] flex flex-col gap-4 shadow-lg h-fit shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/50 shadow-sm shrink-0">
        <img src={data.avatar} alt={data.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-serif font-bold text-[#1a1a1a] leading-tight text-sm md:text-base">{data.name}</h4>
        <span className="text-[10px] md:text-xs text-[#555] font-sans uppercase tracking-wide block">{data.role}</span>
      </div>
    </div>
    <p className="text-[#333] font-sans text-sm leading-relaxed italic">
      "{data.text}"
    </p>
  </div>
);

// === COMPONENTE DA IMAGEM ===
const ImageCard = ({ src, alt, className }) => (
  <div className={`relative rounded-[20px] overflow-hidden group ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
  </div>
);

function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full bg-[#1a1a1a] rounded-b-[3rem] md:rounded-b-[5rem] py-24 pb-32 z-20 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-8">
        
        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F3E5D8] leading-tight mb-4"
            >
              O sabor da transformação <br />
              <span className="relative inline-block">
                começa aqui
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-[#D62828]"
                ></motion.span>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl font-light"
            >
              Cada aluno tem uma história única e todas começam dentro da nossa cozinha.
            </motion.p>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <MagneticButton>
              Fale com a gente
            </MagneticButton>
          </motion.div>
        </div>

        {/* === GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {columns.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6 h-full" 
            >
              {col.items.map((item, i) => (
                <div key={i} className={`w-full ${item.type === 'image' ? 'flex-1 flex flex-col' : ''}`}>
                  {item.type === 'image' ? (
                    <ImageCard src={item.src} alt={item.alt} className={item.className} />
                  ) : (
                    <FeedbackCard data={item} />
                  )}
                </div>
              ))}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;