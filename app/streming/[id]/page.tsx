import React from "react";
import "../styles.css";
import Comments from "@/componentes/organismos/Comments";

async function ingresar() {
  const response = await fetch(
    "https://684057c95b39a8039a57c1cc.mockapi.io/Peliculas"
  );
  const data = await response.json();
  return data;
}

interface PageProps {
  params: { id: string };
}
function getYouTubeVideoId(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
export default async function Page({ params }: PageProps) {
  const { id } = params;
  const peliculas = await ingresar();

  // Buscar la película con el id recibido
  const pelicula = peliculas.find((p: any) => p.id === id);
  const videoId = pelicula.trailer ? getYouTubeVideoId(pelicula.trailer) : null;

  return (
    <div className="movie-detail">
      <img
        src="/monje.png"
        alt="Logotipo Monje Campero"
        className="page-logo"
      />
      <h2 className="movie-title">{pelicula.nombre}</h2>
      <p className="movie-sinopsis">{pelicula.sinopsis}</p>
      <p>
        <strong>Duración:</strong> {pelicula.duracion} minutos
      </p>
      <p>
        <strong>Géneros:</strong> {pelicula.genero.join(", ")}
      </p>
      <p>
        <strong>Puntuación:</strong> ⭐ {pelicula.puntuacion}
      </p>

      {pelicula.trailer && (
        <div className="movie-trailer">
          <h3>Pelicula</h3>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

        <Comments />
    </div>
  );
}
