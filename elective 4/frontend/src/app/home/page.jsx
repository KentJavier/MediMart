"use client";

import React, { useState, useEffect } from 'react';
import { Container, TextField, Tab, Tabs, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../navbar/page';
import Shops from '../shops/page';
import Products from '../products/page'; 

export default function Home() {
  const [value, setValue] = useState(0);

  // Update state based on URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#shops') {
      setValue(0);
    } else if (hash === '#products') {
      setValue(1);
    }
  }, []);

  // Update URL hash when tab changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newHash = newValue === 0 ? '#shops' : '#products';
    window.history.pushState(null, '', newHash);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 py-16 px-6 bg-gray-100 flex flex-col items-center">
        <Container>
          <div 
            className="flex flex-col items-center mb-8"
            style={{ 
              backgroundImage: 'url(/searchbg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              padding: '2rem 0'
            }}
          > 
            <TextField 
              variant="outlined" 
              placeholder='Search for Shops/Products'
              fullWidth
              style={{ 
                maxWidth: '500px', 
                backgroundColor: 'white'
              }} 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="mb-4"
            />
          </div>
          <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="page tabs">
              <Tab label="Shops" />
              <Tab label="Products" />
            </Tabs>
            <Box sx={{ p: 0, mt: 0 }}>
              {value === 0 && <Shops />}
              {value === 1 && <Products />}
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
}
