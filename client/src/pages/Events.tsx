import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  MapPin,
  Users,
  Filter,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GradientText from "@/components/GradientText";
import NetworkAnimation from "@/components/NetworkAnimation";
import { data } from "@/data";

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const allEvents = data.events.map((event) => ({
    ...event,
    upcoming: !event.date.includes("Past event"),
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Filter animations
  const filterButtonVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      color: "#ffffff",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  // Featured event animation
  const featuredEventVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 80,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  // Filter events based on selected filter
  useEffect(() => {
    let filtered = [];

    switch (selectedFilter) {
      case "upcoming":
        filtered = allEvents.filter((event) => event.upcoming);
        break;
      case "past":
        filtered = allEvents.filter((event) => !event.upcoming);
        break;
      case "workshop":
        filtered = allEvents.filter((event) => event.tag === "WORKSHOP");
        break;
      case "competition":
        filtered = allEvents.filter((event) => event.tag === "COMPETITION");
        break;
      case "networking":
        filtered = allEvents.filter((event) => event.tag === "NETWORKING");
        break;
      case "lecture":
        filtered = allEvents.filter((event) => event.tag === "LECTURE SERIES");
        break;
      default:
        filtered = allEvents;
    }

    setVisibleEvents(filtered);
  }, [selectedFilter]);

  // Client-side rendering check
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid hydration issues
  }

  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Network Animation Background */}
      <div className="absolute inset-0 z-0">
        <NetworkAnimation
          className="opacity-20"
          particleCount={150}
          connectionDistance={150}
          mouseEffect={true}
          mouseRadius={120}
          mouseStrength={5}
        />
      </div>

      {/* Background animated elements */}
      <motion.div
        className="absolute left-0 top-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-10 top-1/2 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal
          className="text-center mb-16"
          direction="down"
          effect="spring"
          duration={1}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <GradientText>Events</GradientText>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dive into a world of innovation with our carefully curated events
            designed to enhance your skills and expand your network.
          </p>
        </ScrollReveal>

        {/* Featured Event */}
        <ScrollReveal
          className="mb-16"
          direction="up"
          effect="spring"
          duration={1.2}
        >
          <motion.div
            className="bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden"
            variants={featuredEventVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
                <motion.img
                  src={data.featuredEvent.image}
                  alt={data.featuredEvent.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-r" />

                <motion.div
                  className="absolute top-4 left-4 bg-accent text-white text-sm font-bold px-4 py-2 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                >
                  FEATURED EVENT
                </motion.div>

                <div className="absolute bottom-4 left-4 md:hidden">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {data.featuredEvent.title}
                  </h3>
                  <p className="text-gray-200">
                    {data.featuredEvent.description}
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="hidden md:block text-3xl font-bold mb-4">
                  {data.featuredEvent.title}
                </h3>
                <p className="hidden md:block text-gray-300 text-lg mb-6">
                  {data.featuredEvent.description}
                </p>

                <div className="flex items-center text-gray-300 mb-4">
                  <Calendar size={20} className="mr-3" />
                  <span className="text-lg">{data.featuredEvent.date}</span>
                </div>

                <div className="flex items-center text-gray-300 mb-6">
                  <MapPin size={20} className="mr-3" />
                  <span className="text-lg">{data.featuredEvent.location}</span>
                </div>

                <div className="mt-4">
                  <Button
                    className="blue-gradient px-6 py-3 rounded-lg font-medium text-white flex items-center"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Register Now</span>
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    >
                      <ArrowRight size={18} className="ml-2" />
                    </motion.span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal
          className="mb-10"
          effect="stagger"
          staggerChildren={0.1}
          delay={0.2}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {["all", "upcoming", "past", "workshop", "competition"].map(
              (filter) => (
                <motion.button
                  key={filter}
                  className={`px-5 py-2 rounded-full border border-gray-700 font-medium capitalize`}
                  onClick={() => setSelectedFilter(filter)}
                  variants={filterButtonVariants}
                  initial="inactive"
                  animate={selectedFilter === filter ? "active" : "inactive"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <Filter size={16} className="mr-2" />
                    {filter}
                  </div>
                </motion.button>
              )
            )}
          </motion.div>
        </ScrollReveal>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleEvents.map((event, index) => (
            <ScrollReveal
              key={index}
              effect="spring"
              duration={0.8}
              delay={index * 0.1}
              distance={50}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent" />

                  <motion.div
                    className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {event.tag}
                  </motion.div>

                  {event.upcoming ? (
                    <motion.div
                      className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                    >
                      UPCOMING
                    </motion.div>
                  ) : (
                    <motion.div className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      PAST EVENT
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.date}</span>
                  </div>

                  {event.location && (
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  )}

                  {event.coordinators && (
                    <div className="flex items-center text-gray-400">
                      <Users size={16} className="mr-2" />
                      <span className="truncate">{event.coordinators}</span>
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700/50">
                  <motion.button
                    className="w-full blue-gradient px-4 py-2 rounded-lg font-medium text-white"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* View All Events Button */}
        <ScrollReveal
          className="text-center mt-16"
          direction="up"
          effect="bounce"
          delay={0.4}
          distance={30}
        >
          <Button className="blue-gradient px-8 py-6 rounded-lg font-poppins font-medium shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-2 hover:scale-105">
            View All Events
          </Button>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-accent"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
