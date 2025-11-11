export default function Services() {
  const services = [
    {
      icon: "🏥",
      title: "General Checkups",
      description: "Comprehensive health examinations to keep your pet in optimal condition.",
    },
    {
      icon: "💉",
      title: "Vaccinations",
      description: "Essential vaccinations to protect your pet from common diseases.",
    },
    {
      icon: "🔬",
      title: "Diagnostics",
      description: "Advanced diagnostic services including lab work and imaging.",
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description: "Professional dental cleaning and oral health services.",
    },
    {
      icon: "⚕️",
      title: "Surgery",
      description: "Expert surgical procedures performed with care and precision.",
    },
    {
      icon: "💊",
      title: "Emergency Care",
      description: "24/7 emergency services for urgent pet health situations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive veterinary care tailored to your pet&apos;s unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

