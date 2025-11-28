import React from 'react';
import { motion } from 'framer-motion';
import bartenderIcon from '../assets/images/bartender.png';
import vinhosIcon from '../assets/images/vinhos.png';
import hobbyIcon from '../assets/images/hobby.png';
import confeitariaIcon from '../assets/images/confeitaria.png';
import churrasqueiroIcon from '../assets/images/churrasqueiro.png';
import pizzaioloIcon from '../assets/images/pizzaiolo.png';
import gastronomiaIcon from '../assets/images/gastronomia.png';
import chefeIcon from '../assets/images/chefe.png';
import juniorIcon from '../assets/images/junior.png';

const iconMap = {
  wine: vinhosIcon,
  shaker: bartenderIcon,
  hobby: hobbyIcon,
  bread: confeitariaIcon,
  grill: churrasqueiroIcon,
  pizza: pizzaioloIcon,
  leaf: gastronomiaIcon,
  chef: chefeIcon,
  junior: juniorIcon,
};

// =========================================
// DADOS
// =========================================
const courses = [
  {
    id: 1,
    title: "Sommelier de Vinhos",
    iconName: "wine",
    hours: "72h (108 h-aula)",
    schedule: "Segundas-feiras, 18h30–22h",
    description: "Descubra o mundo dos vinhos — da história à degustação. Aprenda sobre terroir, viticultura, vinhos tranquilos e espumantes, serviço e harmonização."
  },
  {
    id: 2,
    title: "Bartender",
    iconName: "shaker",
    hours: "48h (72 h-aula)",
    schedule: "Segundas-feiras, 18h–22h",
    description: "Domine as técnicas e segredos dos melhores bartenders. Aprenda fermentação, destilação, categorias de coquetéis e crie drinks autorais."
  },
  {
    id: 3,
    title: "Cozinha por Hobby",
    iconName: "hobby",
    hours: "96h (144 h-aula)",
    schedule: "Segundas, terças ou quintas, 18h–22h",
    description: "Para quem ama cozinhar e quer sair do básico. Aprenda cortes, molhos, carnes, sobremesas e pratos internacionais."
  },
  {
    id: 4,
    title: "Panificação e Confeitaria",
    iconName: "bread",
    hours: "96h (144 h-aula)",
    schedule: "Segundas, 8h–12h ou Quintas, 18h–22h",
    description: "Torne-se um especialista em massas, pães e doces artesanais. Domine as bases da confeitaria clássica e crie sobremesas modernas."
  },
  {
    id: 5,
    title: "Mestre Churrasqueiro",
    iconName: "grill",
    hours: "36h (54 h-aula)",
    schedule: "Terças-feiras, 19h–22h",
    description: "Aprenda todos os segredos do churrasco — dos cortes nobres aos acompanhamentos. Domine o fogo e os temperos."
  },
  {
    id: 6,
    title: "Pizzaiolo",
    iconName: "pizza",
    hours: "36h (54 h-aula)",
    schedule: "Terças-feiras, 18h–21h",
    description: "Descubra o segredo da pizza perfeita! Aprenda fermentações, massas artesanais, bordas criativas e técnicas de forno."
  },
  {
    id: 7,
    title: "Gastronomia Funcional",
    iconName: "leaf",
    hours: "48h (72 h-aula)",
    schedule: "Quartas-feiras, 19h–22h",
    description: "Aprenda a preparar pratos saudáveis e deliciosos com técnicas funcionais e ingredientes naturais."
  },
  {
    id: 8,
    title: "Chefe de Cozinha",
    iconName: "chef",
    hours: "11 meses (188h – 282h)",
    schedule: "Quartas-feiras, 18h–22h",
    description: "Formação completa e profissional. Domine todas as áreas da gastronomia, da base clássica à cozinha internacional."
  },
  {
    id: 9,
    title: "Chefe Júnior",
    iconName: "junior",
    hours: "1 ano (216 h-aula)",
    schedule: "Sextas, 13:30h ou Sábados, 8h",
    description: "Curso voltado para jovens apaixonados por culinária. Ensina desde pratos do dia a dia até gastronomia internacional."
  }
];

// =========================================
// COMPONENTE PRINCIPAL
// =========================================
function CoursesSection() {
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="cursos" className="w-full py-24 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-[#F3E5D8] mb-4"
          >
            Nossos Cursos
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="text-gray-400 font-light text-lg italic"
          >
            Aprenda com quem vive a gastronomia
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[1px] bg-[#D62828] mx-auto mt-6"
          />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const iconSrc = iconMap[course.iconName];

            return (
              <motion.div 
                key={course.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="flex flex-col p-8 md:p-10 rounded-[2rem] border border-[#D62828] bg-transparent hover:bg-white/5 transition-colors duration-500"
              >
                {/* Ícone + Título */}
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div className="p-0">
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={`Ícone do curso ${course.title}`}
                        className="w-16 h-16 object-contain"
                      />
                    ) : null}
                  </div>
                  <h3 className="font-serif text-2xl text-[#F3E5D8] leading-tight">
                    {course.title}
                  </h3>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-6 text-[15px]">
                  <div>
                    <span className="text-white font-bold block mb-1">Carga horária:</span>
                    <span className="text-gray-400 font-light">{course.hours}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-white font-bold block mb-1">Dias/horários:</span>
                    <span className="text-gray-400 font-light">{course.schedule}</span>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {course.description}
                </p>

                {/* Botão */}
                <button className="w-full py-3 rounded-full bg-[#D62828] text-white font-medium text-sm hover:bg-[#b51e1e] transition-colors duration-300 shadow-lg shadow-red-900/20">
                  Quero saber mais
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoursesSection;