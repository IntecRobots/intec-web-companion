import { useState } from "react";


export const useRoomUpdate = () => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const session  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNGFiZjU1ZWRjMmIxOGNiMDIzZTkzOGE1NWM5MDE3MzA3ZDdkNGQzNDM2MGQ1NWYxNzE1MTI0MDM5MDA1Y2QwOWUwNDkyOTNkZWYzYWI4ZWIiLCJpYXQiOjE3MTA5NDg1MTEuNzQ1ODc2MDczODM3MjgwMjczNDM3NSwibmJmIjoxNzEwOTQ4NTExLjc0NTg3Nzk4MTE4NTkxMzA4NTkzNzUsImV4cCI6MTc0MjQ4NDUxMS43NDE3OTUwNjMwMTg3OTg4MjgxMjUsInN1YiI6IjYiLCJzY29wZXMiOltdfQ.ayVKlMexeolGaVH2FbdugI2DNsVGhxxZMqzf7vdjDzILTrOGG3OLEgZ2RbCInlpTc5NLT2_U9wWYnacYz0lLpqGxDB0bC0Rq07q8_Ds5_TLIui7In5KgpDqA5xI3Nww14M0pSgNs6V8YYYP4odL_vv0LCW-FC9ItsquHSeilSKE6FpX6KeL17xfUJipf0QPl4YLkWaqztwxqyEPFA48G1Z9EdddE0nQ5pgdlWbYZwFagEwJMlu89KKBdqfUhQmuGAzCbLEcGcpOmpqOI6Xt6GiEw1pAVSmb0ouqIO1Mnn4LfV_W3wyK5Bq4pEUDD5_6lF-pW5pNnXictZ32asEZAnPGuviJ6hVoGxV2Air2UVN0Xe-7an4WF26nMivnzk6isvoRhj68oT0_r65LTHUJ_C8dmN_M3JHD4BJ95NEGUtWjk_DtQFrEKDHndUnqWeZGHBnflSxE7_m6zdBRr6VkM0KM44bzRdLwnewlcGYNLQLaJwIfAJzzbYWUf2Q0iGzlU3lCbqEjBIT0rJtiTtjJeYR9MHFGZoAv5Uk_ZmyIMzV0JWzn1pFOyALxx6eM5gjH1__jUHJO67LjORElyCFxdqX8uLTJNnj4h5Ui3JIdIHs1uNQwMDVBGGQIjumfvOGExYWL9Bw5D-_KLTGrpXeYp79znfw8iHMeRkyGdxXiagac"

  const updateRoomState = async (roomId: number, newState: boolean) => {
    console.log(`Iniciando actualización de la sala con ID: ${roomId}`);
    setIsUpdating(true);

    try {
      console.log("Enviando petición PATCH...");
      const response = await fetch(`https://demo.intecrobots.com/api/salas/update/${roomId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: newState ? 1 : 0 }),
      });

      console.log("Respuesta recibida", response);

      if (!response.ok) {
        throw new Error("Error al actualizar el estado de la sala");
      }

      console.log(`Sala con ID: ${roomId} actualizada exitosamente.`);
    } catch (error) {
      console.error("Error en la petición PATCH", error);
    } finally {
      console.log(`Finalizando actualización de la sala con ID: ${roomId}`);
      setIsUpdating(false);
    }
  };

  return { isUpdating, updateRoomState };
};
