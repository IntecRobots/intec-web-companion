import { logout } from "@/context/lib";
import React from "react";


const LogoutSession = () =>{
    return(
        <>
    <div className="flex justify-center">
            <form
            className="bg-white"
            action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Logout</button>
      </form>
      </div>
      <div className="p-4 text-center text-gray-300">© 2024 Intec Robots </div>
      </>
    );
};

export default LogoutSession