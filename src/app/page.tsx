"use client"

import Image from 'next/image';
import LoginTitle from '../components/login-page/LoginTitle';
import LoginInput from '../components/login-page/LoginInput';
import LoginButton from '../components/login-page/LoginButton';
import SignUpLink from '../components/login-page/SignUpLink';
import React, { useState } from 'react';
import Link from 'next/link';


const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    if (username && password) {
      // Si ambos campos están llenos, realiza la navegación
      document.location.href = '/home';
    } else {
      // Muestra un error en la consola si hay campos vacíos
      console.error('Por favor, rellene todos los campos.');
    }
  };

  const isFormValid = username && password;

  return (
    <div className="flex min-h-screen items-center justify-between bg-gray-800 px-10">
      {/* Logo y barra divisoria */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <Image src="/images/intecrobots_dark.png" alt="logo" width="200" height="200" />
      </div>
      <div className="w-1 bg-gray-700 h-3/4 self-center"></div>

      {/* Imagen a la izquierda */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/placeholderbot2-removebg-preview.png"
          alt="Left side image"
          width={200} // Establece el ancho deseado
          height={100} // Establece el alto deseado para que coincida con el formulario
        />
      </div>

      <div className="w-1 bg-white-700 my-12"></div>

      {/* Formulario de inicio de sesión a la derecha */}
      <div className="flex-1">
        <div className="w-full max-w-sm mx-auto bg-gray-700 rounded-lg shadow-lg py-10 px-6"> {/* Aumenté el padding vertical aquí */}
          <LoginTitle />
          <form onSubmit={handleLogin}>
            <LoginInput
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <LoginInput
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton />
          </form>
          <SignUpLink />
        </div>
      </div>

      {/* Copi Right */}
      <p className="text-xs text-gray-400 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        &copy; 2024 Intec Robots.
      </p>
    </div>
  );
};

export default Home;