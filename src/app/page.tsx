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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 relative">
      <div className="absolute w-full h-1/2 bottom-1/2 bg-blue-600 rounded-b-full z-0"></div>
      <div className="absolute top-16 md:top-24 z-10">
        <Image src="/images/intecrobots_dark.png" alt="logo" width="144" height="144" />
      </div>
      <div className="relative w-11/12 max-w-sm md:max-w-md bg-gray-700 rounded-lg shadow-lg p-6 mb-4 z-20">
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
      <p className="text-xs text-[#7d7d7d] absolute bottom-4 z-20">
        &copy; 2024 Intec Robots.
      </p>
    </div>
  );
};

export default Home;