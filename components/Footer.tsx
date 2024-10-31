import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Agence",
      links: ["À propos", "Team"],
    },
    {
      title: "Nous contacter",
      links: ["Contact"],
    },
    {
      title: "Legal",
      links: ["Mentions légales", "Politique de confidentialité"],
    },
  ];

  return (
    <footer className="bg-[#001F2B] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/footer-logo-1024x350.png"
              alt="WeLoveCall Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-sm text-gray-400">© 2024 WeLoveCall</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
