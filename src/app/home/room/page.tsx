
import React from 'react';
import Head from 'next/head';
import BodyRoom from '@/components/rooms/BodyRooms';
import getRooms from '@/actions/getRooms';
import { getSession } from '@/context/lib';


const Home: React.FC = async() => {
  const rooms = await getRooms();
  const {sessionToken} = await getSession();

  
  return (
    <>
      <Head>
        <title>Room Control</title>
        <meta name="description" content="Responsive room control interface with search functionality, created with Next.js and TailwindCSS" />
      </Head>
      <BodyRoom
        listRooms={rooms.records}
        token={sessionToken}
      />
    </>
  );
};

export default Home;
