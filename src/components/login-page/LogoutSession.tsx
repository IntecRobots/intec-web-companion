import { logout } from "@/context/lib";
import React from "react";


const LogoutSession = () =>{
    return(
        <>
    <div className=" left-8 flex justify-end">
            <form
            className="bg-gray-800 p-4 rounded-lg"
            action={async () => {
          "use server";
          await logout();
        }}
      >
        <button
         type="submit"
         className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-500"
         >Logout</button>
      </form>
      </div>
      </>
    );
};

export default LogoutSession