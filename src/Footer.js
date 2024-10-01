import React from 'react';
import { Box } from '@mui/material';

const Footer = ({ src, alt, width, height }) => {
  return (
    <Box
      component="a"
      href="https://www.lionscre.com/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        component="img"
        src={src || '/License.png'} // Use dynamic src or fallback to default
        alt={alt || 'License Image'} // Default alt text
        sx={{
          width: width || '100%', // Allow width to be passed or default to 100%
          height: height || 'auto', // Allow height to be passed or default to auto
          objectFit: 'cover', // Ensure the image fits nicely
        }}
      />
    </Box>
  );
};

export default Footer;
