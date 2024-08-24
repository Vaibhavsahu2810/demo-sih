import React from 'react';
import { Container, Text, Group, Avatar, Divider } from '@mantine/core';

function Ratings() {
  return (
    <Container py="lg" px="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Group style={{spacing: "xs"}} mb="lg">
        <Text size="xl" c="black">★</Text>
        <Text size="xl" c="black">★</Text>
        <Text size="xl" c="black">★</Text>
        <Text size="xl" c="black">★</Text>
        <Text size="xl" c="black">★</Text>
      </Group>
      <Text size="xl"   mb="lg" style={{ maxWidth: 800, fontWeight: 700, align:"center"}}>
        I am extremely impressed with the job matching capabilities of this
        platform. It has helped me find the perfect job that aligns with my
        skills and interests.
      </Text>
      <Group style={{spacing: "md"}} align="center">
        <Avatar src="https://via.placeholder.com/50" alt="John Doe" size="lg" />
        <div style={{ textAlign: 'left' }}>
          <Text size="lg" style={{fontWeight: 500}}>John Doe</Text>
          <Text size="sm">Software Engineer, ABC Inc.</Text>
        </div>
        <Divider orientation="vertical" />
        <Text size="xl" c="dimmed">qwertyjuj</Text>
      </Group>
    </Container>
  );
}

export default Ratings;
