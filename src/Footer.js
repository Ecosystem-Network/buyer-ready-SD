import React from 'react';
import { Box } from '@mui/material';

const Footer = ({ src, alt, width, height }) => {
  return (
    <Box
      component="img"
            href="https://www.lionscre.com/"
      target="_blank"
      rel="noopener noreferrer"
      src="/License.png" // Image located in public folder
      alt={alt || 'License Image'} // Default alt text
      sx={{
        width: width || '100%', // Default width to 100% if not provided
        height: height || '100%', // Default height to auto if not provided
        objectFit: 'cover', // Ensure the image fits nicely
      }}
    />
  );
};

export default Footer;
