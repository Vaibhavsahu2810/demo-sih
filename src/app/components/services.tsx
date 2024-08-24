"use client"
import React from 'react';
import { Container, Card, Image, Text, Button, Group } from '@mantine/core';

function Services() {
  return (
    <section>
      <Container size="xxl" py="lg" mr={0} ml={0} px="96" style={{width:'100%'}}>
        <Text style={{align:"center", fontWeight:700}} size="xl" mb="lg">
          Empower Your Career with AI-Driven Job Matches
        </Text>
        <Group align="center" style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
          {Array(3).fill(null).map((_, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" style={{ width: '300px' }}>
              <Card.Section>
                <Image
                  src="https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84416316-stock-photo-hand-pointing-to-online-course.jpg"
                  alt="AI-Recommended Courses"
                />
              </Card.Section>
              <Text style={{fontWeight:500}} size="lg" mt="md">
                AI-Recommended Courses for Skill Development
              </Text>
              <Text mt="sm" c="dimmed">
                Discover job opportunities through skill tests and assessments.
              </Text>
              <Group align="right" mt="md">
                <Button
                  component="a"
                  href="#"
                  variant="outline"
                >
                  Read more
                </Button>
              </Group>
            </Card>
          ))}
        </Group>
      </Container>
    </section>
  );
}

export { Services };
