import React from "react";
import { NavLink } from "react-router-dom";

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

  render() {
    const { activo } = this.state;

    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black/ backdrop-blur-md">
        <nav
          role="navigation"
          aria-label="Menú principal"
          className="max-w-10xl flex flex-wrap items-center justify-between px-4 sm:px-6 py-1 text-xs sm:text-sm"
        >
          {/* NavLinks con tabindex y estilo de foco visible */}
          <NavLink
            to="/"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            INICIO
          </NavLink>
          <NavLink
            to="/videojuegos"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            VIDEOJUEGOS
          </NavLink>
          <NavLink
            to="/lectura"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            LIBROS
          </NavLink>
          <NavLink
            to="/filmografia"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            PELÍCULAS
          </NavLink>
          <NavLink
            to="/proxim"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            PRÓXIMAMENTE
          </NavLink>
          <NavLink
            to="/boardgames"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            JUEGOS DE MESA
          </NavLink>

          {/* Audio oculto */}
          <audio ref={this.audioRef} src="././src/assets/audio/sonido.mp3" />

          {/* Botón de volumen con foco visible */}
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={this.manejarClick}
              className={`p-1 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                activo ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-pressed={activo}
              aria-label={activo ? "Silenciar audio" : "Activar audio"}
            >
              <img
                src="././src/assets/icon/audio.png"
                width={20}
                alt="Icono de audio"
              />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
