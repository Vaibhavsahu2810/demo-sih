import React from 'react';
import { Container, Box, Title, Text, Button } from '@mantine/core';

export const Header = () => {
  return (
    <Container style={{ padding: '48px', paddingTop: '96px', paddingLeft: '96px', paddingRight: '96px' }} fluid>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <Title order={1} style={{ flex: 1, fontSize: '40px' }}>
          Empower Your Career With AI-Driven Job Matches
        </Title>
        <Box style={{ flex: 1 }}>
          <Text style={{ marginBottom: '16px' }}>
            Find the perfect job opportunities and develop your skills with our
            AI-powered platform.
          </Text>
          <Box style={{ display: 'flex', gap: '16px' }}>
            <Button size="md" style={{ backgroundColor: 'black', color: 'white' }}>
              Learn More
            </Button>
            <Button size="md" variant="outline" style={{ borderColor: 'black', color: 'black' }}>
              Signup
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
