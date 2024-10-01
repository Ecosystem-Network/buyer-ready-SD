import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Footer = ({ src, alt, width, height }) => {
  return (
    <Box
      component="a"
      href="https://www.lionscre.com/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex', // Ensure the link container uses flex for alignment
        justifyContent: 'center', // Center the image horizontally
        alignItems: 'center', // Center the image vertically
        width: '100%', // Ensure the footer spans the full width of the page
        height: 'auto', // Maintain the aspect ratio
        padding: '20px', // Add padding for better spacing
        boxSizing: 'border-box', // Make sure padding is included in the element's total width/height
      }}
    >
      <Box
        component="img"
        src={src || '/License.png'}
        alt={alt || 'License Image'}
        sx={{
          width: width || 'auto', // Allow the image to scale naturally
          height: height || 'auto',
          maxWidth: '100%', // Ensure the image doesn't overflow the parent container
          objectFit: 'contain', // Contain the image without cropping
        }}
      />
    </Box>
  );
};

Footer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Footer.defaultProps = {
  src: '/License.png',
  alt: 'License Image',
  width: 'auto',
  height: 'auto',
};

export default Footer;

