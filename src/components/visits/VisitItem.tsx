import React from "react";

interface PropsItem{
    index:number;
    nombre:string;
    descripcion:string;
    start_date:any;
    start_time:any;
    salas_sala:string;
}



const VisitItem:React.FC<PropsItem> = ({index,nombre,descripcion,start_date,start_time,salas_sala}) =>{


    return(
        <div key={index}  className="bg-gray-800 rounded-xl shadow-lg overflow-hidden my-4 mx-auto max-w-4xl"> {/* Tarjeta gris */}
          <div className="bg-no-repeat bg-cover bg-center h-48" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
            {/* Imagen de fondo para la tarjeta */}
          </div>
          <div className="p-6">
            <h3 className="text-white text-xl font-bold mb-2">{nombre}</h3>
            <p className="text-gray-400">{descripcion}</p>
            <p className="text-gray-400">{start_date}</p>
            <p className="text-gray-400">{start_time}</p>
            <p className="text-gray-500">{salas_sala}</p>
          </div>
        </div>
    );
};


export default VisitItem;
