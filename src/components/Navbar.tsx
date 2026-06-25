import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Vision", href: "/#vision" },
  { name: "Process", href: "/#process" },
  { name: "Solution", href: "/#solution" },
  { name: "Leadership", href: "/#leadership" },
];

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-max max-w-7xl px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-white/90 backdrop-blur-xl rounded-full border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-between md:justify-center gap-3 md:gap-6 lg:gap-8"
    >
      <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer"
      onClick={() => {
    // If already on homepage, smoothly scroll to top
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}>
      <img 
          src="/media/vetrox-logo.webp" 
          alt="Vetrox Logo" 
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if image is not found
            e.currentTarget.src = "https://picsum.photos/seed/glass/100/100";
          }}
        />
        <span className="text-primary font-heading font-black text-base md:text-lg lg:text-xl tracking-tighter leading-none">VETROX</span>
      </Link>
      
      <div className="hidden md:block w-px h-6 bg-primary/10" />

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            className="text-primary/70 hover:text-primary text-[10px] lg:text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 whitespace-nowrap"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="w-px h-4 bg-primary/10 hidden md:block" />
      
      <div className="flex items-center shrink-0">
        <a 
          href="#contact"
          className="text-primary font-black text-[10px] md:text-xs lg:text-sm tracking-widest uppercase hover:opacity-70 transition-opacity leading-none"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
