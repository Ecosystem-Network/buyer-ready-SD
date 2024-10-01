import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Footer = ({ src, alt, width, height }) => {
  return (
    <Box
      component="a"
      href="https://www.lionscre.com/" // Set the URL to https://www.lionscre.com/
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Adds security to external links
      sx={{
        display: 'inline-block', // Ensure that it's treated as a block for proper rendering
      }}
    >
      <Box
        component="img"
        src={src || '/License.png'} // Default to License.png if src is not provided
        alt={alt || 'License Image'} // Default alt text
        sx={{
          width: width || '100%', // Default width to 100% if not provided
          height: height || 'auto', // Default height to auto if not provided
          objectFit: 'cover', // Ensure the image fits nicely
        }}
      />
    </Box>
  );
};

// Define prop types for type-checking and ensure robustness
Footer.propTypes = {
  src: PropTypes.string, // Image source
  alt: PropTypes.string, // Alt text for accessibility
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Width can be a percentage or number
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Height can be a percentage or number
};

// Default props if not provided
Footer.defaultProps = {
  src: '/License.png', // Default image path
  alt: 'License Image',
  width: '100%', // Full width by default
  height: 'auto', // Height is set to auto by default for responsiveness
};

export default Footer;
