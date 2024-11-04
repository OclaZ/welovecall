"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

interface AgencyHeroWithStatsProps {
  stats: Stat[];
}

export default function AgencyHeroWithStats({
  stats,
}: AgencyHeroWithStatsProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Notre Équipe <span className="text-[#00E072]">WeLoveCall</span>
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Team Profiles Section */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Top Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 right-1/4 z-20"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full bg-[#FFD700]" />
                <Image
                  src="/agence/Pages-Hero-Image-2.png"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover relative z-10"
                />
              </div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8"
              >
                <Image
                  src="/star.svg"
                  alt="Decorative Star"
                  width={32}
                  height={32}
                  className="text-pink-400 scale-x-[-1]"
                />
              </motion.div>
            </motion.div>

            {/* Left Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[80px] top-1/3 transform -translate-y-1/2"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/agence/Pages-Hero-Image-3.png"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-[80px] right-1/4 right-1/3"
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44">
                <div className="absolute inset-0 rounded-full bg-[#00E072]" />
                <Image
                  src="/agence/Pages-Hero-Image-1.png"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover relative z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Workspace Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/agence/workspace.jpg"
              alt="Modern Workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-xl font-semibold mb-2">
                Notre Espace de Travail
              </h2>
              <p className="text-sm">
                Un environnement inspirant pour des résultats exceptionnels
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-center bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                className="text-4xl md:text-5xl font-bold text-[#00E072] mb-3"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
