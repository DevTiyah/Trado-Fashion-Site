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