import { Visit } from '@/types/types';
import React from 'react';
import VisitItem from './VisitItem';

interface VisitListProps {
  visits: Visit[];
}

const VisitList: React.FC<VisitListProps> = ({ visits }) => {


  return (
    <div  className="bg-black"> 
      {visits.map((visit:any,index:number) => (
        <VisitItem
          key={index}
          visit={visit}
          index={index}
        />
      ))}
    </div>
  );
};




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


export default VisitList;
