import { motion } from "motion/react";

const leaders = [
  {
    name: "Chaman",
    title: "CEO",
    image: "/media/chaman-photo.webp",
    description: "This is a test message to check if the description is visible and how many lines it takes to fill the space without making it look messy or unaligned."
  },
  {
    name: "Jainam",
    title: "CFO",
    image: "/media/jainam-photo.webp",
    description: "This is a test message to check if the description is visible and how many lines it takes to fill the space without making it look messy or unaligned."
  },
  {
    name: "Yaash",
    title: "CCO",
    image: "/media/yaash-photo.webp",
    description: "This is a test message to check if the description is visible and how many lines it takes to fill the space without making it look messy or unaligned."
  },
  {
    name: "Siddh",
    title: "COO",
    image: "/media/siddh-photo.webp",
    description: "This is a test message to check if the description is visible and how many lines it takes to fill the space without making it look messy or unaligned."
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
                <p className="text-foreground/60 text-[10px] md:text-sm leading-relaxed max-w-[200px] mx-auto">
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
