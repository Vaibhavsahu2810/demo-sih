import React from 'react';
import { Container, Box, Title, Text, Paper } from '@mantine/core';

function Encourage() {
  return (
    <Container style={{ padding: '48px' }} fluid>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          flex: 1,
          gap: '64px',
          paddingBottom: '64px',
        }}
      >
        <Box style={{ fontWeight: '800' }}>
          <Text size="md" style={{ paddingBottom: '8px' }}>
            Discover
          </Text>
          <Title order={2} style={{ fontSize: '40px' }}>
            Find your dream job with AI
          </Title>
        </Box>
        <Text style={{ flex: 1 }}>
          Our AI-driven job matching and skill development process is designed
          to empower your career. We use advanced algorithms to analyze your
          skills and match you with the perfect job opportunities. Additionally,
          our platform recommends courses tailored to your needs, provides
          community support, and organizes virtual events like webinars to help
          you enhance your skills. With our resume builder, you can create a
          professional resume that stands out from the competition.
        </Text>
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        <Box style={{ flex: 1, maxWidth: '320px'}}>
          <Paper style={{ padding: '32px', backgroundColor: '#E2E8F0' }}>
            <Title order={3} style={{ fontSize: '32px' }}>
              Find Your perfect job
            </Title>
            <Text>Take a skill test to unlock job opportunities.</Text>
          </Paper>
        </Box>
        <Box style={{ flex: 1, maxWidth: '320px' }}>
          <Paper style={{ padding: '32px', backgroundColor: '#E2E8F0'}}>
            <Title order={3} style={{ fontSize: '32px' }}>
              Enhance Your Skills
            </Title>
            <Text>Discover recommended courses through AI technology.</Text>
          </Paper>
        </Box>
        <Box style={{ flex: 1, maxWidth: '320px' }}>
          <Paper style={{ padding: '32px', backgroundColor: '#E2E8F0'}}>
            <Title order={3} style={{ fontSize: '32px' }}>
              Join Our Community
            </Title>
            <Text>Get support and connect with like-minded professionals.</Text>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Encourage;
