// VisitList.tsx

import { Visit } from "@/types/types";
import React from "react";
import VisitItem from "./VisitItem";

interface VisitListProps {
  visits: Visit[];
  upcomingOnly?: boolean;
}

const VisitList: React.FC<VisitListProps> = ({
  upcomingOnly = false,
  visits,
}) => {
  const filteredVisits = upcomingOnly
    ? visits.filter((visit) => new Date(visit.startDate) > new Date())
    : visits;

  return (

    <div className="bg-black">
      {filteredVisits.length === 0 ? ( // Verificar si la lista de visitas filtradas está vacía
        <div className="text-white text-2xl font-bold text-center py-8">
          No hay visitas próximas
        </div>
      ) : (
        filteredVisits.map((visit: any, index: number) => (
          <VisitItem key={index} visit={visit} index={index} />
        ))
      )}
    <div  > 
      {visits.map((visit:any,index:number) => (
        <VisitItem
          key={index}
          index={index}
          nombre={visit.nombre}
          descripcion={visit.descripcion}
          start_date={visit.start_date}
          start_time={visit.start_time}
          salas_sala={visit.salas_sala}
        />
      ))}
    </div>
  );
};

export default VisitList;