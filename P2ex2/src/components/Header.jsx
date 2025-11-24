import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();

    this.state = {
      activo: false, // controla el color del botón
    };
  }

  manejarClick = () => {
    this.setState({ activo: !this.state.activo }, () => {
      // reproducir audio al hacer clic
      this.audioRef.current.play();
    });
  };

  render() {
    const { activo } = this.state;

    return (
      <header className="header">
        <nav>
          <a href="#home">INICIO</a>
          <a href="#videojuegos">VIDEOJUEGOS</a>
          <a href="#lectura">LIBROS</a>
          <a href="#filmografia">PELICULAS</a>
          <a href="#incoming">PRÓXIMAMENTE</a>

          <div className="flex justify-end items-center gap-2">

            {/* Botón de volumen */}
            <button
              onClick={this.manejarClick}
              className={`p-1 rounded transition-colors duration-300
                ${activo ? "bg-green-500" : "bg-gray-300"}
              `}
            >
              <img
                src="././src/assets/icon/volumen.png"
                width={28}
                className="opacity-80"
                alt="volumen"
              />
            </button>

            {/* Audio oculto, solo para reproducir */}
            <audio
              ref={this.audioRef}
              src="././src/assets/audio/sonido.mp3"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
