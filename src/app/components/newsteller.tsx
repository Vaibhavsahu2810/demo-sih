import React from 'react';
import { Button, Text, Container, Group, Stack } from '@mantine/core';

function Newsteller() {
  return (
    <Container py="lg" px="md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Stack  style={{ flex: 1, spacing: "xs"}}>
        <Text size="xl" style={{fontWeight: 700}}>
          Stay updated with our newsletter
        </Text>
        <Text size="md">
          Get the latest updates and opportunities
        </Text>
      </Stack>
      <div style={{ marginLeft: 'auto' }}>
        <Group style={{spacing:"md"}}>
          <Button variant="outline" size="md" style={{ padding: '8px 32px' }}>
            Sign up
          </Button>
          <Button variant="filled" size="md" style={{ padding: '8px 32px' }}>
            Sign up
          </Button>
        </Group>
        <Text size="sm" style={{ marginTop: '8px' }}>
          By subscribing, you agree to our Terms and Conditions.
        </Text>
      </div>
    </Container>
  );
}

export default Newsteller;
