import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.error("Error en el usuario o contraseña");
      return; // Previene que el código siga adelante si hay un error
    }

    const { token, user_id } = await response.json();
    cookies().set("token", token);
    cookies().set("userId", user_id);
    
    // Solo redirige si todo ha ido bien
    redirect("/home");

  } catch (networkError) {
    console.error("Error de red o servidor", networkError);
    // No llames a redirect aquí, maneja el error de red como necesites
  }
};



export const logout = async () => {
  cookies().delete("userId");
  cookies().delete("token");
  redirect("/");
};

export async function getSession() {
  const sessionToken = cookies().get("token")?.value;
  const sessionId = cookies().get("userId")?.value;
  
  return {sessionToken,sessionId};
}
