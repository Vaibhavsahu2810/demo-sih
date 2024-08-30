import React from 'react';
import { Container, Text, Button, Group, Divider, Box } from '@mantine/core';

function Roadmap() {
  return (
    <Container py="lg" px="md" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
      <Box style={{ flex: 1, spaceY: 'sm' }}>
        <Text size="md">Innovate</Text>
        <Text size="xl" style={{ fontWeight:700 }}>
          By subscribing, you agree to our Terms and Conditions.
        </Text>
        <Group  style={{ marginTop: '16px', spacing:"md" }}>
          <Button variant="outline" size="md">
            Learn More
          </Button>
          <Button size="md">Sign up &gt;</Button>
        </Group>
      </Box>
      <Box style={{ flex: 1, spaceY: 'sm' }}>
        {['Our Journey', 'Our Impact', 'Our Team', 'Our Vision'].map((title, index) => (
          <Group key={index} align="flex-start" style={{ marginBottom: '24px', spacing:"md" }}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Box style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#475569' }} />
              <Divider orientation="vertical" style={{ height: '100px', width: '1px', backgroundColor: '#1e293b' }} />
            </Box>
            <Box>
              <Text size="lg"  style={{ marginBottom: '8px', fontWeight:500 }}>
                {title}
              </Text>
              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                iusto recusandae laudantium saepe
              </Text>
            </Box>
          </Group>
        ))}
      </Box>
    </Container>
  );
}

export default Roadmap;
