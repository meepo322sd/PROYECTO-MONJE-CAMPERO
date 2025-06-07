"use client";

import React, { useState } from "react";

interface Comment {
  id: number;
  author: string;
  text: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Ana",
      text: "¡Me encantó la película! La trama fue muy emocionante.",
    },
    {
      id: 2,
      author: "Carlos",
      text: "Los efectos visuales estuvieron impresionantes.",
    },
  ]);

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (author.trim() === "" || text.trim() === "") return;

    const newComment = {
      id: comments.length + 1,
      author,
      text,
    };

    setComments([...comments, newComment]);
    setAuthor("");
    setText("");
  };

  return (
    <section className="movie-comments">
      <h3>Comentarios</h3>

      {comments.map(({ id, author, text }) => (
        <div key={id} className="comment">
          <p>
            <strong>{author}:</strong> {text}
          </p>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Tu nombre"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="comment-input"
          required
        />
        <textarea
          placeholder="Tu comentario"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="comment-textarea"
          required
        />
        <button type="submit" className="comment-submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
}
