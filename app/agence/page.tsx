"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgencyPage() {
  const stats = [
    { number: "25", label: "Campagne Publicitaire" },
    { number: "15000", label: "Leads Générés" },
    { number: "15", label: "Conseiller Téléphonique" },
    { number: "32", label: "Clients Satisfait" },
  ];

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section with Team Members */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative max-w-3xl mx-auto">
            {/* Center large profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <Image
                src="/placeholder.svg"
                alt="Team Member"
                fill
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-[#00E072]" />
            </motion.div>

            {/* Floating profiles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-0 left-1/4 w-24 h-24"
            >
              <Image
                src="/placeholder.svg"
                alt="Team Member"
                fill
                className="rounded-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-1/4 w-24 h-24"
            >
              <Image
                src="/placeholder.svg"
                alt="Team Member"
                fill
                className="rounded-full object-cover"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 right-0 w-8 h-8 text-[#00E072]"
            >
              ✦
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 left-0 w-8 h-8 text-[#00E072]"
            >
              ★
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#00E072] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
              <p className="text-gray-600 mb-6">
                Chez WeLoveCall, nous sommes spécialisés dans la génération de
                leads pour les courtiers immobiliers au Canada. avec notre
                expertise en marketing digital et notre approche axée sur les
                résultats, nous aidons les professionnels de l&apos;immobilier à
                maximiser leur potentiel commercial. Notre objectif est de
                fournir des leads qualifiés qui se traduisent par des ventes
                concrètes.
              </p>
              <Button className="bg-[#00E072] text-white hover:bg-[#00C062]">
                Nos Services
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Team Meeting"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Office Space"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission :</h2>
              <p className="text-gray-600">
                Notre mission est claire : Connecter les courtiers immobiliers
                avec des clients potentiels en utilisant des techniques de
                marketing innovantes et efficaces. Nous croyons fermement que
                chaque courtier mérite d&apos;avoir accès à des outils
                performants pour atteindre ses objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pourquoi Choisir WeLoveCall ?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E072] mt-2" />
                  <div>
                    <h3 className="font-semibold">Expertise Spécialisée</h3>
                    <p className="text-gray-600">
                      Notre équipe comprend parfaitement le secteur immobilier
                      canadien et les besoins spécifiques des courtiers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E072] mt-2" />
                  <div>
                    <h3 className="font-semibold">Résultats Mesurables</h3>
                    <p className="text-gray-600">
                      Nous fournissons des rapports détaillés sur la performance
                      de vos campagnes, vous permettant de suivre votre retour
                      sur investissement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E072] mt-2" />
                  <div>
                    <h3 className="font-semibold">Support Personnalisé</h3>
                    <p className="text-gray-600">
                      Notre service client est flexible et réactif,
                      s&apos;adaptant à vos besoins spécifiques pour maximiser
                      vos efforts de génération de leads.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Office Space"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00E072] to-[#00C062]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Envie de passer à l&apos;étape supérieure ?
          </h2>
          <Button className="bg-black text-white hover:bg-gray-900">
            Prendre un RDV gratuit
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
