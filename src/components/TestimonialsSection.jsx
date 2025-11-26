import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton'; // Importando o botão magnético

// === DADOS DOS DEPOIMENTOS ===
const columns = [
  // COLUNA 1
  {
    id: 1,
    items: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=600',
        alt: 'Chef finalizando prato'
      },
      {
        type: 'feedback',
        name: "Maria Fernandes",
        role: "Cozinha por Hobby",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Excelente. O curso é prático, os professores são chefs de mercado e a estrutura é impecável. Saí pronto para os desafios reais da profissão."
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
        alt: 'Prato Gourmet'
      }
    ]
  },
  // COLUNA 3
  {
    id: 3,
    items: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=600',
        alt: 'Chef preparando massa'
      },
      {
        type: 'feedback',
        name: "Ricardo Alves",
        role: "Chefe de Cozinha",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
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
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Aprendi técnicas que hoje uso no meu próprio negócio. Cada aula foi uma experiência única!"
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600',
        alt: 'Cupcakes decorados'
      }
    ]
  }
];

// === COMPONENTE DO CARD DE TEXTO ===
const FeedbackCard = ({ data }) => (
  <div className="bg-[#EAE0D5] p-6 rounded-[20px] flex flex-col gap-4 shadow-lg h-fit">
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
const ImageCard = ({ src, alt }) => (
  <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden group">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
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
                  // Correção do sublinhado para não cortar o texto
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

          {/* === BOTÃO MAGNÉTICO (Consistência com o resto do site) === */}
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

        {/* === GRID PERFEITO (4 Colunas Independentes) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {columns.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6" 
            >
              {col.items.map((item, i) => (
                <div key={i} className="w-full">
                  {item.type === 'image' ? (
                    <ImageCard src={item.src} alt={item.alt} />
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