import React from 'react';
import Head from 'next/head';
import VisitList from '@/components/visits/VisitList';
import getVisitas from '@/actions/getVisitas';
import Tab from '@/components/visits/Tab';
import VisitContainer from '@/components/visits/VisitContainer';

export default async function Visit() {

    const data = await getVisitas();

    return (
      <div className='min-h-screen'>
        <VisitContainer
          data={data}
        />
      </div>
    );
  }
