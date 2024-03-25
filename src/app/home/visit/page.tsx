"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Tab from "@/components/visits/Tab";
import VisitList from "@/components/visits/VisitList";
import useVisits from "@/hooks/useVisits";

export default function Visit() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { visits, isLoading, error } = useVisits(
    "https://demo.intecrobots.com/api/visitas"
  );

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-96"
        role="alert"
      >
        <strong className="font-bold">¡Error!</strong>
        <span className="block sm:inline">NO se han podido cargar visitas</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1 className="text-white">Cargando</h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <header className="border-b border-gray-200">
          <nav className="flex">
            <Tab
              isActive={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
              text="Visitas próximas"
            />
            <Tab
              isActive={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              text="Todas las visitas"
            />
          </nav>
        </header>
        <main>
          {activeTab === "upcoming" ? ( // Verifica si la pestaña activa es "Visitas próximas"
            <VisitList visits={visits.records} upcomingOnly /> // Pasar upcomingOnly como true para filtrar las visitas próximas
          ) : (
            <VisitList visits={visits.records} /> // Si no, muestra todas las visitas
          )}
        </main>
      </div>
    </div>
  );
}
