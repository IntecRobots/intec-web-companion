import React from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { redirect } from "next/navigation";
import { login } from "@/context/lib";

const FormLogin = () =>{
    return(
        <form
              action={async (formData) => {
                "use server";
                await login(formData);
                redirect("/home");
              }}
            >
              <LoginInput
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de usuario..."
              />
              <LoginInput
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña..."
              />
              <LoginButton />
            </form>
    );
};

export default FormLogin;