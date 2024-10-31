"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, TrendingUp, Users } from "lucide-react";

export default function Growth() {
  const benefits = [
    "CROISSANCE DE VOTRE ENTREPRISE GARANTIE",
    "MARKETING CIBLÉ PAR GÉOLOCALISATION",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full max-w-[500px] mx-auto">
            {/* Background Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-lg overflow-hidden"
            >
              <Image
                src="/background 2.jpg"
                alt="Growth Background"
                fill
                className="object-cover border-2 border-gray-900"
              />
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-[-50px] right-4 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <Image
                src="/profile2.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Icons */}
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
              className="absolute top-[10%] left-[-10%]  bg-white rounded-full p-3 border-2 border-gray-900 shadow-xl "
            >
              <TrendingUp className="w-16 h-16 text-[#00E072]" />
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
              className="absolute top-1/2 right-[-10%] bg-white rounded-full p-3 border-2 border-gray-900 shadow-lg"
            >
              <Users className="w-16 h-16 text-[#00E072]" />
            </motion.div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Croissance Garantie pour les Courtiers Immobiliers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre approche innovante vous assure une croissance constante et
              mesurable de votre portefeuille immobilier.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00E072] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
