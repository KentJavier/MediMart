"use client";

import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Landingnav from '../landingnav/page';

export default function Landing() { 
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Landingnav />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 text-center p-4">
          <section id="home" className="flex flex-col items-center justify-center w-full h-full flex-1">
            <img 
              src="/landingpage.png" 
              alt="Medical Supplies" 
              className="w-full max-w-2xl h-auto mb-4 object-contain"
            />
            <Typography variant="h2" className="text-medical-blue mb-2">
              Welcome to MediMart Express
            </Typography>
            <Typography variant="h5" className="text-gray-700 mb-4">
              Your one-stop solution for medical supplies and services.
            </Typography>
          </section>
        </main>
      </div>
    </>
  );
}
