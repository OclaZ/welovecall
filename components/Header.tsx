"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo-welovecall.png"
            alt="WeLoveCall Logo"
            width={98}
            height={40}
          />
        </Link>
        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-gray-600 hover:text-green-400 text-xl">
            Accueil
          </Link>
          <Link
            href="/agence"
            className="text-gray-600 hover:text-green-400 text-xl"
          >
            L&apos;agence
          </Link>
          <Link href="#" className="text-gray-600 hover:text-green-400 text-xl">
            Services
          </Link>
          <Link href="#" className="text-gray-600 hover:text-green-400 text-xl">
            Tarifs
          </Link>
          <Link href="#" className="text-gray-600 hover:text-green-400 text-xl">
            Blog
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-[#00E072] text-white hover:bg-[#00C062] text-xl ">
            Planifier un RDV gratuit
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="container mx-auto px-4 pt-20">
            <nav className="flex flex-col gap-6">
              <Link
                href="#"
                className="text-lg text-gray-600 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/agence"
                className="text-lg text-gray-600 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                L&apos;agence
              </Link>
              <Link
                href="#"
                className="text-lg text-gray-600 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-lg text-gray-600 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="#"
                className="text-lg text-gray-600 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button
                className="w-full bg-[#00E072] text-white hover:bg-[#00C062] mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Planifier un RDV gratuit
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
