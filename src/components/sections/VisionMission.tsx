import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-20 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full border-none shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={80} className="text-primary md:w-[120px] md:h-[120px]" />
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col h-full">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={20} md:size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-primary">Vision</h3>
              <p className="text-lg md:text-xl text-foreground/70 italic leading-relaxed">
                "To eliminate glass waste globally through technical innovation"
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="h-full border-none shadow-lg bg-primary text-white overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb size={80} className="md:w-[120px] md:h-[120px]" />
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col h-full">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={20} md:size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Mission (by Engineers)</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                To optimize the lifecycle of glass using precision engineering, crushing, and purification delivering furnace-ready resources to the world's manufacturers.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
