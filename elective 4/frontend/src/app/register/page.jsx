"use client";

import React, { useEffect } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import Landingnav from '../landingnav/page';

export default function Register() {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Landingnav />
      <section className="bg-white min-h-screen flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full max-w-md bg-white rounded-lg shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Typography variant="h5" className="text-center text-gray-800 mb-2">
              Create your account
            </Typography>
            <TextField 
              fullWidth
              type="text"
              label="Name"
              variant="outlined"
              className="bg-white"
              InputProps={{
                style: { backgroundColor: '#FFFFFF' } // White
              }}
            />
            <TextField 
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              className="bg-white"
              InputProps={{
                style: { backgroundColor: '#FFFFFF' } // White
              }}
            />
            <TextField 
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              className="bg-white"
              InputProps={{
                style: { backgroundColor: '#FFFFFF' } // White
              }}
            />
            <TextField 
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              className="bg-white"
              InputProps={{
                style: { backgroundColor: '#FFFFFF' } // White
              }}
            />
            <Button 
              fullWidth 
              variant="contained" 
              className="bg-green-500 text-white hover:bg-green-600"
              type="submit"
            >
              Register
            </Button>
            <div className="flex justify-between text-sm font-medium text-blue-600 mt-4">
              <a href="/login" className="hover:underline">Already have an account?</a>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
