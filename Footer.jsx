import React from 'react';
import logo from '../assets/images/logo.png'; // Sua logo CIG

// === ÍCONES SVG ===
const Icons = {
  Whatsapp: () => (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="#D62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Facebook: () => (
    <svg className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="#D62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  TikTok: () => (
    <svg className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="#D62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  )
};

function Footer() {
  return (
    // -mt-20 e rounded-t criam o efeito de sobreposição na imagem anterior
    <footer className="relative bg-[#1a1a1a] text-white pt-24 pb-12 -mt-20 z-20 rounded-t-[3rem] md:rounded-t-[5rem]">
      
      <div className="container mx-auto px-6 md:px-8">
        
        {/* GRID DE 4 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* === COLUNA 1: MARCA === */}
          <div className="flex flex-col space-y-6">
            {/* Logo + Texto */}
            <div className="flex items-center gap-4">
               {/* Ajuste o tamanho da logo conforme necessário */}
               <img src={logo} alt="CIG Logo" className="w-16 md:w-20 object-contain" />
               <div className="flex flex-col">
                 <span className="font-serif text-[#F3E5D8] text-lg leading-none tracking-wide">CHEFF INSTITUTO</span>
                 <span className="font-serif text-[#F3E5D8] text-lg leading-none tracking-wide">GASTRONÔMICO</span>
               </div>
            </div>

            <p className="text-gray-400 font-light text-sm italic">
              Somos mais que uma escola.
            </p>

            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              Oferecemos cursos de culinária profissional para transformar sua paixão em carreira. 
              Aprenda com chefs experientes e viva o verdadeiro sabor da gastronomia.
            </p>
          </div>

          {/* === COLUNA 2: CONTATOS === */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif text-2xl text-[#F3E5D8]">Contatos</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300 font-light hover:text-white transition-colors">
                <Icons.Whatsapp />
                <span>+55 47 99623-3728</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light hover:text-white transition-colors">
                <Icons.Mail />
                <span>cheffinstitutogastronomico@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 font-light hover:text-white transition-colors">
                <Icons.MapPin />
                <span className="leading-tight">Rua Reinoldo Rau n 565 - Centro de Jaraguá do Sul</span>
              </li>
            </ul>
          </div>

          {/* === COLUNA 3: SIGA-NOS === */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif text-2xl text-[#F3E5D8]">Siga-nos</h3>
            
            <div className="flex gap-6">
              <a href="#" aria-label="Instagram"><Icons.Instagram /></a>
              <a href="#" aria-label="Facebook"><Icons.Facebook /></a>
              <a href="#" aria-label="TikTok"><Icons.TikTok /></a>
            </div>
          </div>

          {/* === COLUNA 4: LINKS RÁPIDOS === */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif text-2xl text-[#F3E5D8]">Links rápidos</h3>
            
            <nav className="flex flex-col space-y-3">
              {['Início', 'Sobre', 'Cursos', 'Depoimentos', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                  className="text-gray-400 hover:text-[#D62828] transition-colors duration-300 font-light text-sm w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* === COPYRIGHT === */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light">
          <p>&copy; {new Date().getFullYear()} Cheff Instituto Gastronômico. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-400">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;