"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AgencyHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Notre Équipe <span className="text-[#00E072]">WeLoveCall</span>
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Team Profiles Section */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Top Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-[50px] right-1/4 z-20"
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
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-8 -left-8"
              >
                <Image
                  src="/star.svg"
                  alt="Decorative Star"
                  width={32}
                  height={32}
                  className="text-pink-400"
                />
              </motion.div>
            </motion.div>

            {/* Left Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
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
              className="absolute bottom-0 right-1/3"
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

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-20 right-20"
            >
              <Image
                src="/accent.svg"
                alt="Decorative Accent"
                width={24}
                height={24}
                className="text-[#00E072]"
              />
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
      </div>
    </section>
  );
}
