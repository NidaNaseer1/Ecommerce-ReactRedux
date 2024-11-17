import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { features } from '../Data/Items'; 
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/Support';
import SecurityIcon from '@mui/icons-material/Security';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Features() {
  // Mapping of icon names to actual icon components
  const iconMap = {
    LocalShippingIcon: <LocalShippingIcon />,
    SupportIcon: <SupportIcon />,
    SecurityIcon: <SecurityIcon />,
    KeyboardReturnIcon: <KeyboardReturnIcon />
  };

  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
        <Grid container spacing={4}>
          {features.map((val, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                 
                  
                >
                  {/* Render the icon based on the icon name */}
                  {iconMap[val.icon]}
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.descript}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
