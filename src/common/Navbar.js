import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Person as PersonIcon, ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';
import { getCartTotal } from '../stores/cartSlice';
import TopBar from './TopBar';

import { products } from '../Data/Items';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalItems } = useSelector((state) => state.cart);

  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filteredProducts = products.filter(
        (product) =>
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        navigate(`/shop?search=${searchQuery}`, { state: { filteredProducts } });
      } else {
        console.log("No products found");
      }
    }
  };

  return (
    <>
      <TopBar />
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" sx={{ mr: 2 }}>
            <img src="/logo512.png" alt="Logo" style={{ height: 40 }} /> {/* Public URL for logo */}
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'primary.main', textDecoration: 'none' }}>
            Ecommerce
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            <Button component={Link} to="/" sx={{ color: 'text.primary' }}>
              Home
            </Button>
            <Button component={Link} to="/shop" sx={{ color: 'text.primary' }}>
              Shop
            </Button>
            <Button component={Link} to="/About-us" sx={{ color: 'text.primary' }}>
              About-us
            </Button>
            <Button component={Link} to="/contact" sx={{ color: 'text.primary' }}>
              Contact
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
              <InputBase
                placeholder="Search…"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  pl: 2,
                }}
              />
              <IconButton type="submit" color="inherit" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
            <IconButton component={Link} to="/cart" color="inherit" sx={{ mx: 1 }}>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 1 }}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
