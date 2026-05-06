import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#186B3E]">
      {/* Background Image with Blur - Using a more specific glass cullet image if possible */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/media/cullet-photo.webp')`,
          filter: 'blur(8px) brightness(0.5)'
        }}
      />

      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 md:mb-6"
        >
          <h1 className="text-white font-heading text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-[-0.05em] leading-[0.9] drop-shadow-2xl">
            VETROX
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-secondary font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-10 md:mb-12 drop-shadow-md text-balance"
        >
          Made by thousands, used by crores, processed by one
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              Partner with us.
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative Glass Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 -z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 backdrop-blur-3xl rounded-full border border-white/10 -z-0" />
    </section>
  );
}
