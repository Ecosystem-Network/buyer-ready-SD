import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = ({ src, alt, width, height }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%', 
      padding: 2,
      backgroundColor: '#1f2937',
      color: '#ffffff'
    }}>
      {/* Logo */}
      <Box
        component="a"
        href="https://ericnans.sandiegoproperties4sale.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: 0,
          margin: 0,
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={src || '/SellState.png'} // Use dynamic src or fallback to SELLSTATE logo
          alt={alt || 'SELLSTATE Next Gen Realty'} // Default alt text
          sx={{
            width: width || '300px', // Set a fixed width similar to license image
            height: height || 'auto', // Allow height to be passed or default to auto
            objectFit: 'contain', // Keep aspect ratio and fit within bounds
            maxWidth: '100%', // Ensure it doesn't overflow on small screens
          }}
        />
      </Box>
      
      {/* Contact Information */}
      <Typography variant="subtitle1" align="center" sx={{ mb: 1, color: '#9ca3af' }}>
        Feel Free to Call Us: <strong style={{ color: '#4f46e5' }}>760-450-6090</strong>
      </Typography>
      <Typography variant="body2" align="center" sx={{ color: '#9ca3af', mb: 3 }}>
        Monday-Friday 8am-5pm
      </Typography>

      {/* Legal Notice */}
      <Box sx={{ 
        maxWidth: '800px', 
        mx: 'auto', 
        px: 2,
        borderTop: '1px solid #374151',
        pt: 3
      }}>
        <Typography variant="body2" align="center" sx={{ mb: 2, color: '#9ca3af', fontWeight: 'bold' }}>
          ⚖️ Important Notice:
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 3, color: '#9ca3af', lineHeight: 1.6 }}>
          Real estate commissions are not fixed by law and are always negotiable. Commission credits or rebates must be disclosed in writing and are subject to lender and escrow approval. Services, fees, and commission structures are subject to agreement between broker and client.
        </Typography>

        {/* Licensing Information */}
        <Typography variant="body2" align="center" sx={{ mb: 1, color: '#9ca3af', fontWeight: 'bold' }}>
          Sell State Next Gen Realty, Nicole Turner, Broker CA DRE License #01771332
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 3, color: '#9ca3af' }}>
          Eric Nans, Realtor® CA DRE License #02237425
        </Typography>

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ color: '#6b7280', fontSize: '0.875rem' }}>
          © 2025 Sellstate Next Gen Realty
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
