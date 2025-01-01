"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Portfolio", "Services", "Contact"],
  Services: ["Custom Tailoring", "Ready to Wear", "Alterations", "Consultations"],
  Support: ["FAQ", "Sizing Guide", "Shipping", "Returns"],
};

const socialLinks = [
  { icon: Instagram, href: "/instagram", label: "Instagram" },
  { icon: Facebook, href: "/facebook", label: "Facebook" },
  { icon: Twitter, href: "/twitter", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="font-semibold text-xl">Trado Fashion</span>
            </div>
            <p className="text-muted-foreground">
              Crafting excellence in African men's fashion, blending tradition with contemporary style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={`${title}-${link}`}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground">
              Stay updated with our latest collections and style tips.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t py-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Afrique Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}