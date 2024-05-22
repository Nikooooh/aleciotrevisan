import React from "react";
import Foto from "../Images/foto3.png";

function AboutSection() {
  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={Foto}
              alt="Sobre nós"
              className="rounded-lg shadow-lg mx-auto md:mx-0"
            />
          </div>
          <div className="text-lg text-gray-700">
            <h2 className="text-4xl font-semibold mb-8 text-center md:text-left text-gray-800">
              Sobre nós
            </h2>
            <p className="mb-4">
              Com anos de experiência e uma equipe de advogados altamente
              qualificados, oferecemos serviços de advocacia com excelência e
              dedicação. Nossa missão é proporcionar justiça e soluções
              jurídicas eficazes para nossos clientes.
            </p>
            <p className="mb-6">
              Atuamos em diversas áreas do direito, sempre com ética,
              transparência e comprometimento. Estamos prontos para defender
              seus direitos e buscar os melhores resultados. Nossa especialidade
              é o direito previdenciário. Aposente-se conosco!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
