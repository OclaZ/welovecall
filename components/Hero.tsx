"use client";

import Image from "next/image";
import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[100vh] mt-[-100px] flex  items-start sm:items-center justify-center pt-12 sm:pt-0 px-4 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center justify-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  leading-tight py-4">
              Générez des Leads Immobiliers Qualifiés avec{" "}
              <span className="text-[#00E072] font-bold relative inline-block py-4">
                WeLoveCall
                <svg
                  viewBox="0 0 200 12"
                  className="absolute left-0 -bottom-1 w-full hidden sm:block"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3,6 Q60,0 100,6 Q140,12 197,6"
                    fill="none"
                    stroke="#00E072"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl">
              Un service complet dédié à la génération de leads immobiliers
              qualifiés grâce à des campagnes publicitaires optimisées
            </p>
          </div>

          {/* Visual Elements */}
          <div className="relative w-full h-[400px] sm:h-[446px] max-w-[300px] mx-auto mt-8 lg:mt-0">
            {/* Background Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-full max-w-[300px] h-[300px] sm:h-[346px] bg-gray-100 rounded-lg shadow-lg border border-gray-950 z-0 overflow-hidden"
            >
              <Image
                src="/1-1.png"
                alt="Map Background"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 300px) 100vw, 300px"
                priority
              />
            </motion.div>

            {/* Lead Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 lg:left-[20px] lg:translate-x-0 w-[280px] sm:w-[320px] h-[270px] sm:h-[307px] bg-gray-100 rounded-lg shadow-lg border border-gray-950 z-10 overflow-hidden"
            >
              <Image
                src="/2-1.png"
                alt="Lead Information Card"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 320px) 100vw, 320px"
                priority
              />
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-[60px] sm:-bottom-[100px] left-1/2 lg:bottom-[10px] sm:left-[190px] transform -translate-x-1/2 lg:translate-x-0 z-20"
            >
              <div className="relative w-[100px] h-[100px] sm:w-[116px] sm:h-[116px] rounded-full">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="rounded-full border-2 border-gray-950 shadow-lg object-cover"
                  sizes="(max-width: 768px) 100px, 116px"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Elements - Only visible on larger screens */}
            <div className="hidden lg:block">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[30px] left-[-60px] z-30"
              >
                <DollarSign className="w-12 h-12" />
              </motion.div>

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
                className="absolute top-[5px] right-[-90px] z-30"
              >
                <Image
                  src="/star.svg"
                  alt="Star"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[5px] left-[-60px] z-30"
              >
                <div className="w-12 h-12 border-2 border-gray-950 rounded-full" />
              </motion.div>

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
                className="absolute bottom-[40px] right-[-90px] z-30"
              >
                <Image
                  src="/arrow.svg"
                  alt="Decorative Arrow"
                  width={100}
                  height={100}
                  className="scale-x-[-1] "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
