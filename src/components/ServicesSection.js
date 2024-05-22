import React from "react";

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 mt-0 bg-white sm:mt-60 md:mt-0 lg:mt-0 xl:mt-28 2xl:mt-80"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">Nossos Serviços 📝</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Consultoria Jurídica ⚖️
              </h3>
              <p className="text-gray-700">
                Orientação especializada em diversas áreas do direito.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Defesa em Litígios 👨‍⚖️
              </h3>
              <p className="text-gray-700">
                Representação em processos judiciais e administrativos.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Acordos Extrajudiciais 🤝
              </h3>
              <p className="text-gray-700">
                Negociação de acordos fora do ambiente judicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
