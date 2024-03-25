import { getSession } from "@/context/lib";

const getVisitas = async () => {
  const session = await getSession();

  const response = await fetch("http://demo.intecrobots.com/api/visitas", {
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

export default getVisitas;
