import React from 'react';

interface Visit {
  id: number;
  name: string;
  date: string;
  location: string;
}

interface VisitListProps {
  visits: Visit[];
}

const VisitList: React.FC<VisitListProps> = ({ visits }) => {
  return (
    <div className="bg-black"> {/* Fondo negro para el contenedor principal */}
      {visits.map((visit) => (
        <div key={visit.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden my-4 mx-auto max-w-4xl"> {/* Tarjeta gris */}
          <div className="bg-no-repeat bg-cover bg-center h-48" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
            {/* Imagen de fondo para la tarjeta */}
          </div>
          <div className="p-6">
            <h3 className="text-white text-xl font-bold mb-2">{visit.name}</h3>
            <p className="text-gray-400">{visit.date}</p>
            <p className="text-gray-500">{visit.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisitList;
