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
    this.setState(
      (prev) => ({ activo: !prev.activo }),
      () => this.audioRef.current.play()
    );
  };

  toggleMenu = () => {
    this.setState((prev) => ({ menuAbierto: !prev.menuAbierto }));
  };

  cerrarMenu = () => {
    this.setState({ menuAbierto: false });
  };

  render() {
    const { activo, menuAbierto } = this.state;

    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black/ backdrop-blur-md">
        <nav
          className="
              max-w-10xl 
              flex flex-wrap items-center justify-between
              px-4 sm:px-6
              py-1  
              text-xs sm:text-sm
                    "
        >
          <a href="#home">INICIO</a>
          <a href="#videojuegos">VIDEOJUEGOS</a>
          <a href="#lectura">LIBROS</a>
          <a href="#filmografia">PELICULAS</a>
          <a href="#incoming">PRÓXIMAMENTE</a>
          {/* Audio oculto, solo para reproducir */}
          <a>
            <audio ref={this.audioRef} src="././src/assets/audio/sonido.mp3" />
          </a>

          <div className="flex justify-end items-center gap-2">
            {/* Botón de volumen */}
            <button
              onClick={this.manejarClick}
              className={`p-1 rounded transition-colors duration-300
                ${activo ? "bg-green-500" : "bg-gray-300"}
              `}
            >
              <img
                src="././src/assets/icon/audio.png"
                width={20}
                alt="volumen"
              />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
