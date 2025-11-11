import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Practice
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              With years of dedicated experience in veterinary medicine, we are committed 
              to providing the highest quality care for your pets. Our practice combines 
              professional expertise with genuine compassion.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We understand that your pets are family, and we treat them with the same 
              care and attention we would want for our own. Every visit is an opportunity 
              to ensure your pet&apos;s health, happiness, and well-being.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/doctor.jpg"
                  alt="Expert Veterinarian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Expert Veterinarian
                </h3>
                <p className="text-gray-600">
                  Dedicated to providing exceptional care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

