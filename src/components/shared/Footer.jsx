const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white px-6 py-8 border-t border-yellow-500">
      <div className="flex items-center justify-between">

      <div className="w-1/3 text-left">
        <p className="font-semibold text-yellow-400">Contacto</p>
        <p className="text-sm mt-2">contacto@inti.com</p>
        <p className="text-sm">Salta, Argentina</p>
      </div>

      <div className="w-1/3 flex justify-center">
        <img src="/imagotipo_inti3.png" alt="Imagotipo Inti" className="w-32" />
      </div>

      <div className="w-1/3 text-right">
        <p className="font-semibold text-yellow-400">Seguinos</p>
        <div className="mt-4 flex justify-end gap-4">
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
