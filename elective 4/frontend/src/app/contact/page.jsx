"use client";

import React, { useEffect } from 'react';
import { Typography, Button, TextField, Grid } from '@mui/material';
import Navbar from '../navbar/page';

export default function Contact() {

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <section className="flex-1 py-16 px-6 bg-white flex flex-col items-center">
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            gutterBottom 
            className="text-medical-blue mb-12"
          >
            Contact Us
          </Typography>
          <Grid container spacing={3} maxWidth="lg" className="w-full">
            
            {/* Left Part */}
            <Grid item xs={12} md={6} className="flex flex-col items-start p-6 bg-blue-100 rounded-lg shadow-md">
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom 
                className="text-medical-blue mb-6"
              >
                Let's talk about the future!
              </Typography>
              <Typography 
                variant="body2" 
                paragraph 
                className="text-gray-700 mb-8"
              >
                If you have any questions or need assistance, please reach out to us using the contact information below.
              </Typography>
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <img src="/location.png" alt="Location Icon" className="mr-2 w-6 h-6" />
                  <Typography variant="body1" className="text-gray-700">
                    1234 Duljo St, Cebu, Philippines
                  </Typography>
                </div>
                <div className="flex   items-center mb-4">
                  <img src="/phone.png" alt="Phone Icon" className="mr-2 w-6 h-6" />
                  <Typography variant="body1" className="text-gray-700">
                    (555) 123-4567
                  </Typography>
                </div>
                <div className="flex items-center">
                  <img src="/email.png" alt="Email Icon" className="mr-2 w-6 h-6" />
                  <Typography variant="body1" className="text-gray-700">
                    contact@yourcompany.com
                  </Typography>
                </div>
              </div>
            </Grid>

            {/* Right Part */}
            <Grid item xs={12} md={6} className="p-6 bg-white rounded-lg shadow-md">
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom 
                className="text-medical-blue mb-6"
              >
                Send Us a Message
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  placeholder='Enter your email here'
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                />
                <TextField
                  placeholder='Enter your message here'
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button variant="contained" color="primary" className="mt-4">
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
}
