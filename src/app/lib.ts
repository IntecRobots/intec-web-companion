// lib/auth.ts
// lib/auth.ts
// lib/auth.ts
// lib/auth.ts
import { setCookie } from "nookies";

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (!response.ok) {
      throw new Error("Error de autenticación");
    }

    const { token, user_id } = await response.json();
    console.log("Inicio de sesión exitoso", token, user_id);

    // Guarda la cookie del token
    setCookie(null, "token", token, {
      maxAge: 30 * 24 * 60 * 60, // 30 días
      path: "/",
    });

    // Guarda la cookie del ID del usuario
    setCookie(null, "userId", user_id.toString(), {
      // Asegúrate de que user_id exista y sea el ID correcto
      maxAge: 30 * 24 * 60 * 60, // 30 días
      path: "/",
    });
  } catch (error) {
    console.error("Error en inicio de sesión", error);
    throw error;
  }
};
