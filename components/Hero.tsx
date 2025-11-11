export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Care for Your{" "}
              <span className="text-primary-600">Beloved Pets</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Compassionate veterinary services with years of experience. 
              Your pet's health and happiness are our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors text-center border-2 border-primary-600"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="text-6xl mb-4">🐕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Trusted Care
              </h3>
              <p className="text-gray-600">
                Professional veterinary services you can trust for your furry family members.
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-200 rounded-2xl shadow-xl p-6 transform -rotate-2 z-10">
              <div className="text-4xl mb-2">❤️</div>
              <p className="text-sm font-semibold text-gray-800">
                Compassionate Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

