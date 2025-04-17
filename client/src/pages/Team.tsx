import { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SocialIcons from "@/components/SocialIcons";
import img1 from "../../../attached_assets/teamphoto/head_photo/Harsh.jpg";
import img2 from "../../../attached_assets/teamphoto/head_photo/Ayushi.jpg";
import img3 from "../../../attached_assets/teamphoto/head_photo/Bhumika.jpg";
import img4 from "../../../attached_assets/teamphoto/tech_team/AMAN PANDEY.jpg";
import img5 from "../../../attached_assets/teamphoto/tech_team/ANSHIKA GUPTA.jpg";
import img6 from "../../../attached_assets/teamphoto/tech_team/NAMAN GUPTA.jpg";
import img7 from "../../../attached_assets/teamphoto/tech_team/NIKHIL AGRAWAL.jpg";
import img8 from "../../../attached_assets/teamphoto/tech_team/PALAK.jpg";
import img9 from "../../../attached_assets/teamphoto/tech_team/RISHABH TRIPATHI.jpg";
import img10 from "../../../attached_assets/teamphoto/tech_team/OM LAKSHKAR.jpg";
import img11 from "../../../attached_assets/teamphoto/tech_team/ABHISHEK YADAV.jpg";
import img12 from "../../../attached_assets/teamphoto/tech_team/AKSHAT GOYAL.jpg";
import img13 from "../../../attached_assets/teamphoto/tech_team/JATIN KHETAN.jpg";
import img14 from "../../../attached_assets/teamphoto/tech_team/KAVYA UPADHYAY.jpg";
import img15 from "../../../attached_assets/teamphoto/tech_team/MISTHI BANSAL.jpg";
import img16 from "../../../attached_assets/teamphoto/tech_team/PARTH GARG.jpg";



export default function FullTeam() {
  const [activeTab, setActiveTab] = useState("all");

  // Sample team data - replace with your actual data
  const teamData = {
    president: {
      name: "Harsh Gautam",
      year: "3rd Year",
      image: img1,
      role: "President",
    },
    vicePresident: {
      name: "Ayushi Katroliya",
      year: "3rd Year",
      image: img2,
      role: "Vice President",
    },
    generalSecretary: {
      name: "Bhumika Yadav",
      year: "3rd Year",
      image: img3,
      role: "General Secretary",
    },
    pr: {
      head: {
        name: "Jane Smith",
        year: "4th Year",
        image: "/team/pr-head.jpg",
        role: "PR Head",
      },
      members: [
        { name: "Alex Johnson", year: "3rd Year", image: "/team/member1.jpg" },
        {
          name: "Taylor Williams",
          year: "2nd Year",
          image: "/team/member2.jpg",
        },
        { name: "Morgan Brown", year: "3rd Year", image: "/team/member3.jpg" },
        { name: "Casey Garcia", year: "2nd Year", image: "/team/member4.jpg" },
      ],
    },
    design: {
      head: {
        name: "Saloni Bansal",
        year: "4th Year",
        image: "/team/design-head.jpg",
        role: "Design Team Head",
      },
      members: [
        { name: "Jordan Patel", year: "3rd Year", image: "/team/member5.jpg" },
        { name: "Riley Kim", year: "2nd Year", image: "/team/member6.jpg" },
        { name: "Quinn Chen", year: "3rd Year", image: "/team/member7.jpg" },
        {
          name: "Avery Rodriguez",
          year: "2nd Year",
          image: "/team/member8.jpg",
        },
      ],
    },
    events: {
      head: {
        name: "Aryan Sharma",
        year: "3rd Year",
        image: "/team/events-head.jpg",
        role: "Events & Management Head",
      },
      members: [
        {
          name: "Dakota Martinez",
          year: "3rd Year",
          image: "/team/member9.jpg",
        },
        {
          name: "Parker Nguyen",
          year: "2nd Year",
          image: "/team/member10.jpg",
        },
        {
          name: "Skyler Thompson",
          year: "3rd Year",
          image: "/team/member11.jpg",
        },
        { name: "Jamie Walker", year: "2nd Year", image: "/team/member12.jpg" },
      ],
    },
    tech: {
      head: {
        name: "Aman Pandey",
        year: "3rd Year",
        image: img4,
        role: "Tech Team Head",
      },
      cohead: {
        name: "Anshika Gupta",
        year: "3rd Year",
        image: img5,
        role: "Tech Team CO-Head",
      },
      members: [
        {
          name: "Naman Gupta",
          year: "3rd Year",
          image: img6,
        },
        {
          name: "Nikhil Agrawal",
          year: "3rd Year",
          image: img7,
        },
        {
          name: "Palak",
          year: "3rd Year",
          image: img8,
        },
        {
          name: "Rishabh Tripathi",
          year: "3rd Year",
          image: img9,
        },
        {
          name: "Om Lakshkar",
          year: "2nd Year",
          image: img10,
        },
        {
          name: "Abhishek Yadav",
          year: "2nd Year",
          image: img11,
        },
        {
          name: "Akshat Goyal",
          year: "2nd Year",
          image: img12,
        },
        {
          name: "Jatin Khetan",
          year: "2nd Year",
          image: img13,
        },
        {
          name: "Kavya Upadhyay",
          year: "2nd Year",
          image: img14,
        },
        {
          name: "Misthi Bansal",
          year: "2nd Year",
          image: img15,
        },
        {
          name: "Parth Garg",
          year: "2nd Year",
          image: img16,
        },
      ],
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  // Filter team members based on active tab
  const getFilteredTeam = () => {
    if (activeTab === "all") {
      return Object.keys(teamData).map((key) => ({
        department: key,
        ...teamData[key],
      }));
    }

    return [
      {
        department: activeTab,
        ...teamData[activeTab],
      },
    ];
  };

  const filteredTeam = getFilteredTeam();

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
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
          <ScrollReveal
            className="text-center mb-16"
            direction="down"
            effect="spring"
            duration={1}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <GradientText>Complete Team</GradientText>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Meet the incredible individuals who make DATUM a driving force in
              the data science community
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 mb-12">
        <ScrollReveal
          className="flex flex-wrap justify-center gap-4"
          effect="stagger"
          staggerChildren={0.1}
        >
          {["all", "pr", "design", "events", "tech"].map((tab) => (
            <motion.button
              key={tab}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "blue-gradient text-white shadow-lg shadow-accent/20"
                  : "bg-gray-800/40 border border-gray-700 hover:bg-gray-700/50"
              }`}
              onClick={() => setActiveTab(tab)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab === "all"
                ? "All Teams"
                : tab === "pr"
                ? "PR Team"
                : tab === "design"
                ? "Design Team"
                : tab === "events"
                ? "Events & Management"
                : "Tech Team"}
            </motion.button>
          ))}
        </ScrollReveal>
      </div>

      {/* Team Sections */}
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredTeam.map((teamSection) => (
            <ScrollReveal
              key={teamSection.department}
              className="mb-16"
              effect="fade"
              duration={0.8}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-accent pl-4">
                  {teamSection.department === "president"
                    ? "President"
                    : teamSection.department === "vicePresident"
                    ? "Vice President"
                    : teamSection.department === "generalSecretary"
                    ? "General Secretary"
                    : teamSection.department === "pr"
                    ? "PR Team"
                    : teamSection.department === "design"
                    ? "Design Team"
                    : teamSection.department === "events"
                    ? "Events & Management"
                    : "Tech Team"}
                </h2>

                {/* Check if its a leadership position or team section */}
                {["president", "vicePresident", "generalSecretary"].includes(
                  teamSection.department
                ) ? (
                  // Leadership position (single person display)
                  <div className="mb-12">
                    <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
                          <motion.img
                            src={teamSection.image}
                            alt={teamSection.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 20,
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">
                            {teamSection.name}
                          </h4>
                          <p className="text-accent mb-2">{teamSection.role}</p>
                          <p className="text-gray-400 mb-4">
                            {teamSection.year}
                          </p>
                          <div className="mt-4">
                            <SocialIcons iconSize={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Team section with head and members
                  <>
                    {/* Department Head */}
                    <div className="mb-12">
                      <h3 className="text-xl font-medium mb-6 text-accent">
                        Team Head
                      </h3>
                      <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
                            <motion.img
                              src={teamSection.head.image}
                              alt={teamSection.head.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold">
                              {teamSection.head.name}
                            </h4>
                            <p className="text-accent mb-2">
                              {teamSection.head.role}
                            </p>
                            <p className="text-gray-400 mb-4">
                              {teamSection.head.year}
                            </p>
                            <div className="mt-4">
                              <SocialIcons iconSize={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Display Co-Head if present (only in Tech team) */}
                    {teamSection.cohead && (
                      <div className="mb-12">
                        <h3 className="text-xl font-medium mb-6 text-accent">
                          Team Co-Head
                        </h3>
                        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                          <div className="flex flex-col md:flex-row items-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
                              <motion.img
                                src={teamSection.cohead.image}
                                alt={teamSection.cohead.name}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 20,
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold">
                                {teamSection.cohead.name}
                              </h4>
                              <p className="text-accent mb-2">
                                {teamSection.cohead.role}
                              </p>
                              <p className="text-gray-400 mb-4">
                                {teamSection.cohead.year}
                              </p>
                              <div className="mt-4">
                                <SocialIcons iconSize={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Department Members */}
                    {teamSection.members && teamSection.members.length > 0 && (
                      <div>
                        <h3 className="text-xl font-medium mb-6 text-accent">
                          Team Members
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {teamSection.members.map((member, index) => (
                            <ScrollReveal
                              key={index}
                              effect="spring"
                              duration={0.8}
                              delay={index * 0.1}
                            >
                              <motion.div
                                className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
                                whileHover={{
                                  y: -10,
                                  boxShadow:
                                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                  transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 12,
                                  },
                                }}
                              >
                                <div className="h-56 overflow-hidden">
                                  <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 20,
                                    }}
                                  />
                                </div>
                                <div className="p-6 text-center">
                                  <h4 className="text-xl font-bold mb-1">
                                    {member.name}
                                  </h4>
                                  <p className="text-gray-400">{member.year}</p>
                                  <div className="mt-4">
                                    <SocialIcons iconSize={16} />
                                  </div>
                                </div>
                              </motion.div>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>

      {/* Join Us Section */}
      <section className="py-16 mt-12">
        <div className="container mx-auto px-6">
          <ScrollReveal
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-10 text-center max-w-4xl mx-auto backdrop-blur-sm"
            direction="up"
            effect="spring"
            duration={0.8}
          >
            <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join DATUM. If
              you're interested in data science and want to be part of our
              community, we'd love to hear from you!
            </p>
            <Button
              className="blue-gradient px-8 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-2 hover:scale-105"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
