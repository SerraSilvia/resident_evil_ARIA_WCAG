import React from "react";

class Incoming extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="bg-black/40 p-4 rounded-xl border border-gray-700">
          <video className="w-full rounded-lg" controls>
            <source src="public/video/requiem.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
          <h3 className="mt-4 text-[#ed7700]">Residen Evil IX: Réquiem</h3>
          <p className="text-gray-300 mt-2">
            La analista del FBI Grace Ashcroft investiga una misteriosa
            enfermedad que causa muertes llevándola al Hotel Wrenwood y de
            vuelta a los orígenes de la tragedia en Raccoon City. Entrelazará su
            trama con la del agente Leon S. Kennedy y explorando el terror
            psicológico y los secretos de la ciudad.
          </p>
        </div>

        <div className="bg-black/40 p-4 rounded-xl border border-gray-700">
          <video className="w-full rounded-lg" controls>
            <source
              src="public/video/survivalUnit.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el vídeo.
          </video>
          <h3 className="mt-4 text-[#ed7700]">Residen Evil: Survival Unit</h3>
          <span className="text-gray-300 mt-2">
            El juego comienza con el protagonista despertando en un misterioso
            hospital, tras haber sido utilizado como sujeto de pruebas por la
            Corporación Umbrella. A medida que descubre la verdad e intenta
            escapar, la trama se desarrollará en un mundo paralelo donde
            regresan personajes de la serie original, revelando
            detalles de una narrativa nueva y escalofriante.
          </span>
        </div>
      </div>
    );
  }
}

export default Incoming;
