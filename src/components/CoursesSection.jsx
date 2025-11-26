import React from 'react';
import { motion } from 'framer-motion';

const defaultIconClass = "w-8 h-8 text-[#D62828]";

const WineIcon = () => (
  <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ShakerIcon = () => (
  <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const ChefIcon = () => (
  <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const BreadIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
   </svg>
);

const GrillIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
   </svg>
);

const PizzaIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>
);

const LeafIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
   </svg>
);

const ChefProIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
   </svg>
);

const JuniorIcon = () => (
   <svg className={defaultIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>
);

const iconMap = {
  wine: WineIcon,
  shaker: ShakerIcon,
  hobby: ChefIcon,
  bread: BreadIcon,
  grill: GrillIcon,
  pizza: PizzaIcon,
  leaf: LeafIcon,
  chef: ChefProIcon,
  junior: JuniorIcon,
};


// =========================================
// DADOS (Agora muito mais limpos)
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
  
  // Variante para a animação de entrada suave
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
        
        {/* Título Centralizado (Mantive a animação original que estava boa) */}
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
            // Seleciona o componente de ícone correto baseado no nome
            const IconComponent = iconMap[course.iconName];

            return (
              <motion.div 
                key={course.id}
                // AQUI ESTÁ A MUDANÇA NA ANIMAÇÃO:
                // Aplicamos a animação individualmente em cada card.
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true, margin: "-100px" }} garante que o card
                // só anima quando já está bem dentro da tela (100px a partir de baixo)
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                // Adicionamos um delayzinho baseado no índice para que cards na mesma linha
                // não apareçam exatamente ao mesmo tempo, criando uma "onda" sutil.
                transition={{ delay: (index % 3) * 0.1 }}
                className="flex flex-col p-8 md:p-10 rounded-[2rem] border border-[#D62828] bg-transparent hover:bg-white/5 transition-colors duration-500"
              >
                {/* Ícone + Título */}
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div className="p-0">
                    {/* Renderiza o componente do ícone */}
                    {IconComponent ? <IconComponent /> : null}
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