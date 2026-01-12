import React from "react";

class Book extends React.Component {
  render() {
    const { image, title, synopsis } = this.props;

    return (
      <div
        className="bg-gray-800/50 shadow-lg p-4 rounded-lg h-full flex flex-col"
        role="article" // ARIA: cada libro es un artículo independiente
        tabIndex={0}    // WCAG: permite enfocar la tarjeta con teclado
        aria-label={`Libro: ${title}`} // ARIA: descripción para lectores de pantalla
      >
        {/* Imagen + título */}
        <div
          className="flex items-center mb-4"
          role="group" // ARIA: grupo de elementos relacionados (imagen + título)
          aria-label={`Portada y título del libro ${title}`}
        >
          <img
            alt={`Portada del libro ${title}`} // ARIA implícito
            className="w-[80px] h-[120px] object-cover rounded-lg"
            src={image}
          />
          <h3 className="ml-4 text-white">{title}</h3>
        </div>

        {/* Sinopsis */}
        <p
          className="text-gray-300 text-sm text-justify break-words"
          aria-label={`Sinopsis del libro ${title}`} // ARIA: describe la sinopsis
          tabIndex={0} // WCAG: permite enfocar la sinopsis con teclado
        >
          {synopsis}
        </p>
      </div>
    );
  }
}

export default Book;
