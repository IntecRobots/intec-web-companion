import React from 'react';
import Head from 'next/head';
import VisitList from '@/components/visits/VisitList';
import getVisitas from '@/actions/getVisitas';



export default async function Visit() {

    const data = await getVisitas();

    return (
      <div className='min-h-screen'>
        <Head>
          <title>Visitas</title>
        </Head>

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
        
      </div>
    );
  }
