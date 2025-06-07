"use client";

import React, { useEffect, useState } from "react";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [chatbotListo, setChatbotListo] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
    script.async = true;

    script.onload = () => {
      const configScript = document.createElement("script");
      configScript.src =
        "https://files.bpcontent.cloud/2025/06/06/02/20250606023237-SJ525HDU.js";
      configScript.async = true;

      configScript.onload = () => {
        setChatbotListo(true); // ✅ Solo se activa cuando los dos scripts estén listos
      };

      document.body.appendChild(configScript);
    };

    document.body.appendChild(script);
  }, []);

  const abrirChatbot = () => {
    if (chatbotListo && window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    } else {
      alert("⏳ El chatbot aún se está cargando, intenta en un momento.");
    }
  };

  return (
    <nav className="navegacion">
      <a href="/principal/" className="logo-link">
        <h1 className="titulo">
          <img src="monje.png" className="monje" alt="Logo Monje Campero" />
        </h1>
      </a>

      <div
        className={`hamburguesa ${menuAbierto ? "activo" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navegacion-principal ${menuAbierto ? "mostrar" : ""}`}>
        <a className="enlace" href="/horario" onClick={toggleMenu}>
          Horario
        </a>
        <a className="enlace" href="/oferta" onClick={toggleMenu}>
          Oferta
        </a>
        <a className="enlace" href="/confiteria" onClick={toggleMenu}>
          Confiteria
        </a>
        <button className="enlace" onClick={abrirChatbot}>
          Chatbot
        </button>
      </div>
    </nav>
  );
};

export default Navegacion;
