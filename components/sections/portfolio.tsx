"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from 'next/image'
import ImageTen from '@/assets/ImageTen.png'
import ImageEleven from '@/assets/ImageEleven.png'
import ImageTwelve from '@/assets/ImageTwelve.png'
import ImageThirteen from '@/assets/ImageThirteen.png'


const portfolioItems = [
    {
      image: ImageTen,
      title: "Modern Agbada",
      category: "Traditional Wear",
    },
    {
      image: ImageEleven,
      title: "Business Suit",
      category: "Contemporary",
    },
    {
      image: ImageTwelve,
      title: "Ankara Blazer",
      category: "Fusion",
    },
  // {
  //   image: "https://images.unsplash.com/photo-1621787279751-901e7b831d7f",
  //   title: "Safari Suit",
  //   category: "Casual Wear",
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac",
  //   title: "Evening Wear",
  //   category: "Formal",
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9",
  //   title: "Traditional Kaftan",
  //   category: "Cultural",
  // },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of handcrafted pieces that showcase the perfect
            blend of African heritage and contemporary fashion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Instagram className="w-4 h-4" />
            View More on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}