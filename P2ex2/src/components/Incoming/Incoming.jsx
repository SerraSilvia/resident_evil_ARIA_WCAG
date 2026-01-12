import React from "react";

class Incoming extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Primer vídeo */}
        <div
          className="bg-black/40 p-4 rounded-xl border border-gray-700"
          role="region" // ARIA: indica un área independiente
          aria-label="Tráiler de Resident Evil IX: Réquiem" // ARIA: descripción
          tabIndex={0} // WCAG: enfocable con teclado
        >
          <video
            className="w-full rounded-lg"
            controls
            aria-label="Vídeo de Resident Evil IX: Réquiem"
          >
            <source src="public/video/requiem.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
          <h3 className="mt-4 text-[#ed7700]">
            Resident Evil IX: Réquiem
          </h3>
          <p className="text-gray-300 mt-2">
            La analista del FBI Grace Ashcroft investiga una misteriosa
            enfermedad que causa muertes llevándola al Hotel Wrenwood y de
            vuelta a los orígenes de la tragedia en Raccoon City. Entrelazará
            su trama con la del agente Leon S. Kennedy, explorando el terror
            psicológico y los secretos de la ciudad.
          </p>
        </div>

        {/* Segundo vídeo */}
        <div
          className="bg-black/40 p-4 rounded-xl border border-gray-700"
          role="region"
          aria-label="Tráiler de Resident Evil: Survival Unit"
          tabIndex={0}
        >
          <video
            className="w-full rounded-lg"
            controls
            aria-label="Vídeo de Resident Evil: Survival Unit"
          >
            <source src="public/video/survivalUnit.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
          <h3 className="mt-4 text-[#ed7700]">
            Resident Evil: Survival Unit
          </h3>
          <p className="text-gray-300 mt-2">
            El juego comienza con el protagonista despertando en un misterioso
            hospital, tras haber sido utilizado como sujeto de pruebas por la
            Corporación Umbrella. A medida que descubre la verdad e intenta
            escapar, la trama se desarrollará en un mundo paralelo donde regresan
            personajes de la serie original, revelando detalles de una narrativa
            nueva y escalofriante.
          </p>
        </div>
      </div>
    );
  }
}

export default Incoming;
