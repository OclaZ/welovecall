"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Method() {
  const steps = [
    {
      title: "Création de campagnes publicitaires ciblées",
      description:
        "Nous créons des campagnes publicitaires optimisées pour générer des leads vendeurs qualifiés dans le secteur immobilier.",
    },
    {
      title: "Filtrage des leads par notre équipe",
      description:
        "Notre équipe qualifie chaque lead pour garantir leur qualité et leur intention réelle.",
    },
    {
      title: "Prise de rendez-vous avec des vendeurs qualifiés",
      description:
        "Les leads qualifiés sont directement intégrés à votre calendrier.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre Méthode en 3 Étapes pour la Génération de Leads Immobiliers
            Qualifiés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche éprouvée pour vous apporter des résultats concrets et
            mesurables.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden transform transition-transform duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00E072]"></div>
              <div className="mb-4">
                <CheckCircle className="text-[#00E072] w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-gray-100">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
