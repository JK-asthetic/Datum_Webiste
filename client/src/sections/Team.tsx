import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import SocialIcons from "@/components/SocialIcons";
import ScrollReveal from "@/components/ScrollReveal";

export default function Team() {
  const { teamMembers } = data;

  return (
    <section id="team" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal 
          className="text-center mb-16"
          direction="scale"
          effect="spring"
          duration={0.8}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Meet Our <GradientText>Team</GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The brilliant minds behind DATUM who make our vision a reality
          </p>
        </ScrollReveal>
        
        <ScrollReveal
          effect="stagger"
          staggerChildren={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          threshold={0.1}
        >
          {teamMembers.map((member, index) => {
            // Calculate different animation effects based on position
            const directions = ["up", "left", "right", "down"];
            const effects = ["spring", "bounce", "slide"];
            const direction = directions[index % directions.length];
            const effect = effects[index % effects.length];
            
            return (
              <div key={index}>
                <Card className="bg-background overflow-hidden h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-3 hover:scale-105">
                  <div className="h-64 overflow-hidden relative">
                    <ScrollReveal
                      effect="fade"
                      duration={1}
                      delay={index * 0.1}
                    >
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`} 
                        className="w-full h-full object-cover transform transition-all duration-1000 hover:scale-110"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70"></div>
                    </ScrollReveal>
                  </div>
                  
                  <CardContent className="p-6 text-center">
                    <ScrollReveal
                      direction={direction as any}
                      effect={effect as any}
                      delay={0.1 + index * 0.05}
                    >
                      <h3 className="font-poppins font-bold text-xl mb-1">{member.name}</h3>
                    </ScrollReveal>
                    
                    <ScrollReveal
                      direction="up"
                      effect="slide"
                      delay={0.2 + index * 0.05}
                    >
                      <p className="text-accent text-sm mb-4">{member.role}</p>
                    </ScrollReveal>
                    
                    <ScrollReveal
                      direction="scale"
                      effect="spring"
                      delay={0.3 + index * 0.05}
                    >
                      <div className="transform transition-all duration-300 hover:scale-110">
                        <SocialIcons iconSize={18} />
                      </div>
                    </ScrollReveal>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </ScrollReveal>
        
        <ScrollReveal 
          className="mt-16 text-center"
          direction="up"
          effect="bounce"
          delay={0.4}
          distance={30}
        >
          <Button 
            variant="outline"
            className="bg-transparent border border-accent px-8 py-3 rounded-lg font-poppins font-medium hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 text-white transition-all transform hover:-translate-y-2 hover:scale-105"
          >
            View Full Team
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
