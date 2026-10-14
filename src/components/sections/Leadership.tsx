import { motion } from "motion/react";

const leaders = [
  {
    name: "Chaman Chordia",
    title: "CEO",
    image: "/media/chaman-photo.webp",
    description: "An engineer by training and a gold medalist by academic distinction, our CEO operates at the intersection of technical precision and long-term vision. He excels at breaking down complex industrial challenges and converting ambitious targets into predictable, repeatable outcomes. Known for his high standard of execution, he focuses on building scalable frameworks, driving operational discipline, and setting a high benchmark for excellence across every tier of the company."
  },
  {
    name: "Jainam Shah",
    title: "CFO",
    image: "/media/jainam-photo.webp",
    description: "Our CFO safeguards the fiscal integrity and long-term economic strength of Vetrox. Combining financial acumen with commercial strategy, he oversees capital deployment, budget optimization, and financial planning. By balancing steady risk control with support for sustainable expansion, he ensures the company maintains strong fiscal health, lean overhead, and a strong balance sheet capable of supporting scalable venture growth."
  },
  {
    name: "Yaash B",
    title: "CCO",
    image: "/media/yaash-photo.webp",
    description: "Our CCO brings a fresh, analytical lens to how Vetrox connects with industry stakeholders, partners, and the market. Blending structured logic with intuitive storytelling, he distills complex environmental and commercial insights into clear, memorable narratives. He shapes the voice, identity, and market presence of the brand ensuring that every message builds genuine trust, establishes market authority, and drives meaningful engagement."
  },
  {
    name: "Siddh Shah",
    title: "COO",
    image: "/media/siddh-photo.webp",
    description: "The operational engine behind Vetrox, our COO transforms high-level strategy into seamless daily operations. With an emphasis on lean execution and systemic efficiency, he eliminates bottlenecks, refines workflow mechanics, and ensures cross-functional alignment. His hands-on leadership style fosters accountability and structure, enabling the business to scale smoothly while consistently meeting strict performance standards and timeline commitments."
  },
];

export default function Leadership() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-primary font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Leadership (The Board)</h2>
          <p className="text-foreground/60 text-sm md:text-base">The visionaries behind the glass revolution.</p>
        </div>

        {/* Responsive layout: 1 col on small phones, 2 cols on mobile/tablets, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Changed aspect ratio to aspect-[4/5] to prevent stretching down too far */}
              <div className="relative aspect-[4/5] w-full rounded-xl md:rounded-2xl overflow-hidden mb-4 shadow-lg md:grayscale md:group-hover:grayscale-0 transition-all duration-500 shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text area with fixed typo from text-centre to text-center and cleared max-w width restriction */}
              <div className="text-center px-1 flex-grow">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary leading-tight">{leader.name}</h3>
                <p className="text-foreground/50 uppercase tracking-widest text-[9px] md:text-xs font-semibold mt-1 mb-2">{leader.title}</p>
                <p className="text-center text-foreground/60 text-xs md:text-sm leading-relaxed">
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