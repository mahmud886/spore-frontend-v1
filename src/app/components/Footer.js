export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="h-8 bg-primary w-full relative overflow-hidden flex items-center justify-center space-x-12">
        <span className="material-symbols-outlined text-black text-sm">warning</span>
        <span className="text-[10px] text-black font-black uppercase tracking-[0.4em]">
          Broadcast Active // System Online // Evolution Progressing
        </span>
        <span className="material-symbols-outlined text-black text-sm">warning</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="flex justify-center space-x-6 mb-12">
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-discord text-xl"></i>
          </a>
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a className="text-white/40 hover:text-primary transition-colors" href="#">
            <i className="fab fa-twitch text-xl"></i>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
          <a className="hover:text-white transition-colors" href="#">
            Terms of Use
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Fan Content Guidelines
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Cookie Declaration
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
            <span className="text-[10px] font-bold">EDEN</span>
          </div>
          <p className="text-[9px] text-white/20 max-w-md mx-auto leading-relaxed uppercase tracking-wider">
            © 2024. All Rights Reserved. EdenStone is an AI-powered narrative studio crafting immersive,
            and tech-powered IPs for the global entertainment marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
}
