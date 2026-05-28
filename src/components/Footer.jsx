
const Footer = () => {
  return (
    <footer className="w-full py-3 text-center backdrop-blur-sm bg-black/30">
      <p className="text-white/60 text-xs tracking-wide">
        Made with <span className="text-red-400">❤️</span> by{" "}
        <a
          href="https://github.com/Prem-Thakur786"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 font-semibold hover:text-white transition-colors duration-200"
        >
          Prem.Thakur1618
        </a>
      </p>
    </footer>
  );
};

export default Footer;