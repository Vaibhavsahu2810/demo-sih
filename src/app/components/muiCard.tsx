import React from 'react';
import { Card, Image, Text, Button, Group, Box } from '@mantine/core';

export default function ImgMediaCard() {
  return (
    <Card
      shadow="md"
      style={{
        maxWidth: '345px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Card.Section>
        <Image
          src="https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg"
          alt="DevOps job"
          height={140}
        />
      </Card.Section>
      <Card.Section style={{ padding: '16px' }}>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontWeight: 500 }}>DevOps</Text>
          <Text style={{ fontWeight: 500 }}>TechCorps</Text>
        </Box>
        <Text mt="md" c="gray">
          We are seeking an experienced and passionate DevOps Engineer to help
          us build and maintain scalable, efficient, and reliable infrastructure
          for our applications.
        </Text>
      </Card.Section>
      <Card.Section style={{ padding: '16px' }}>
        <Group style={{spacing: "sm"}}>
          <Button variant="light" size="sm">
            Learn More
          </Button>
          <Button variant="filled" size="sm">
            Apply
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
