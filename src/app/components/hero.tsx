import React from 'react';
import { Box } from '@mantine/core';

export const Hero = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '96px',
      }}
    >
      <Box
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#94a3b8', // Slate-400 equivalent
        }}
      />
    </Box>
  );
};
