import { useState, useEffect } from "react";
import { motion } from "motion/react";

const navItems = [
  { name: "Vision", href: "#vision" },
  { name: "Process", href: "#process" },
  { name: "Solution", href: "#solution" },
  { name: "Leadership", href: "#leadership" },
];

export default function Navbar() {
  // 1. State to track if the user has scrolled past the top
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Changes to true when scrolled down 50 pixels. 
      // You can increase this number (e.g., to window.innerHeight) if you want it to change later.
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // 3. Dynamically switch background, border, and shadow using the isScrolled state
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-max max-w-7xl px-4 md:px-6 lg:px-8 py-1 md:py-2 backdrop-blur-l rounded-full border flex items-center justify-between md:justify-center gap-3 md:gap-6 lg:gap-8 transition-colors duration-500 ${
        isScrolled 
          ? "bg-white/90 border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]" 
          : "bg-white/20 border-white/1 shadow-none"
      }`}
    >
      <a 
        href="#" 
        className="flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img 
          src="/media/vetrox-logo.webp" 
          alt="Vetrox Logo" 
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://picsum.photos/seed/glass/100/100";
          }}
        />
        {/* 4. Dynamically switch logo text color */}
        <span className={`font-sans font-black text-base md:text-lg lg:text-xl tracking-tighter leading-none transition-colors duration-500 ${isScrolled ? "text-primary" : "text-white"}`}>
          VETROX
        </span>
      </a>
      
      {/* 5. Dynamically switch divider colors */}
      <div className={`hidden md:block w-px h-6 transition-colors duration-500 ${isScrolled ? "bg-primary/10" : "bg-white/20"}`} />

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            // 6. Dynamically switch nav item colors
            className={`text-[10px] lg:text-sm font-semibold tracking-widest uppercase transition-all duration-500 hover:scale-105 hover:font-bold whitespace-nowrap ${
              isScrolled 
                ? "text-primary/70 hover:text-primary " 
                : "text-white/100 hover:text-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      
      
      <div className="flex items-center shrink-0">
        <a 
          href="#contact"
          // 7. Dynamically switch contact button color
          className={`font-semibold text-[10px] md:text-xs lg:text-sm tracking-widest uppercase hover:opacity-70 hover:font-bold transition-colors duration-500 leading-none ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}