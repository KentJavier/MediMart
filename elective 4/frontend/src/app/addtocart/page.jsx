"use client";

import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Divider, TextField } from '@mui/material';
import Navbar from '../navbar/page';

const StoreSection = ({ storeName, items }) => {
  const totalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <Card className="bg-white shadow-md mb-6">
      <CardContent>
        <Typography variant="h6" gutterBottom className="text-medical-blue">
          {storeName}
        </Typography>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center mb-4">
              <img src={`/ProductsImg${item.image}`} alt={item.name} className="h-24 w-24 object-cover mr-4" />
              <div className="flex-1">
                <Typography variant="h6" gutterBottom className="text-medical-blue">
                  {item.name}
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  {item.description}
                </Typography>
                <Typography variant="h6" className="text-medical-blue">
                  Price: ${item.price}
                </Typography>
                <TextField
                  label="Quantity"
                  type="number"
                  variant="outlined"
                  size="small"
                  className="mt-2"
                  InputProps={{ inputProps: { min: 1 } }}
                  defaultValue={1}
                />
              </div>
            </div>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
        <Typography variant="h6" className="text-medical-blue mt-4">
          Total Price: ${totalPrice}
        </Typography>
        <Button variant="contained" color="primary" className="w-full mt-4">
          Buy now!
        </Button>
      </CardContent>
    </Card>
  );
};

export default function AddToCart() {
  const storeAItems = [
    { image: "/kisspirin.png", name: "Kisspirin", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "9.11" },
    { image: "/yakapsule.png", name: "Yakapsule", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "4.20" },
  ];

  const storeBItems = [
    { image: "/robust.png", name: "Rob Bass", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "12.30" },
    { image: "/diatabs.png", name: "Diatabs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "45.67" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 py-16 px-6 bg-gray-100 flex flex-col items-center">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" align="center" gutterBottom className="text-medical-blue mb-6">
            Your Shopping Cart
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={12}>
              <StoreSection storeName="TGP" items={storeAItems} />
              <StoreSection storeName="Watsons" items={storeBItems} />
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
