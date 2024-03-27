"use client"
import React, { useState } from "react";
import VisitList from "./VisitList";
import Tab from "./Tab";

const VisitContainer = ({data}:{data:any}) =>{
    
    return(
       <>
          <header className="border-b border-gray-200">
          <nav className="flex">
            <Tab
              text="Visitas próximas"
              onClick=  {() => console.log("Visitas proximas")}
              isActive={false}
            />
            <Tab
              text="Todas las visitas"
              onClick=  {() => console.log("Todas las visitas")}
              isActive={true}
            />
          </nav>
        </header>
        

          <main>
            
            {
              (data) ? <VisitList visits={data.records} />:
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-96" role="alert">
                <strong className="font-bold">¡Error!</strong>
                <span className="block sm:inline">NO se a podido ver visitas</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">              
                </span>
              </div>
            }
            
          </main>
       </>
        
    );
};

export default VisitContainer;