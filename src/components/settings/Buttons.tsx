"use client";

import Image from "next/image";
import { logout } from "@/context/lib";
import { redirect } from "next/navigation";

export const Buttons = () => {
  const handleLogout = async () => {
    try {
      logout(); // Usa la función de logout desde lib/auth.ts
      // Redirecciona al usuario al login
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button className="bg-white-500 hover:bg-gray-100 text-black border-2 font-bold py-2 px-4 rounded m-5 flex items-center">
          <Image
            src="/images/Google__G__logo.svg.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover pr-3"
          />
          Iniciar sesión con Google
        </button>
      </div>
      <div className="flex justify-center">
        <a
          href="/"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-14 rounded m-5"
        >
          Cerrar sesión
        </a>
      </div>
      <div className="p-4 text-center text-gray-300">© 2024 Intec Robots </div>
      );
    </>
  );
};
