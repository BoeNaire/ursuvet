export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      text: "Servicii excelente! Doctorul este foarte atent și îngrijitor. Recomand cu căldură cabinetul Ursu Vet.",
      date: "Acum 2 luni",
    },
    {
      name: "Ion Georgescu",
      rating: 5,
      text: "Profesionalism de top! Câinele meu a fost tratat cu multă grijă și dedicare. Mulțumim mult!",
      date: "Acum 1 lună",
    },
    {
      name: "Ana Ionescu",
      rating: 5,
      text: "Cel mai bun cabinet veterinar din Slatina! Personalul este foarte prietenos și competenți. Pisica mea se simte mult mai bine.",
      date: "Acum 3 săptămâni",
    },
    {
      name: "Alexandru Radu",
      rating: 5,
      text: "Servicii de calitate superioară. Recomand cu încredere pentru toți proprietarii de animale de companie.",
      date: "Acum 2 săptămâni",
    },
    {
      name: "Elena Stoica",
      rating: 5,
      text: "Foarte mulțumită de serviciile oferite. Doctorul este extrem de competent și empatic. Mulțumim!",
      date: "Acum 1 săptămână",
    },
    {
      name: "Mihai Constantinescu",
      rating: 5,
      text: "Excelent cabinet! Am fost foarte impresionat de profesionalism și de modul în care au tratat câinele meu.",
      date: "Acum 3 zile",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recenzii reale de la proprietarii mulțumiți de serviciile noastre
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <div className="text-3xl">⭐</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Cabinet+veterinar+Slatina+Ursu+Vet+Recenzii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Vezi toate recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  );
}

