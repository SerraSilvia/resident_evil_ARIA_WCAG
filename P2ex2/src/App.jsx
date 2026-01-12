import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import portada from "./assets/portada.png";

// Importación de componentes existentes
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Snowstorm from "./components/Snowstorm.jsx";
import Footer from "./components/Footer.jsx";
import VideoGame from "./components/Videogames/Videogame.jsx";
import Book from "./components/Reading/Book.jsx";
import Movie from "./components/Movies/Movie.jsx";
import Incoming from "./components/Incoming/Incoming.jsx";
import BoardGameRE from "./components/BoardGames/Board.jsx";

// Importación de datos
import gamesData from "./data/games.json";
import booksData from "./data/books.json";
import moviesData from "./data/movies.json";
import boardData from "./data/boardGames.json";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="relative min-h-screen text-white">
          <Background />
          <Snowstorm />

          {/* Header */}
          <Header />

          <main className="pt-20">
            <Routes>
              {/* HOME */}
              <Route
                path="/"
                element={
                  <section className="flex flex-col justify-end items-center h-[80vh] relative z-20 px-4">
                    <img
                      src={portada}
                      alt="Portada"
                      className="max-w-lg rounded-lg shadow-lg animate-fade-in"
                    />
                  </section>
                }
              />

              {/* VIDEOJUEGOS */}
              <Route
                path="/videojuegos"
                element={
                  <section className="relative z-20 overflow-x-auto py-6 px-4 md:px-12">
                    <h1 className="mb-6 text-center text-6xl">VIDEOJUEGOS</h1>
                    <div className="relative flex space-x-4 pb-16">
                      {gamesData.games.map((game, index) => (
                        <VideoGame key={index} {...game} />
                      ))}
                    </div>
                  </section>
                }
              />

              {/* LECTURA */}
              <Route
                path="/lectura"
                element={
                  <section className="p-6 relative z-20">
                    <h1 className="mb-6 text-center text-6xl">LIBROS</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {booksData.books.map((book, index) => (
                        <Book key={index} {...book} />
                      ))}
                    </div>
                  </section>
                }
              />

              {/* FILMOGRAFÍA */}
              <Route
                path="/filmografia"
                element={
                  <section className="relative z-20 overflow-x-auto py-6 px-4 md:px-12">
                    <h1 className="mb-6 text-center text-6xl">PELÍCULAS</h1>
                    <div className="relative flex space-x-4 pb-16">
                      {moviesData.movies.map((movie, index) => (
                        <Movie key={index} {...movie} />
                      ))}
                    </div>
                  </section>
                }
              />

              {/* PRÓXIMAMENTE */}
              <Route
                path="/proxim"
                element={
                  <section className="relative z-30 py-6 px-4 md:px-12">
                    <h1 className="mb-6 text-center text-6xl">PRÓXIMAMENTE</h1>
                    <Incoming />
                  </section>
                }
              />

              {/* JUEGOS DE MESA */}
              <Route
                path="/boardgames"
                element={
                  <section className="relative z-20 overflow-x-auto py-6 px-4 md:px-12">
                    <h1 className="mb-6 text-center text-6xl">
                      🎲 Juegos de Mesa Resident Evil
                    </h1>
                    <div className="relative flex space-x-4 pb-16">
                      {boardData.boardgames.map((game, index) => (
                        <BoardGameRE key={index} {...game} />
                      ))}
                    </div>
                  </section>
                }
              />

              {/* 404 */}
              <Route
                path="*"
                element={
                  <h1 className="text-center py-20">
                    404 - Página no encontrada
                  </h1>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

