"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import Tab from '@/components/visits/Tab';
import VisitList from '@/components/visits/VisitList';

const visits = [
  { id: 1, name: 'Visita Intec Robots', date: '2024-02-16 - 15:40:00', location: 'Sala Meta' },
  { id: 2, name: 'Visita Clínica Veterinaria', date: '2024-02-18 - 10:30:00', location: 'Sala Google' },
  { id: 3, name: 'Adolfo El de la Moto', date: '2024-03-05 - 13:00:00', location: 'Sala Google' },
  { id: 4, name: 'Prueba 4', date: '2024-03-10 - 13:20:00', location: 'Sala Meta' },
  // ...otros datos
];

export default function Visit() {
    const [activeTab, setActiveTab] = useState('upcoming');
  
    return (
      <div className='bg-black min-h-screen'>
        <Head>
          <title>Visitas</title>
        </Head>
        <div className="container mx-auto px-4">
          <header className="border-b border-gray-200">
            <nav className="flex">
              <Tab
                isActive={activeTab === 'upcoming'}
                onClick={() => setActiveTab('upcoming')}
                text="Visitas próximas"
              />
              <Tab
                isActive={activeTab === 'all'}
                onClick={() => setActiveTab('all')}
                text="Todas las visitas"
              />
            </nav>
          </header>
          <main>
            <VisitList visits={visits} />
          </main>
        </div>
      </div>
    );
  }
