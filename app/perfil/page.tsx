"use client";
import { useState } from "react";

export default function Perfil() {
  const [usuario] = useState({
    nombre: "Yhonatan Leonardo Mamani Torrez",
    correo: "ingenieroyhonatan@gmail.com",
    imagen: "https://i.pravatar.cc/150?u=ingenieroyhonatan",
  });

  const [peliculas] = useState([
    {
      id: 1,
      titulo: "Interestelar",
      imagen: "https://image.tmdb.org/t/p/w500/nCbkOyOMTePnpY1vTebpD03z2NJ.jpg",
      estado: "vista",
    },
    {
      id: 2,
      titulo: "Inception",
      imagen: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      estado: "enlinea",
    },
    {
      id: 3,
      titulo: "Avatar: El camino del agua",
      imagen: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      estado: "vista",
    },
    {
      id: 4,
      titulo: "Spider-Man: No Way Home",
      imagen: "https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      estado: "enlinea",
    },
  ]);

  const handleCerrarSesion = () => {
    console.log("Cerrar sesión");
    // signOut(); // Si estás usando NextAuth
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-titulo">Mi Perfil</h1>
      <div className="perfil-card">
        <img
          src={usuario.imagen || "/icono.png"}
          alt="Foto de perfil"
          className="perfil-imagen"
        />
        <div className="perfil-info">
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
        </div>
        <button className="perfil-boton" onClick={handleCerrarSesion}>
          Cerrar Sesión
        </button>
      </div>

      <div className="peliculas-container">
        <h2>🎬 Películas Favoritas</h2>
        <div className="peliculas-grid">
          {peliculas.map((p) => (
            <div key={p.id} className="pelicula-card">
              <img src={p.imagen} alt={p.titulo} className="pelicula-imagen" />
              <p className="pelicula-titulo">{p.titulo}</p>
              <span className={`pelicula-estado ${p.estado === "vista" ? "vista" : "enlinea"}`}>
                {p.estado === "vista" ? "Vista" : "En línea"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
