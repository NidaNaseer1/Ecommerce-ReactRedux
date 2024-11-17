import React from 'react';
import { products } from '../../Data/Items';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cartSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  MenuItem,
  Slider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams(); // Get category from URL
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  const handleAddToCart = (product) => {
    const totalPrice = product.price; // Assuming quantity is handled elsewhere or is a constant value
    const tempProduct = {
      ...product,
      quantity: 1, // Default quantity value, adjust as needed
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate('/cart');
  };

  return (
    <>
      <Box sx={{ py: 5, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Shop
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>{" "}
            / Shop {category && ` / ${category}`}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              placeholder="Search keywords"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              select
              fullWidth
              label="Sort By"
              defaultValue=""
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Default Sorting</MenuItem>
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="organic">Organic</MenuItem>
              <MenuItem value="fantastic">Fantastic</MenuItem>
            </TextField>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <Box>
                {/* Replace with dynamic categories if needed */}
                <Typography variant="body2">Apples (3)</Typography>
                <Typography variant="body2">Oranges (5)</Typography>
                <Typography variant="body2">Strawberry (2)</Typography>
                <Typography variant="body2">Banana (8)</Typography>
                <Typography variant="body2">Pumpkin (5)</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Price
              </Typography>
              <Slider
                min={0}
                max={500}
                defaultValue={0}
                valueLabelDisplay="auto"
                sx={{ width: '100%' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Grid container spacing={2}>
              {filteredProducts.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.product_img}
                      alt={item.product_name}
                      sx={{ borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.product_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">${item.price} / kg</Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleAddToCart(item)}
                          startIcon={<AddShoppingCartIcon />}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
