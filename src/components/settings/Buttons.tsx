"use client"
import Image from "next/image";
import { signIn,signOut,useSession } from "next-auth/react";


export const Buttons = () => {

  const {data: session} = useSession();
  console.log(session);
  

  return (
    <>
      {(session?.user) ? (
        <div className="flex justify-center">
        <button className="bg-white-500 hover:bg-gray-100 text-black border-2 font-bold py-2 px-4 rounded m-5 flex items-center"
        onClick={() => signOut()}>
          <Image
            src="/images/Google__G__logo.svg.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover pr-3"
          />
          Cerrar sessión de Google
        </button>
        </div>
      ):(
        <div className="flex justify-center">
        <button className="bg-white-500 hover:bg-gray-100 text-black border-2 font-bold py-2 px-4 rounded m-5 flex items-center"
        onClick={() => signIn()}>
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
      )}
      
    </>
  );
};
