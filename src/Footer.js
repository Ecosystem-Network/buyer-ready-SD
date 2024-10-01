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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: 0, // Removed padding to eliminate extra space
        margin: 0,  // Ensure there's no margin
      }}
    >
      <Box
        component="img"
        src={src || '/License.png'}
        alt={alt || 'License Image'}
        sx={{
          width: width || 'auto',
          height: height || 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
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

