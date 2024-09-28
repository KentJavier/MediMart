"use client";

import React, { useEffect } from 'react';
import { Typography, Paper } from '@mui/material';
import Navbar from '../navbar/page';

const features = [
  { id: 1, title: 'Chatbot Advanced AI', imageUrl: '/FeaturesImg/chatbot.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit minus velit veniam aliquid minima, nobis exercitationem dolor consectetur, nam earum vitae quam, voluptate cumque facilis voluptas quod voluptatem quibusdam.' },
  { id: 2, title: 'Account Management', imageUrl: '/FeaturesImg/accmanagement.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit minus velit veniam aliquid minima, nobis exercitationem dolor consectetur, nam earum vitae quam, voluptate cumque facilis voluptas quod voluptatem quibusdam.' },
  { id: 3, title: 'Inventory Management', imageUrl: '/FeaturesImg/invmanagement.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit minus velit veniam aliquid minima, nobis exercitationem dolor consectetur, nam earum vitae quam, voluptate cumque facilis voluptas quod voluptatem quibusdam.' },
  { id: 4, title: 'Personalized Recommender', imageUrl: '/FeaturesImg/recommender.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit minus velit veniam aliquid minima, nobis exercitationem dolor consectetur, nam earum vitae quam, voluptate cumque facilis voluptas quod voluptatem quibusdam.' },
];

export default function Features() {

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const paperWidth = '200px'; 
  const imageHeight = '150px';
  const titleFontSize = '1.25rem'; 
  const descriptionFontSize = '0.875rem';

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="flex-1 py-16 px-6 bg-white flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <Typography 
              variant="h4" 
              component="h1" 
              align="center" 
              gutterBottom 
              className="text-medical-blue mb-6"
            >
              Our Features
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map(feature => (
                <Paper 
                  key={feature.id} 
                  elevation={3} 
                  className="bg-blue-50 p-4 rounded-lg shadow-md"
                  style={{ width: paperWidth, height: '500px' }} // Set a fixed height
                >
                  <Typography 
                    variant="h5" 
                    className="text-nav-background mb-4"
                    style={{ fontSize: titleFontSize }} // Set font size for title
                  >
                    {feature.title}
                  </Typography>
                  <div 
                    className="w-full mb-4" 
                    style={{ height: imageHeight }}
                  >
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title} 
                      className="object-cover w-full h-full" 
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Typography 
                    className="text-gray-700"
                    style={{ fontSize: descriptionFontSize }} // Set font size for description
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
