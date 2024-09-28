"use client";

import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';

const products = [
  { id: 1, title: 'Yakapsule', imageUrl: '/ProductsImg/yakapsule.png', description: 'Hug it out—instant comfort and warmth for those rough days, no prescription needed.', shop: 'Generika Drugstore' },
  { id: 2, title: 'Kisspirin', imageUrl: '/ProductsImg/kisspirin.png', description: 'A kiss of relief—brighten your mood and melt the stress away, one smooch at a time.', shop: 'Mercury Drug' },
  { id: 3, title: 'Biogesic', imageUrl: '/ProductsImg/biogesic.png', description: 'Fast relief from headaches and fevers—gentle on the stomach, tough on pain.', shop: 'Rose Pharmacy' },
  { id: 4, title: 'Diatabs', imageUrl: '/ProductsImg/diatabs.png', description: 'Stops diarrhea in its tracks—quick, reliable relief for your tummy troubles.', shop: 'TGP' },
  { id: 5, title: 'Cetirizine', imageUrl: '/ProductsImg/cetirizine.png', description: 'Allergy defense—breathe easy and ditch the sneezes, 24-hour protection.', shop: 'Watsons' },
  { id: 6, title: 'Rob Bass', imageUrl: '/ProductsImg/robust.png', description: 'For men who want to stay strong and energized—boost your vitality, naturally.', shop: 'Southstar Drug' },
];

export default function Products() {
  return (
    <section className="flex-1 py-16 px-6 bg-gray-100 flex flex-col items-center">
      <Container>
        <Typography variant="h4" component="h1" align="center" gutterBottom className="text-medical-blue mb-4">
          Feeling Sick?
        </Typography>
        <Grid container spacing={4}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '450px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  image={product.imageUrl}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Sold by: {product.shop}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Quantity: 
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-20 p-1 border border-gray-300 rounded ml-2"
                    />
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 'auto' }}>
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
