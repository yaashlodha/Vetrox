import { motion } from "motion/react";

const leaders = [
  {
    name: "Chaman Chordia",
    title: "CEO",
    image: "/media/chaman-photo.webp",
    description: "An award-winning engineer, Chaman bridges technical precision with big-picture vision. He excels at breaking down complex challenges into predictable, scalable results. Driven by operational discipline and high standards, he ensures Vetrox consistently executes at the highest level."
  },
  {
    name: "Jainam Shah",
    title: "CFO",
    image: "/media/jainam-photo.webp",
    description: "Jainam keeps Vetrox financially sharp, running daily cost-benefit analyses to optimize our workflow. The team’s most reliable sounding board, he balances strict fiscal discipline with genuine empathy and wit, bringing structure, order, and heart to our growing organization."
  },
  {
    name: "Yaash B",
    title: "CCO",
    image: "/media/yaash-photo.webp",
    description: "Yaash blends analytical logic with sharp storytelling to define how Vetrox communicates. He translates complex market and environmental insights into clear, relatable stories building a trusted brand identity that connects deeply with stakeholders and establishes true market authority."
  },
  {
    name: "Siddh Shah",
    title: "COO",
    image: "/media/siddh-photo.webp",
    description: "Siddh is the operational engine turning strategy into seamless daily execution. Focused on lean efficiency and cross-functional alignment, he clears bottlenecks and builds reliable workflows so Vetrox can scale smoothly without missing deadlines or compromising quality."
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
  <p className="text-left text-foreground/60 text-xs md:text-sm leading-relaxed">
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