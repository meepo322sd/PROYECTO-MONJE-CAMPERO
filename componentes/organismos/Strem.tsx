import React from "react";
import Link from "next/link";
import "../../app/streming/styles.css";

interface Props {
  id: string;
  nombre: string;
  sinopsis: string;
  trailer: string;
  genero: string[];
  puntuacion: string;
  portada: string;
  duracion: number;
}

const Strem = ({
  id,
  nombre,
  sinopsis,
  genero,
  puntuacion,
  portada,
  duracion,
}: Props) => {
  return (
    <div className="strem-card">
      <img src={portada} alt={nombre} className="strem-img" />
      <div className="strem-info">
        <h2 className="strem-title">{nombre}</h2>
        <p className="strem-sinopsis">{sinopsis}</p>
        <p>
          <strong>Duración:</strong> {duracion} min
        </p>
        <p>
          <strong>Géneros:</strong> {genero.join(", ")}
        </p>
        <p>
          <strong>Puntuación:</strong> ⭐ {puntuacion}
        </p>
        <Link href={`/streming/${id}`} className="strem-trailer">
          Ver Película
        </Link>
      </div>
    </div>
  );
};

export default Strem;
