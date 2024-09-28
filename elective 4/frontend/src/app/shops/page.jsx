"use client";

import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';

const shops = [
  { id: 1, title: 'Generika Drugstore', imageUrl: '/ShopsImg/generika.png', description: 'Affordable and quality generic medicines. Ang drugstore na may ginhawa sa bulsa, sa plus services, at sa katuwang.' },
  { id: 2, title: 'Mercury Drug', imageUrl: '/ShopsImg/mercury.png', description: 'Mercury Drug is the Philippines leading trusted and caring drugstore. A modern one-stop drugstore providing a wide range of fresh, safe and high-quality branded or generic medicines.' },
  { id: 3, title: 'Rose Pharmacy', imageUrl: '/ShopsImg/rose.png', description: 'Rose Pharmacy, established in Cebu in 1952 by the Lim family, is one of the country’s top drugstore chains and is one of the most preferred go-to drugstores for quality and affordable medicines in the Visayas and Mindanao.' },
  { id: 4, title: 'TGP', imageUrl: '/ShopsImg/tgp.png', description: '21 years in generic pharmacy business. Has been in the Pharmacy Franchise Business since 2007. Pioneer and trailblazer for quality & affordable generics.' },
  { id: 5, title: 'Watsons', imageUrl: '/ShopsImg/watsons.png', description: 'We are here to help our customers look good, do good and feel great, every day – by providing a market-leading variety of brands and products, plus personalised advice and counselling in health, beauty and personal care.' },
  { id: 6, title: 'Southstar Drug', imageUrl: '/ShopsImg/southstar.png', description: 'Southstar Drug is one of the largest drugstore chains in the Philippines. Since 1937, it has carried a wide range of prescription and over-the-counter pharmaceutical products, and a variety of food, personal care and health & wellness items.' },
];

export default function Shops() {
  return (
    <section className="flex-1 py-16 px-6 bg-gray-100 flex flex-col items-center">
      <Container>
        <Typography variant="h4" component="h1" align="center" gutterBottom className="text-medical-blue mb-4">
          Choose your trusted Pharmacy!
        </Typography>
        <Grid container spacing={4}>
          {shops.map(shop => (
            <Grid item xs={12} sm={6} md={4} key={shop.id}>
              <Card sx={{ height: 450, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 200, 
                    objectFit: 'cover'
                  }}
                  image={shop.imageUrl}
                  alt={shop.title}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {shop.title}
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ flexGrow: 1 }}>
                    {shop.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: 'auto' }}
                  >
                    View Shop
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
