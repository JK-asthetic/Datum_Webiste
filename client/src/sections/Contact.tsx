import { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Validate email
    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Get in <GradientText>Touch</GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-300">GLAU, 17km Stone, NH-2, Mathura-Delhi Road, Mathura, Uttar Pradesh 281406</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-300">info@datumclub.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-poppins font-semibold text-2xl mb-6">Follow Us</h3>
              <SocialIcons iconSize={24} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block font-medium text-white mb-2">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:ring-accent" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-medium text-white mb-2">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:ring-accent" 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-medium text-white mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:ring-accent" 
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-medium text-white mb-2">Message</label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:ring-accent" 
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="blue-gradient px-8 py-3 rounded-lg font-poppins font-medium shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-1 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
