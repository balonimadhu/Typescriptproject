import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E5077",
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto', 
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Shopping shop. All Rights Reserved.
        </Typography>
        <Box>
          <Link href="/" color="inherit" sx={{ marginRight: 2 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" sx={{ marginRight: 2 }}>
            About
          </Link>
          <Link href="/contact" color="inherit" sx={{ marginRight: 2 }}>
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
