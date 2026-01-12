import React from "react";

class Movie extends React.Component {
  render() {
    const { year, image, title, synopsis } = this.props;

    return (
      <div
        className="relative flex flex-col items-center flex-shrink-0 w-72 mx-6"
        role="article"               // ARIA: indica que es un artículo independiente
        tabIndex={0}                  // WCAG: permite enfocar con teclado
        aria-label={`Película ${title}, año ${year}`} // ARIA: descripción de la tarjeta
      >
        {/* Año */}
        <span className="text-3xl font-bold text-white mb-2">{year}</span>

        {/* Línea vertical hasta la tarjeta (más gruesa) */}
        <div className="w-1 bg-gray-400 h-6 mb-2"></div>

        {/* Imagen + título */}
        <div
          className="bg-gray-800/50 shadow-lg p-4 flex mb-2 w-full max-h-[137px] h-[137px]"
          role="group"                  // ARIA: grupo de elementos relacionados
          aria-label={`Título de la película: ${title}`}
        >
          <img
            alt={`Portada de la película ${title}`} // ARIA implícito con alt
            className="w-[100px] h-[100px] object-cover rounded-lg"
            src={image}
          />
          <div className="ml-4 flex flex-col justify-center flex-1 overflow-hidden">
            <h3 className="text-white">{title}</h3>
          </div>
        </div>

        {/* Línea vertical hasta la línea horizontal */}
        <div className="relative w-1 bg-gray-400 h-6 flex items-center justify-center">
          <span className="block w-4 h-4 border-2 border-orange-500 rounded-full bg-transparent absolute -translate-y-1/2 top-5"></span>
        </div>

        {/* Línea vertical debajo del cruce hasta sinopsis */}
        <div className="w-1 bg-gray-400 h-6 mb-4"></div>

        {/* Sinopsis */}
        <div
          className="bg-gray-800/60 shadow-lg p-4 w-full h-[150px] overflow-hidden"
          aria-label={`Sinopsis de ${title}`} // ARIA: describe el contenido textual
          tabIndex={0}                         // WCAG: enfoque por teclado
        >
          <p className="text-gray-300 text-sm break-words overflow-auto text-justify">
            {synopsis}
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
