import { Link } from "wouter";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { text: "Home", href: "#home" },
  { text: "About Us", href: "#about" },
  { text: "Events", href: "#events" },
  { text: "Our Team", href: "#team" },
  { text: "Contact", href: "#contact" },
];

const resourceLinks = [
  { text: "Blog", href: "#" },
  { text: "Tutorials", href: "#" },
  { text: "Projects", href: "#" },
  { text: "Gallery", href: "#" },
  { text: "FAQ", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Submit subscription
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
  };
  
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: (element as HTMLElement).offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Logo width={40} height={40} />
              <span className="font-poppins font-bold text-xl">DATUM</span>
            </div>
            <p className="text-gray-400 mb-6">
              Fostering innovation and technical excellence at GLA University.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-poppins font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-poppins font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input
                type="email"
                className="flex-1 bg-card border border-white/10 rounded-l-lg text-white focus:ring-accent"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="blue-gradient px-4 py-3 rounded-r-lg">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DATUM Club, GLA University. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
