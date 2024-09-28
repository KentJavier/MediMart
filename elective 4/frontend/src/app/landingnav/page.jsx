"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Landingnav() {
  return (
    <AppBar position="static" className="bg-light-blue font-sans">
      <Toolbar>
        <div className="flex items-center">
          <a href="/landing" className="flex items-center">
            <div className="bg-white rounded-full p-2">
              <img src="/medimartlogo.png" alt="MediMart Express Logo" className="h-8 w-auto" width="auto" height="auto" />
            </div>
            <Typography 
              variant="h6" 
              className="text-white ml-2"
            >
              MediMart Express
            </Typography>
          </a>
        </div>
        <div className="ml-auto flex space-x-4">
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
