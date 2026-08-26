const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white px-6 py-5 border-t border-yellow-500">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    <div className="w-full md:w-1/3 text-center md:text-left">
      <p className="text-lg font-bold text-yellow-400">
        Contacto
      </p>

      <p className="text-sm mt-3">
        contacto@inti.com
      </p>

      <p className="text-sm mt-2">
        Salta, Argentina
      </p>
    </div>

    <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center">
      <img
        src="/imagotipo_inti3.png"
        alt="Imagotipo Inti"
        className="w-32 object-contain"
      />

      <p className="text-base font-semibold text-yellow-400 mt-4 mb-2">
        EQUIPO INTI CINEMA
      </p>

      <p className="text-sm text-gray-300">
        <a
          href="https://github.com/naza625"
          target="_blank"
          className="hover:text-yellow-400"
        >
          Nazarena Villafañez
        </a>

        {" | "}

        <a
          href="https://github.com/ricardovosahlounsta-cloud"
          target="_blank"
          className="hover:text-yellow-400"
        >
          Ricardo Vosalho
        </a>

        {" | "}

        <a
          href="https://github.com/Rosaryto"
          target="_blank"
          className="hover:text-yellow-400"
        >
          Rosario Pierrestegui
        </a>
      </p>
    </div>

    <div className="w-full md:w-1/3 text-center md:text-right">
      <p className="text-lg font-bold text-yellow-400">
        Seguinos
      </p>

      <div className="mt-3 flex justify-center md:justify-end gap-4">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
        </a>

        <a href="https://www.facebook.com/" target="_blank">
          <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
        </a>

        <a href="https://www.youtube.com/" target="_blank">
          <img src="/youtube.png" alt="YouTube" className="w-10 h-10" />
        </a>
      </div>
    </div>

  </div>

  <div className="mt-5 text-center text-sm">
    © 2026 INTI. Todos los derechos reservados.
  </div>
</footer>
  );
};

export default Footer;
