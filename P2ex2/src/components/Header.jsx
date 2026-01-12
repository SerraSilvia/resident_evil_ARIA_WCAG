import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      activo: false, // controla el color del botón de audio
      menuAbierto: false, // controla el menú hamburguesa
    };
  }

  manejarClickAudio = () => {
    this.setState(
      (prev) => ({ activo: !prev.activo }),
      () => this.audioRef.current.play()
    );
  };

  toggleMenu = () => {
    this.setState((prev) => ({ menuAbierto: !prev.menuAbierto }));
  };

  render() {
    const { activo, menuAbierto } = this.state;

    const enlaces = [
      { to: "/", label: "INICIO" },
      { to: "/videojuegos", label: "VIDEOJUEGOS" },
      { to: "/lectura", label: "LIBROS" },
      { to: "/filmografia", label: "PELÍCULAS" },
      { to: "/proxim", label: "PRÓXIMAMENTE" },
      { to: "/boardgames", label: "JUEGOS DE MESA" },
    ];

    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black/ backdrop-blur-md">
        <nav
          role="navigation"
          aria-label="Menú principal"
          className="max-w-10xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm"
        >
          {/* Logo o título */}
          <div className="text-white font-bold text-lg">RESIDENT EVIL</div>

          {/* Botón hamburguesa para móviles */}
          <button
            onClick={this.toggleMenu}
            className="sm:hidden p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Abrir menú de navegación"
            aria-expanded={menuAbierto}
          >
            ☰
          </button>

          {/* Enlaces del menú */}
          <div
            className={`${
              menuAbierto ? "flex" : "hidden"
            } w-full sm:flex sm:items-center sm:w-auto gap-4 flex-col sm:flex-row mt-2 sm:mt-0`}
          >
            {enlaces.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                tabIndex={0}
                className="text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Botón de audio */}
          <div className="flex justify-end items-center gap-2 mt-2 sm:mt-0">
            <audio ref={this.audioRef} src="././src/assets/audio/sonido.mp3" />
            <button
              onClick={this.manejarClickAudio}
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
