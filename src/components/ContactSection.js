import React from "react";

function ContactSection() {
  const whatsappNumber = "+5544988047030";
  const whatsappMessage =
    "Olá, vim pelo seu website e gostaria de agendar uma consulta.";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-r from-white to-gray-100"
    >
      <div className="container mx-auto text-center">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-800 hover:bg-green-950 text-lg text-white font-bold py-3 px-8 rounded-lg inline-flex items-center"
        >
          <svg
            className="fill-current w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.487 2 12s4.486 10 10 10 10-4.487 10-10S17.514 2 12 2zm3.893 15.573c-.577.577-1.376.894-2.214.894-1.87 0-3.497-1.44-3.943-3.368l-.156-.671c-.105-.445-.039-.867.221-1.188l.496-.496c.167-.167.295-.363.388-.576.316-.682.241-1.517-.214-2.754l-.106-.283-.295-.12c-.726-.316-1.36-.826-1.94-1.496l-.353-.377c-.61-.658-1.14-1.386-1.593-2.177L5.31 7.62c-.158-.337-.372-.655-.632-.933-.237-.25-.51-.44-.799-.57l-1.049-.389c-.47-.184-.872-.052-1.194.274l-1.432 1.432c-.367.366-.475.913-.271 1.387.132.321.32.604.549.833l.352.352c.13.13.25.274.367.431.158.206.35.452.524.686.215.291.373.544.476.728l.175.375c.146.31.094.646-.132.875l-.343.343c-.151.151-.213.301-.172.456l.05.149c.285.824.737 1.592 1.387 2.274l.376.42c.65.726 1.36 1.345 2.116 1.87l.194.144c1.171.822 1.994 1.698 2.548 2.605.426.724.605 1.43.614 2.147v.106c-.015.821-.28 1.553-.804 2.12zM12 4.886c.414 0 .828.158 1.145.475.63.63.63 1.635 0 2.265-.317.317-.73.475-1.145.475-.414 0-.827-.158-1.144-.475C10.222 6.52 10.222 5.416 10.836 4.802c.63-.63 1.635-.63 2.265 0 .317.317.475.73.475 1.145 0 .414-.158.827-.475 1.144-.317.317-.73.475-1.145.475-.414 0-.827-.158-1.144-.475-.315-.317-.473-.73-.473-1.144 0-.414.158-.827.473-1.144C11.173 5.044 11.587 4.886 12 4.886zm0 0"></path>
          </svg>
          <span>Entre em contato pelo WhatsApp</span>
        </button>
      </div>
    </section>
  );
}

export default ContactSection;
