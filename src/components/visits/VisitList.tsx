import { Visit } from "@/types/types";
import React from "react";
import VisitItem from "./VisitItem";
import { getSession } from "@/context/lib";

interface VisitListProps {
  visits: Visit[];
  upcomingOnly?: boolean;
}

const VisitList: React.FC<VisitListProps> = ({
  upcomingOnly = false,
  visits,
}) => {
  const currentDate = new Date(); // Obtener la fecha y hora actual del sistema

  // Filtrar las visitas basadas en si son próximas o no
  const filteredVisits = upcomingOnly
    ? visits.filter((visit: any) => {
        const visitStartDate = new Date(
          `${visit.start_date}T${visit.start_time}`
        );
        // Comparar con la fecha y hora actual del sistema
        return visitStartDate > currentDate;
      })
    : visits;

  return (
    <div className="bg-black">
      {filteredVisits.length === 0 ? (
        <div className="text-white text-2xl font-bold text-center py-8">
          No hay visitas próximas
        </div>
      ) : (
        filteredVisits.map((visit: any, index: number) => (
          <VisitItem key={index} visit={visit} index={index} />
        ))
      )}
    </div>
  );
};

export default VisitList;
