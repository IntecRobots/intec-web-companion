import { Visit } from '@/types/types';
import React from 'react';
import VisitItem from './VisitItem';
import { getSession } from '@/context/lib';

interface VisitListProps {
  visits: Visit[];
}

const VisitList: React.FC<VisitListProps> = async ({ visits }) => {

  return (
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
