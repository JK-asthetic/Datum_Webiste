import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { data } from "@/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Events() {
  const { events, featuredEvent } = data;

  return (
    <section id="events" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal
          className="text-center mb-16"
          direction="up"
          effect="spring"
          duration={0.8}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Our <GradientText>Events</GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our engaging events designed to fuel your passion for
            technology
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Featured Event */}
          <ScrollReveal
            className="col-span-1 md:col-span-2"
            direction="up"
            effect="slide"
            duration={0.8}
            threshold={0.2}
          >
            <div className="relative overflow-hidden rounded-xl h-96 transform transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1">
              <div className="absolute inset-0 overflow-hidden">
                <ScrollReveal effect="fade" duration={1.5}>
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-all duration-2000 hover:scale-110"
                  />
                </ScrollReveal>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <ScrollReveal direction="left" effect="slide" delay={0.3}>
                  <span className="inline-block px-4 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4">
                    UPCOMING EVENT
                  </span>
                </ScrollReveal>

                <ScrollReveal direction="up" effect="slide" delay={0.4}>
                  <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-2">
                    {featuredEvent.title}
                  </h3>
                </ScrollReveal>

                <ScrollReveal direction="up" effect="slide" delay={0.5}>
                  <p className="text-gray-300 mb-4">
                    {featuredEvent.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" effect="slide" delay={0.6}>
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    <span>{featuredEvent.date}</span>
                    <MapPin className="h-5 w-5 ml-4 mr-2 text-accent" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Regular Events */}
          {events.slice(0,2).map((event, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              effect={index % 2 === 0 ? "spring" : "bounce"}
              delay={index * 0.1}
              threshold={0.1}
            >
              <Card className="bg-card overflow-hidden h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform transition-all duration-1000 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <ScrollReveal
                    direction="right"
                    effect="slide"
                    delay={0.1 + index * 0.05}
                  >
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-4">
                      {event.tag}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    effect="slide"
                    delay={0.2 + index * 0.05}
                  >
                    <h3 className="font-poppins font-bold text-xl mb-2">
                      {event.title}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    effect="slide"
                    delay={0.3 + index * 0.05}
                  >
                    <p className="text-gray-300 text-sm mb-4">
                      {event.description}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    effect="slide"
                    delay={0.4 + index * 0.05}
                  >
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-4 w-4 mr-1 text-accent" />
                      <span>{event.date}</span>
                    </div>
                  </ScrollReveal>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          className="text-center"
          direction="up"
          effect="bounce"
          delay={0.4}
          distance={30}
        >
          <Button
            className="blue-gradient px-8 py-6 rounded-lg font-poppins font-medium shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-2 hover:scale-105"
            onClick={() => (window.location.href = "/events")}
          >
            View All Events
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
