import { SALON_NAME } from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>
          © {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
        </p>
        <p>Website designed & built by Ananta❤️.</p>
      </div>
    </footer>
  );
};

export default Footer;

