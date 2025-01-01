"use client";

import { motion } from "framer-motion";
import { Ruler, Scissors, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ImageFour from '@/assets/ImageFour.png'
const features = [
  {
    icon: Scissors,
    title: "Expert Craftsmanship",
    description: "Each piece is meticulously crafted by master tailors with decades of experience.",
  },
  {
    icon: Ruler,
    title: "Perfect Fit",
    description: "We ensure every garment fits perfectly through detailed measurements and fittings.",
  },
  {
    icon: Star,
    title: "Premium Materials",
    description: "We source the finest African fabrics and materials for unmatched quality and authenticity.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2010, Afrique Style has been at the forefront of contemporary African men's fashion. 
            We blend traditional craftsmanship with modern design sensibilities to create garments that 
            celebrate African heritage while embracing contemporary style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full bg-background/50 backdrop-blur-sm">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
           <Image
              src={ImageFour}
              className="w-full h-72"
              alt="Logo"
            />
            
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold max-w-lg text-center px-4">
              "We don't just make clothes, we craft experiences and preserve heritage"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}