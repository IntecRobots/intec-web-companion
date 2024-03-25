import { getSession } from "@/context/lib";

export default async function getRooms(){
    const session = await getSession();
  
    const response = await fetch("https://demo.intecrobots.com/api/salas", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.sessionToken}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      console.error("Error en el llamado de Visitas");
      throw new Error("Error en el llamado de Visitas");
    }
  
    return await response.json();
  };