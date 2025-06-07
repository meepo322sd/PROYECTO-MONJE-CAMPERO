import React from "react";
import Navegacion from "./Navegacion";
import Buscador from "./Buscador";
import MenuAvatar from "./MenuAvatar";

const Header = () => {
  return (
    <header className="encabezado">
      <video
        className="video"
        src="vidooficial.mp4"
        loop
        muted
        autoPlay
        playsInline
      ></video>
      {/* <img src="/cartel.jpg" className="video" alt="" /> */}
      {/* <MenuAvatar/> */}

      <Navegacion />
      <Buscador />
    </header>
  );
};

export default Header;
