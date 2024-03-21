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

/*
<div key={index}  className="bg-gray-800 rounded-xl shadow-lg overflow-hidden my-4 mx-auto max-w-4xl"> }
<div className="bg-no-repeat bg-cover bg-center h-48" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
{}
</div>
<div className="p-6">
<h3 className="text-white text-xl font-bold mb-2">{visit.title}</h3>
<p className="text-gray-400">{visit.description}</p>
<p className="text-gray-400">{visit.startDate}</p>
<p className="text-gray-400">{visit.startTime}</p>
<p className="text-gray-500">{visit.room}</p>
</div>
</div>
)

*/
