import React from 'react';
 // Opcional: para agregar estilos personalizados

function Header() {
  return (
    <header className="app-header">
      <h1>Todo EsPosible</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#tareas">Tareas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
