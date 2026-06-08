import { motion } from "motion/react";

const leaders = [
  {
    name: "Chaman",
    title: "CEO",
    image: "/media/chaman-photo.webp",
    description: "An engineer by training, a gold medalist by merit, and a visionary leader by evolution. Our CEO bridges the gap between technical brilliance and strategic foresight. With a sharp instinct for the big picture, he effortlessly transforms ambitious blueprints into reality. Grounded yet forward-thinking, he doesn't just lead the company he sets the gold standard for how we grow."
  },
  {
    name: "Jainam",
    title: "CFO",
    image: "/media/jainam-photo.webp",
    description: "An engineer by training, a financial strategist by evolution. Our CFO brings a rare blend of logic and imagination to the numbers game. He has an uncanny ability to decode complex processes and read the room effortlessly. Endlessly hardworking and genuinely invested in those around him, he isn’t just a CFO he’s the one who actually picks up the phone."
  },
  {
    name: "Yaash",
    title: "CCO",
    image: "/media/yaash-photo.webp",
    description: "A student of human behavior by nature, a master storyteller and strategist by evolution also an Engineer by profession. Our CCO applies data-driven logic to the art of human connection. He looks past market trends to understand the human emotions behind them. Exceptionally articulate and intensely creative, he doesn't just drive commercial success he builds lasting bridges between our brand and the world."
  },
  {
    name: "Siddh",
    title: "COO",
    image: "/media/siddh-photo.webp",
    description: "A master strategist by design, a master of execution by evolution. Our COO translates complex logic into seamless everyday reality. With an uncanny ability to clear operational bottlenecks, he optimizes our business without ever losing sight of the people behind it. Relentlessly efficient and always in the trenches, he ensures every promise we make is a promise delivered."
  },
];

export default function Leadership() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-primary font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Leadership (The Board)</h2>
          <p className="text-foreground/60 text-sm md:text-base">The visionaries behind the glass revolution.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center px-2">
                <h3 className="text-base md:text-xl font-bold text-primary">{leader.name}</h3>
                <p className="text-foreground/50 uppercase tracking-widest text-[8px] md:text-xs font-medium mb-3">{leader.title}</p>
                <p className="text-left text-foreground/60 text-[10px] md:text-sm leading-relaxed max-w-[200px] mx-auto">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
