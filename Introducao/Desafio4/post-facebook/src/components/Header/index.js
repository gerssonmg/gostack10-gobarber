import React from 'react';
import './styles.css';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header id="main-header">
      <div className="div-header-logo">
        <h2>facebook.</h2>
      </div>
      <div className="div-header-perfil">
        <h3 className="h3-meu-perfil">Meu perfil</h3>
        <FaUserCircle className="header-icon" />
      </div>
    </header>
  );
}
