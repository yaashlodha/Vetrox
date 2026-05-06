import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Hammer,
  Flame,
  Settings,
  GlassWater,
  ChevronDown,
  RefreshCw,
  Package,
  Truck,
  Database,
  Archive,
  BottleWine
} from "lucide-react";

const steps = [
  { 
    title: "Virgin Raw Material", 
    description: "Sourcing essential raw materials: Limestone, Soda ash, and Silica sand.",
    icon: GlassWater, 
    color: "#064e3b" // emerald-950
  },
  { 
    title: "Preprocessing", 
    description: "Mixing raw materials with iron oxides and heating for initial preparation.",
    icon: Settings, 
    color: "#065f46" // emerald-900
  },
  { 
    title: "Moulding", 
    description: "Air moulding the glass to achieve desired shapes and structures.",
    icon: Flame, 
    color: "#047857" // emerald-700
  },
  { 
    title: "Packaging and Finished Product", 
    description: "Final quality check and packaging of new glass products.",
    icon: Package, 
    color: "#059669" // emerald-600
  },
  { 
    title: "Sourcing and Procuring", 
    description: "Reverse logistics of used and disposed glass back to our hubs.",
    icon: Truck, 
    color: "#10b981" // emerald-500
  },
  { 
    title: "Data Collection & Segregation", 
    description: "Segregating glass by color, brand, and quantity with digital tracking.",
    icon: Database, 
    color: "#34d399" // emerald-400
  },
  { 
    title: "Preprocessing", 
    description: "Removal of stickers, labels, and other contaminants from procured bottles.",
    icon: RefreshCw, 
    color: "#059669" // emerald-600
  },
  { 
    title: "Crushing", 
    description: "Mechanical reduction of glass into uniform cullet batches.",
    icon: Hammer, 
    color: "#064e3b" // emerald-950
  },
];

// Lemniscate (∞ curve) - Horizontal
const getInfinityPoint = (t: number, scale: number) => {
  const sinT = Math.sin(t);
  const cosT = Math.cos(t);
  const denom = 1 + sinT * sinT;

  return {
    x: (scale * cosT) / denom,
    y: (scale * sinT * cosT) / denom,
  };
};

// Lemniscate (∞ curve) - Vertical
const getVerticalInfinityPoint = (t: number, scale: number) => {
  const p = getInfinityPoint(t, scale);
  return { x: p.y, y: p.x };
};


// Sample many points along curve
const sampleCurve = (samples: number, scale: number) => {
  const points = [];
  const startT =0.5 * Math.PI; // Start at the center crossover (top entry)
  for (let i = 0; i <= samples; i++) {
    const t = startT + (i / samples) * 2 * Math.PI; // Increase t to move toward Lower Left first
    points.push(getInfinityPoint(t, scale));
  }
  return points;
};

// Generate SVG path
const generatePath = (points: any[]) => {
  return `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;
};

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopScale = 320;
  const mobileScale = 140; // Smaller scale for horizontal mobile loop
  
  const nodeTValues = [
    1.35 * Math.PI, // Step 1 (Top Left)
    1.15 * Math.PI, // Step 2
    0.95 * Math.PI, // Step 3
    0.70 * Math.PI, // Step 4 (Bottom Left)
    // No node at 1.50 (Center)
    2.40 * Math.PI, // Step 5 (Top Right)
    2.20 * Math.PI, // Step 6
    1.95 * Math.PI, // Step 7
    1.70 * Math.PI, // Step 8 (Bottom Right)
  ];

  const desktopPoints = nodeTValues.map(t => getInfinityPoint(t, desktopScale));
  const mobilePoints = nodeTValues.map(t => getInfinityPoint(t, mobileScale));

  const desktopPath = generatePath(sampleCurve(200, desktopScale));
  const mobilePath = generatePath(sampleCurve(200, mobileScale));

  return (
    <section id="process" className="py-16 md:py-24 bg-[#f8fdfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1a3a3a] mb-4"
          >
            The Infinite Cycle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our proprietary 8-step process ensures that every piece of glass we collect 
            is transformed back into a valuable resource.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[450px] md:min-h-[650px]">
          {/* Info Card - Responsive */}
          <div className="absolute top-0 z-40 w-full flex justify-center px-2">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null ? (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-white/98 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl border border-teal-100 w-full max-w-[320px] md:max-w-xs text-center"
                >
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl mx-auto mb-2 md:mb-3 flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: steps[hoveredIndex].color }}
                  >
                    {(() => {
                      const Icon = steps[hoveredIndex].icon;
                      return <Icon size={20} className="md:w-6 md:h-6" />;
                    })()}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-[#1a3a3a] mb-1">
                    {steps[hoveredIndex].title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                    {steps[hoveredIndex].description}
                  </p>
                  <div className="mt-2 text-[9px] font-black text-teal-600 uppercase tracking-widest">
                    Step {hoveredIndex + 1} of 8
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center pt-4"
                >
                  <p className="text-[10px] md:text-sm text-teal-600/60 font-medium uppercase tracking-[0.2em] flex flex-col items-center gap-2">
                    {isMobile ? 'Tap a node to explore' : 'Hover a node to explore'}
                    <ChevronDown className="animate-bounce" size={14} />
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Loop Container */}
          <div className="relative w-full max-w-[350px] md:max-w-[1000px] aspect-[2/1.2] md:aspect-[2/1] mt-28 md:mt-20">
            {/* SVG Path */}
            <svg
              viewBox={isMobile ? "-220 -110 440 220" : "-500 -250 1000 500"}
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1B5E20" />
                  <stop offset="50%" stopColor="#A5D6A7" />
                  <stop offset="100%" stopColor="#1B5E20" />
                </linearGradient>
              </defs>

              <path
                d={isMobile ? mobilePath : desktopPath}
                fill="none"
                stroke="#1B5E20"
                strokeWidth={isMobile ? "32" : "64"}
                strokeLinecap="round"
                className="opacity-10"
              />

              <motion.path
                d={isMobile ? mobilePath : desktopPath}
                fill="none"
                stroke="url(#loopGrad)"
                strokeWidth={isMobile ? "28" : "56"}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.15))" }}
              />

              <motion.path
                d={isMobile ? mobilePath : desktopPath}
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="1 20"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -21] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="opacity-30"
              />
            </svg>

            {/* Center Bottle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex items-center justify-center">
              <motion.img
                src="/media/infinity-bottle.webp"
                alt="Infinity Bottle"
                className="w-16 md:w-45 object-contain"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center text-teal-600/20" style={{ transform: 'rotate(-48deg)' }}>
                <BottleWine size={120} className="md:w-[240px] md:h-[240px]" strokeWidth={1} />
              </div>
            </div>
            


            {/* Nodes */}
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = hoveredIndex === i;
              const point = isMobile ? mobilePoints[i] : desktopPoints[i];

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${point.x}px)`,
                    top: `calc(50% - ${point.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="z-10"
                >
                  <motion.div
                    onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                    onClick={() => isMobile && setHoveredIndex(hoveredIndex === i ? null : i)}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.1,
                      scale: { type: "spring", stiffness: 260, damping: 20 }
                    }}
                    className="relative cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="ripple"
                        className="absolute inset-0 rounded-full bg-teal-400/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.8, opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.15 : 1,
                        boxShadow: isActive ? "0 10px 20px rgba(0,0,0,0.2)" : "0 5px 10px rgba(0,0,0,0.1)"
                      }}
                      className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center border-[3px] md:border-4 border-white transition-colors duration-300"
                      style={{ backgroundColor: step.color }}
                    >
                      <StepIcon 
                        size={isMobile ? 18 : 24} 
                        className="text-white" 
                      />
                    </motion.div>

                    <motion.div 
                      animate={{ 
                        opacity: isActive ? 0 : 1,
                        y: isActive ? -5 : 0
                      }}
                      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-center w-24 md:w-28"
                    >
                      <div className="text-[8px] md:text-[9px] font-bold text-[#1a3a3a] leading-tight">
                        {step.title}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
