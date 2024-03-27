import React from "react";
import { FaCalendar, FaRobot, FaVideo, FaCalendarAlt } from "react-icons/fa";
import SquareButton from "@/components/home/SquareButton";
import { getSession } from "../../context/lib";

const Home = async () => {
  const session = await getSession();

  console.log(session.sessionId);

  return (
    <div className="min-h-screen text-white flex flex-col items-center py-10 mt-7">
      <div className="w-full max-w-4xl">
        <div className="flex items-start">
          <div className="flex-1 pr-10">
            <h1 className="text-4xl font-bold mb-3">Bienvenido, </h1>
            <h4 className="text-2lg mb-1">Próximos Eventos</h4>
            <div className="bg-gray-800 h-96 bg-opacity-85 rounded-2xl shadow-lg p-6 border-2 border-gray-700"></div>
          </div>

          <div className="flex-1 pl-2 mt-20">
            <div className="grid grid-cols-2 gap-4">
              <SquareButton icon={FaCalendar} label="Añadir evento" />
              <SquareButton icon={FaRobot} label="Control remoto" />
              <SquareButton icon={FaVideo} label="Videollamada" />
              <SquareButton icon={FaCalendarAlt} label="Gestionar salas" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
