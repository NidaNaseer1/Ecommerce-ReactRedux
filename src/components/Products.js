// src/components/Products.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Tabs, Tab, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { products } from '../Data/Items';
import { addToCart } from '../stores/cartSlice';

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();
  const [qty, setQty] = useState(1);
  const [menuItems, setMenuItem] = useState([]);

  const increaseQty = () => setQty((prevQty) => prevQty + 1);
  const decreaseQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  const handleAddToCart = (product) => {
    const totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  const filterItems = (category) => {
    setMenuItem(category === "all" ? products : products.filter((item) => item.category === category));
  };

  useEffect(() => {
    filterItems(category || 'all');
  }, [category]);

  return (
    <Box sx={{ py: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Organic Products
        </Typography>
        <Tabs
          value={false}
          onChange={(event, newValue) => filterItems(newValue)}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="product categories"
        >
          <Tab label="All Products" value="all" />
          <Tab label="Vegetables" value="Vegetables" />
          <Tab label="Fruits" value="Fruits" />
          <Tab label="Bread" value="Bread" />
          <Tab label="Meat" value="Meat" />
        </Tabs>
      </Box>
      <Grid container spacing={4}>
        {menuItems.map((val, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={val.product_img}
                alt={val.product_name}
                sx={{ borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {val.product_name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {val.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton onClick={decreaseQty} aria-label="decrease quantity">
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ mx: 2 }}>
                    {qty}
                  </Typography>
                  <IconButton onClick={increaseQty} aria-label="increase quantity">
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="text.primary">
                    ${val.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{
                      borderColor: 'blue',
                      color: 'blue',
                      '&:hover': {
                        borderColor: 'blue',
                        backgroundColor: 'blue',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleAddToCart(val)}
                  >
                    Add to cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
