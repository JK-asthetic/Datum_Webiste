import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Events", href: "#events" },
  { text: "Team", href: "#team" },
  { text: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      // Set header background when scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Find the current active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
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
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      } border-b border-white/5`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo width={48} height={48} />
              <span className="font-poppins font-bold text-xl">DATUM</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary/20 transition-colors ${
                      activeSection === link.href ? "bg-secondary/10" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
