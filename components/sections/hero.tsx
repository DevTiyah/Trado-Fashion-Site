"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from 'next/image'
import ImageThree from '@/assets/ImageThree.png'
import ImageFive from '@/assets/ImageFive.png'
import ImageSix from '@/assets/ImageSix.png'
import ImageEight from '@/assets/ImageEight.png'


export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-16 overflow-hidden bg-stone-100"
      // style={{
      //   background:
      //     "linear-gradient(135deg, hsl(43 74% 66% / 0.1) 0%, hsl(27 87% 67% / 0.1) 100%)",
      // }}
    >
      <div className="absolute inset-0 pattern-dots pattern-black pattern-bg-white pattern-size-4 pattern-opacity-5 " />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full h-[550px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tailored Perfection in{" "}
            <span className="text-primary">African Men's Wear</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Crafting custom African fashion that blends tradition and modern style,
            creating unique pieces that tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg">Shop Collection</Button>
            <Button size="lg" variant="outline">
              Book a Fitting
            </Button>
          </div>
        </motion.div>

        {/* <div className="hidden lg:grid grid-cols-2 gap-6">
          {[0, 1].map((col) => (
            <motion.div
              key={col}
              initial={{ opacity: 0, y: col === 0 ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {images.slice(col * 3, (col + 1) * 3).map((src, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, col === 0 ? -200 : 200, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Fashion ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div> */}
        
        <div className="relative grid grid-cols-3 gap-4">
          {/* Top Row */}
          <div className="col-span-2 relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageThree}
              alt="Fashion Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageFive}
              alt="Fashion Image 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Row */}
          <div className="col-span-1 relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageSix}
              alt="Fashion Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageEight}
              alt="Fashion Image 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageThree}
              alt="Fashion Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ImageFive}
              alt="Fashion Image 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}