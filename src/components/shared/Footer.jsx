const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white px-6 py-8 border-t border-yellow-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="text-lg font-bold text-yellow-400">Contacto</p>

          <p className="text-sm mt-4">contacto@inti.com</p>

          <p className="text-sm mt-2">Salta, Argentina</p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/imagotipo_inti3.png"
            alt="Imagotipo Inti"
            className="w-28 md:w-32"
          />
        </div>

        <div className="w-full md:w-1/3 text-center md:text-left md:pl-70">
          <p className="text-lg font-bold text-yellow-400">Seguinos</p>

          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
            <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
            <img src="/youtube.png" alt="YouTube" className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        <p>© 2026 INTI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
