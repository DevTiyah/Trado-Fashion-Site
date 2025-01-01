"use client";

import { motion } from "framer-motion";
import { Scissors, ShoppingBag, Ruler } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Experience the luxury of perfectly fitted garments crafted just for you. Our master tailors create bespoke pieces that reflect your style and personality.",
    price: "Starting from $299",
    features: [
      "Personal consultation",
      "Premium fabric selection",
      "Multiple fittings",
      "Alterations included",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Ready-to-Wear",
    description: "Discover our curated collection of ready-to-wear pieces that combine African heritage with contemporary design.",
    price: "Starting from $149",
    features: [
      "Seasonal collections",
      "Premium materials",
      "Size customization",
      "Fast delivery",
    ],
  },
  {
    icon: Ruler,
    title: "Alterations",
    description: "Perfect fit guaranteed with our professional alteration services. We ensure your garments fit impeccably.",
    price: "Starting from $49",
    features: [
      "Expert tailoring",
      "Quick turnaround",
      "Fit guarantee",
      "Free consultation",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            From bespoke tailoring to ready-to-wear collections, we offer a comprehensive range of services
            to meet your fashion needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="text-center mb-6">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Book Now</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}