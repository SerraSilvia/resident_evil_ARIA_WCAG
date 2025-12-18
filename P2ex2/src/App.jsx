import React from "react";
import portada from "./assets/portada.png";

import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Snowstorm from "./components/Snowstorm.jsx";
import gamesData from "./data/games.json";
import VideoGame from "./components/Videogames/Videogame.jsx";
import booksData from "./data/books.json";
import Book from "./components/Reading/Book.jsx";
import Movie from "./components/Movies/Movie.jsx";
import moviesData from "./data/movies.json";
import Footer from "./components/Footer.jsx";
import Incoming from "./components/Incoming/Incoming.jsx";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Snowstorm />
      <Header />

      {/* Home */}
      <section
        id="home"
        className="flex flex-col justify-end items-center h-screen text-center relative z-20 px-4"
      >
        <img
          src={portada}
          alt="Portada"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 md:w-1/2 max-w-lg rounded-lg shadow-lg animate-fade-in"
        />
      </section>

      {/* Videojuegos */}
      <section
        id="videojuegos"
        className="relative z-20 overflow-x-auto py-6 px-4 sm:px-6 md:px-12"
      >
        <h1 className="mb-6 text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl">
          VIDEOJUEGOS
        </h1>

        <div className="relative flex space-x-4 sm:space-x-6 md:space-x-8 pb-16 max-w-full">
          {/* Línea horizontal de fondo */}
          <div
            className="absolute top-60 left-0 h-0.5 bg-gray-400"
            style={{ width: `${gamesData.games.length * (288 + 48)}px` }}
          ></div>

          {gamesData.games.map((game, index) => (
            <VideoGame
              key={index}
              year={game.year}
              title={game.title}
              image={game.image}
              synopsis={game.synopsis}
            />
          ))}
        </div>
      </section>

      {/* Libros */}
      <section id="lectura" className="p-6 relative z-20">
       <h1 className="mb-6 text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl">
          LIBROS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {booksData.books.map((book, index) => (
            <Book
              key={index}
              image={book.image}
              title={book.title}
              synopsis={book.synopsis}
            />
          ))}
        </div>
      </section>

      {/* Películas */}
      <section
        id="filmografia"
        className="relative z-20 overflow-x-auto py-6 px-4 sm:px-6 md:px-12"
      >
        <h1 className="mb-6 text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl">
          PELÍCULAS
        </h1>

        <div className="relative flex space-x-4 sm:space-x-6 md:space-x-8 pb-16 max-w-full">
          {/* Línea horizontal de fondo */}
          <div
            className="absolute top-60 left-0 h-0.5 bg-gray-400"
            style={{ width: `${moviesData.movies.length * (288 + 48)}px` }}
          ></div>

          {moviesData.movies.map((movie, index) => (
            <Movie
              key={index}
              year={movie.year}
              title={movie.title}
              image={movie.image}
              synopsis={movie.synopsis}
            />
          ))}
        </div>
      </section>

      {/* Próximamente */}
      <section
        id="proxim"
        className="relative z-30 py-6 px-4 sm:px-6 md:px-12"
      >
        <h1 className="mb-6 text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl">
          PRÓXIMAMENTE
        </h1>
        <Incoming />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
