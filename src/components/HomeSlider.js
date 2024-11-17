import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, TextField, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slids } from '../Data/Items';

export default function HomeSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box sx={{ py: 5, mb: 5, backgroundColor: 'background.paper', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', gap: 4 }}>
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '50%' } }}>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              100% Organic Foods
            </Typography>
            <Typography variant="h1" color="primary" gutterBottom>
              Organic Veggies & Fruits Foods
            </Typography>
            <Box sx={{ position: 'relative', mb: 3 }}>
              <TextField
                variant="outlined"
                placeholder="Search"
                fullWidth
                sx={{ borderRadius: '50px', pr: '6rem' }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: '10%',
                  height: '100%',
                  borderRadius: '50px',
                  px: 4,
                }}
              >
                Submit Now
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '50%' }, overflow: 'hidden' }}>
            <Slider {...settings}>
              {slids.map((val, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    '& img': {
                      width: '100%',
                      height: 'auto', // Ensure image maintains aspect ratio
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={val.slide_img} alt={`Slide ${index + 1}`} style={{ maxHeight: '400px' }} />
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      position: 'absolute',
                      bottom: '10%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '20px',
                      px: 4,
                    }}
                  >
                    {val.category}
                  </Button>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
