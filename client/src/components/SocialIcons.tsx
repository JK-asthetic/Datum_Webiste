import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

export default function SocialIcons({ 
  className = "",
  iconSize = 20
}: SocialIconsProps) {
  const socialLinks = [
    { icon: Facebook, href: "#", ariaLabel: "Facebook" },
    { icon: Instagram, href: "#", ariaLabel: "Instagram" },
    { icon: Twitter, href: "#", ariaLabel: "Twitter" },
    { icon: Github, href: "#", ariaLabel: "GitHub" },
    { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        
        return (
          <motion.a
            key={social.ariaLabel}
            href={social.href}
            aria-label={social.ariaLabel}
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Icon size={iconSize} />
          </motion.a>
        );
      })}
    </div>
  );
}
