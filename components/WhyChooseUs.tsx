"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Service 100% Personnalisé",
      description: "Un accompagnement sur mesure pour vos besoins",
    },
    {
      title: "Résultats Mesurables",
      description: "Suivez vos performances en temps réel",
    },
    {
      title: "Retour sur Investissement (ROI) Élevé",
      description: "Maximisez votre rentabilité",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir WeLoveCall pour la Génération de Leads
              Immobiliers ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre expertise et notre technologie de pointe vous offrent un
              avantage concurrentiel inégalé dans le marché immobilier.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00E072] flex items-center justify-center mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[400px] sm:h-[446px] max-w-[300px] mx-auto mt-8 lg:mt-0">
            {/* Background Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-3xl bg-gray-100 border-2 border-gray-900 overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/profile3.png"
                  alt="Background Profile"
                  fill
                  className="object-cover opacity-20 "
                  priority
                />
              </div>
            </motion.div>

            {/* Checkout Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-10 border-2 border-gray-900 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[20px] lg:translate-x-0 w-[300px] sm:w-[350px] h-[400px] sm:h-[450px] bg-gray-100 rounded-lg shadow-lg border border-gray-200 z-10 overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/checkout.png"
                  alt="Lead Information Card"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Icons */}
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
              className="absolute top-[5px] right-[-60px] z-30"
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
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10px] right-[-90px] z-30"
            >
              <Image
                src="/line.png"
                alt="Decorative Arrow"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
