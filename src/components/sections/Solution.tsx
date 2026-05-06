import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Thermometer, Zap, Leaf, TreeDeciduous } from "lucide-react";

const BrokenBottle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Top part */}
    <path d="M10 2h4v3.5l2.5 3.5v2l-2.5-1.5-2 2-2-2-2.5 1.5v-2L10 5.5V2z" fill="currentColor" fillOpacity="0.2" />
    {/* Bottom part */}
    <path d="M7.5 15.5l2.5-1.5 2 2 2-2 2.5 1.5v4.5c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2v-4.5z" fill="currentColor" fillOpacity="0.2" />
    {/* Impact lines */}
    <path d="M2 12h2M3 8.5l1.5 1.5M3 15.5l1.5-1.5" />
    <path d="M20 12h2M19.5 8.5l-1.5 1.5M19.5 15.5l-1.5-1.5" />
  </svg>
);

const FullBottle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 2h4v3.5l2.5 3.5v11c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2v-11L10 5.5V2z" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export default function Solution() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section id="solution" className="py-20 md:py-32 px-6 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Our <br />
              <span className="text-primary">Solution</span>
            </h2>
            
            <div className="space-y-8">
              {/* The Recycling Gap moved here */}
              <div className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-primary/5">
                <div className="mb-8">
                  <h3 className="text-primary font-bold text-2xl mb-2">The Recycling Gap</h3>
                  <p className="text-foreground/70 text-lg font-medium">
                    Only <span className="text-primary font-bold">45%</span> of glass is recycled and <span className="text-red-500 font-bold">55%</span> is lost to landfill.
                  </p>
                </div>

                <div className="grid grid-cols-10 gap-2 md:gap-3">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      animate={i < 45 ? {
                        rotate: [0, -4, 4, -4, 4, 0],
                      } : {}}
                      viewport={{ once: true }}
                      transition={{ 
                        opacity: { delay: i * 0.005 },
                        scale: { delay: i * 0.005 },
                        rotate: i < 45 ? {
                          repeat: Infinity,
                          duration: 0.4,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        } : {}
                      }}
                      className="flex justify-center"
                    >
                      {i < 45 ? (
                        <BrokenBottle 
                          size={isMobile ? 16 : 24} 
                          className="text-primary" 
                        />
                      ) : (
                        <FullBottle 
                          size={isMobile ? 16 : 24} 
                          className="text-red-500"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-secondary flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-primary">Recycled (45%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <span className="text-sm font-bold text-foreground/40">Landfill (55%)</span>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-50 border-l-4 border-primary p-6 rounded-r-2xl shadow-sm my-10"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Zap size={20} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed italic">
                    "Virgin glass production requires extreme heat to trigger chemical reactions between sand, soda ash, and limestone. 
                    <span className="font-bold text-primary not-italic"> Cullet skips these reactions entirely.</span>"
                  </p>
                </div>
              </motion.div>

              <div className="relative p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden group">
                {/* Atmospheric Background Layers */}
                <div className="absolute inset-0 bg-primary transition-colors duration-700 group-hover:brightness-110" />
                <div className="absolute inset-0 opacity-40">
                   <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-foreground/20 rounded-full blur-[100px] animate-pulse" />
                   <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-foreground/20 rounded-full blur-[120px]" />
                </div>
                
                <div className="absolute -top-10 -right-10 p-4 opacity-10 group-hover:opacity-20 transition-all duration-1000 -rotate-12 group-hover:rotate-0 group-hover:scale-125">
                  <Leaf size={240} className="text-white" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 w-full text-white">
                    
                    {/* 1 Ton Section */}
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="flex-1 w-full flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/30 shadow-inner group-hover:bg-white/20 transition-all duration-500">
                         <FullBottle size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold font-heading mb-2 tracking-tight">1 Ton</div>
                      <div className="text-[11px] text-white/70 uppercase tracking-[0.25em] font-black opacity-80">Glass Recycled</div>
                    </motion.div>

                    {/* Arrow/Connection for Desktop */}
                    <div className="hidden lg:block text-white/30">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
                    </div>

                    {/* 315kg Section */}
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="flex-1 w-full flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/15 backdrop-blur-2xl border border-white/25 shadow-2xl relative z-20"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-6 border border-white/40 shadow-inner">
                         <Thermometer size={36} className="text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold font-heading mb-2 tracking-tight">315 kg</div>
                      <div className="text-[11px] text-white/70 uppercase tracking-[0.25em] font-black opacity-80">CO₂ Prevented</div>
                    </motion.div>

                    {/* Arrow/Connection for Desktop */}
                    <div className="hidden lg:block text-white/30">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
                    </div>

                    {/* Trees Section */}
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="flex-1 w-full flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
                    >
                      <div className="mb-6 grid grid-cols-5 gap-1.5 p-4 rounded-2xl bg-black/10 border border-white/10 shadow-inner">
                         {[...Array(15)].map((_, i) => (
                           <TreeDeciduous 
                             key={i} 
                             size={isMobile ? 12 : 16} 
                             className="text-secondary drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transform transition-all hover:scale-150 hover:text-white duration-300" 
                           />
                         ))}
                      </div>
                      <div className="text-4xl md:text-5xl font-bold font-heading mb-2 tracking-tight">15 Trees</div>
                      <div className="text-[11px] text-white/70 uppercase tracking-[0.25em] font-black opacity-80">Nature Equivalent</div>
                    </motion.div>

                  </div>
                </div>
              </div>

             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
