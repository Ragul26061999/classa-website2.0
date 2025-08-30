import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer border border-gray-200 relative overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-32 h-32 rounded-full mb-4 overflow-hidden border-4 border-blue-200">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shimmer rounded-full"></div>
      </div>
      <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
      <p className="text-blue-600 text-center">{role}</p>
    </motion.div>
  );
};

const MeetTheTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      imageUrl: '/image/schoolboy.png', // Replace with actual image path
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      imageUrl: '/image/schoolgirl.png', // Replace with actual image path
    },
    {
      name: 'Peter Jones',
      role: 'Marketing Director',
      imageUrl: '/image/schoolgirls.png', // Replace with actual image path
    },
    {
      name: 'Alice Brown',
      role: 'Product Manager',
      imageUrl: '/image/student.png', // Replace with actual image path
    },
    {
      name: 'Bob White',
      role: 'UI/UX Designer',
      imageUrl: '/image/teacher.png', // Replace with actual image path
    },
    {
      name: 'Charlie Green',
      role: 'QA Engineer',
      imageUrl: '/image/parent.jpeg', // Replace with actual image path
    },
    {
      name: 'Diana Prince',
      role: 'HR Manager',
      imageUrl: '/image/Principal.png', // Replace with actual image path
    },
    {
      name: 'Eve Adams',
      role: 'Financial Analyst',
      imageUrl: '/image/1.jpeg', // Replace with actual image path
    },
  ];

  const duplicatedTeam = [...teamMembers, ...teamMembers];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <motion.div
          className="flex py-4 px-2 space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust duration for desired speed
              ease: "linear",
            },
          }}
          whileHover={{ x: "0%", transition: { duration: 0 } }} // Pause on hover
        >
          {duplicatedTeam.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default MeetTheTeam;