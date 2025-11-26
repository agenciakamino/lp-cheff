import React from 'react';

function Background({ bgImage }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Textura de fundo"
          className="w-full h-full min-w-[1900px] max-w-none object-cover object-center grayscale-[35%] opacity-70 md:opacity-60"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[#050505]/70 md:bg-transparent md:bg-gradient-to-r md:from-[#050505] md:from-10% md:via-[#050505]/80 md:via-45% md:to-transparent"></div>

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden"></div>
    </div>
  );
}

export default Background;
