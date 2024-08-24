import React from 'react';
import { Container, Box, Title, Text, Paper } from '@mantine/core';

export const Intro = () => {
  return (
    <Container style={{ padding: '96px', paddingLeft: '96px', paddingRight: '96px' }} fluid>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <Box style={{ flex: 1, padding: '32px', height: '384px' }}>
          <Title order={2} style={{ color: 'black', marginBottom: '24px' }}>
            Find Your Perfect Job Match with AI-Powered Technology
          </Title>
          <Text style={{ color: 'black', marginBottom: '32px' }}>
            Our AI-driven job matching service uses advanced technology to
            connect you with the best job opportunities that match your skills
            and experience. Say goodbye to endless job searches and let our
            intelligent algorithms do the work for you.
          </Text>
          <Box style={{ display: 'flex', gap: '16px' }}>
            <Box style={{ flex: 1, marginBottom: '32px' }}>
              <Title order={3} style={{ color: 'black', marginBottom: '8px' }}>
                Discover Opportunities
              </Title>
              <Text style={{ color: 'black' }}>
                Take our skill test to unlock a world of job opportunities
                tailored for you.
              </Text>
            </Box>
            <Box style={{ flex: 1 }}>
              <Title order={3} style={{ color: 'black', marginBottom: '8px' }}>
                Learn and Grow
              </Title>
              <Text style={{ color: 'black' }}>
                Access recommended courses through AI to enhance your skills and
                career prospects.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box style={{ flex: 1, backgroundColor: '#94a3b8', height: '384px' }} />
      </Box>
    </Container>
  );
};
