import Image from "next/image";

export default function Articles() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <Image
              src="/article 1.jpg"
              alt="Article"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-2">
                Comment Générer des Leads Immobiliers
              </h3>
              <p className="text-gray-600">
                Découvrez nos meilleures stratégies...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
