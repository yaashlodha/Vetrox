import { motion } from "motion/react";

export default function Intro() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10"
        >
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[10px] md:text-sm font-bold tracking-widest uppercase">
            Our Philosophy
          </div>
          <h2 className="text-primary font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
            At Vetrox, we believe glass is infinite.
          </h2>
          <p className="text-foreground/70 text-lg md:text-2xl leading-relaxed font-light text-balance">
            We bridge the gap between urban waste and industrial resource, ensuring a circular future for the glass industry.
          </p>
          <div className="h-1 w-24 md:w-32 bg-primary rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl hidden md:block" />
          <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src="/media/cullets-clear-photo.webp" 
              alt="Glass Furnace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
