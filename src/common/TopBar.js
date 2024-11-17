import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { LocationOn as LocationOnIcon, Email as EmailIcon } from '@mui/icons-material';

export default function TopBar() {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        backgroundColor: 'primary.main',
        padding: 1,
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <LocationOnIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link component={RouterLink} to="/" color="inherit" underline="none">
              123 Street, New York
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <EmailIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link component={RouterLink} to="/" color="inherit" underline="none">
              Email@Example.com
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="body2" sx={{ mx: 1 }}>
              Privacy Policy
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ mx: 1, color: 'white' }}>
            /
          </Typography>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="body2" sx={{ mx: 1 }}>
              Terms of Use
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ mx: 1, color: 'white' }}>
            /
          </Typography>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="body2" sx={{ mx: 1 }}>
              Sales and Refunds
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
