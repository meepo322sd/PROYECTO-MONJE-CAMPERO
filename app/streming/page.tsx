import React from "react";
import "./styles.css";
import Strem from "@/componentes/organismos/Strem";
import Buscador from "@/componentes/moleculas/Buscador";

async function ingresar() {
  const response = await fetch(
    "https://684057c95b39a8039a57c1cc.mockapi.io/Peliculas"
  );
  const data = await response.json();
  return data;
}

export default async function page() {
  const peliculas = await ingresar();

  // Divide en grupos para ejemplo (ajusta índices según tus datos):
  const populares = peliculas.slice(0, 4);
  const estrenos = peliculas.slice(4, 8);
  const recomendados = peliculas.slice(8, 12);
  const tendencias = peliculas.slice(12, 16);

  return (
    <div className="page-container">
      <div className="header-strrim">
        <video
          className="video"
          src="video2.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="header-content">
          <h1 className="page-title">
            Bienvenido a nuestro Streaming Monje Campero
          </h1>
          <img
            src="monje.png"
            alt="Logotipo Monje Campero"
            className="page-logo"
          />
        </div>
    <Buscador/>
      </div>
      <section className="section-movies">
        <h2 className="section-title">Populares</h2>
        <div className="movies-grid">
          {populares.map((peli) => (
            <Strem
              key={peli.id}
              id={peli.id}
              nombre={peli.nombre}
              sinopsis={peli.sinopsis}
              trailer={peli.trailer}
              genero={peli.genero}
              puntuacion={peli.puntuacion}
              portada={peli.portada}
              duracion={peli.duracion}
            />
          ))}
        </div>
      </section>

      <section className="section-movies">
        <h2 className="section-title">Estrenos</h2>
        <div className="movies-grid">
          {estrenos.map((peli) => (
            <Strem
              key={peli.id}
              id={peli.id}
              nombre={peli.nombre}
              sinopsis={peli.sinopsis}
              trailer={peli.trailer}
              genero={peli.genero}
              puntuacion={peli.puntuacion}
              portada={peli.portada}
              duracion={peli.duracion}
            />
          ))}
        </div>
      </section>

      <section className="section-movies">
        <h2 className="section-title">Recomendados</h2>
        <div className="movies-grid">
          {recomendados.map((peli) => (
            <Strem
              key={peli.id}
              id={peli.id}
              nombre={peli.nombre}
              sinopsis={peli.sinopsis}
              trailer={peli.trailer}
              genero={peli.genero}
              puntuacion={peli.puntuacion}
              portada={peli.portada}
              duracion={peli.duracion}
            />
          ))}
        </div>
      </section>

      <section className="section-movies">
        <h2 className="section-title">Tendencias</h2>
        <div className="movies-grid">
          {tendencias.map((peli) => (
            <Strem
              key={peli.id}
              id={peli.id}
              nombre={peli.nombre}
              sinopsis={peli.sinopsis}
              trailer={peli.trailer}
              genero={peli.genero}
              puntuacion={peli.puntuacion}
              portada={peli.portada}
              duracion={peli.duracion}
            />
          ))}
        </div>
      </section>
      <footer className="footer-streaming">
        <div className="footer-social">
          <a href="#" className="social-link">
            <img src="/facebook.png" alt="Facebook" className="social-icon" />
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link">
            <img src="/tiktok.png" alt="TikTok" className="social-icon" />
            <span>TikTok</span>
          </a>
          <a href="#" className="social-link">
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
            <span>Instagram</span>
          </a>
        </div>

        <div className="footer-copy">
          <p>© 2025 Monje Campero Streaming. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
