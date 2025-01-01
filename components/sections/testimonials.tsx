"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Okonkwo",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The attention to detail and craftsmanship is unmatched. My suits from Afrique Style always receive compliments.",
    location: "Lagos, Nigeria",
  },
  {
    name: "Samuel Mensah",
    role: "Wedding Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "They created the perfect traditional outfit for my wedding. The fusion of modern and cultural elements was exactly what I wanted.",
    location: "Accra, Ghana",
  },
  {
    name: "Michael Adebayo",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "As someone who values both style and cultural heritage, Afrique Style consistently exceeds my expectations.",
    location: "Nairobi, Kenya",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about their experience with Afrique
            Style.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}