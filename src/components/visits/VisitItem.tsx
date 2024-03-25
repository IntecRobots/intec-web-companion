import React from "react";

const VisitItem = (visit: any, index: number) => (
  <div
    key={index}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden my-4 mx-auto max-w-4xl"
  >
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("your-image-url.jpg")' }}
    ></div>
    <div className="p-6">
      <h3 className="text-white text-xl font-bold mb-2">
        {visit.visit.nombre}
      </h3>
      <p className="text-gray-400">{visit.visit.descripcion}</p>
      <p className="text-gray-400">{visit.visit.start_date}</p>
      <p className="text-gray-400">{visit.visit.start_time}</p>
      <p className="text-gray-500">{visit.visit.salas_sala}</p>
    </div>
  </div>
);

export default VisitItem;
