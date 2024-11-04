"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AgencyHeroWithStats from "@/components/herowithstats";

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
      <AgencyHeroWithStats stats={stats} />

      {/* Who We Are Section */}
      <section className="py-16  bg-gradient-to-b from-white to-gray-50">
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
                src="/agence/Pages-Interested-Image.png"
                alt="Team Meeting"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16  bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/agence/office1.png"
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
      <section className="py-16  bg-gradient-to-b from-white to-gray-50">
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
                src="/agence/office2.png"
                alt="Office Space"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-white ">
        <div className="relative overflow-hidden rounded-2xl bg-[#00E072]">
          {/* Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: `
              radial-gradient(circle at 30% 50%, rgba(0, 224, 114, 0.7) 0%, transparent 70%),
              radial-gradient(circle at 70% 50%, rgba(0, 192, 98, 0.7) 0%, transparent 70%)
            `,
            }}
          />

          <div className="relative px-6 py-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto"
            >
              Envie de passer à l&apos;étape supérieure ?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button className="bg-black text-white hover:bg-gray-900 text-base md:text-lg px-6 py-2 h-auto rounded">
                Prendre un RDV gratuit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
