import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "RE/MAX", src: "/partners/remax.png" },
    { name: "Partner 2", src: "/partners/exp.png" },
    { name: "Partner 3", src: "/partners/sutton.png" },
    { name: "Partner 4", src: "/partners/royal.png" },
    { name: "Partner 5", src: "/partners/londono.png" },
  ];

  return (
    <section className="bg-gray-50 py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl text-center text-gray-600 mb-8">
          Les meilleurs du secteur nous font confiance.
        </p>
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-20 md:gap-12">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.src}
              alt={partner.name}
              width={200}
              height={80}
              className="h-20 w-full max-w-[150px] object-contain grayscale hover:grayscale-0 transition duration-300"
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
}
