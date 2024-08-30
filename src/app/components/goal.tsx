import React from 'react';
import { Container, Box, Title, Text, Paper } from '@mantine/core';

function Goal() {
  return (
    <Container style={{ padding: '48px', paddingLeft: '96px', paddingRight: '96px' }} fluid>
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
            Build an Impressive Resume with Our User-Friendly Tool
          </Title>
          <Text style={{ color: 'black', marginBottom: '32px' }}>
            Craft a professional resume that highlights your skills and
            experience, and impress potential employers.
          </Text>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              height: '100%',
            }}
          >
            <Box>
              <Title order={3} style={{ color: 'black', marginBottom: '8px' }}>
                Easy-to-Use
              </Title>
              <Text style={{ color: 'black' }}>
                Our resume builder simplifies the process, allowing you to
                create a polished resume quickly.
              </Text>
            </Box>
            <Box>
              <Title order={3} style={{ color: 'black', marginBottom: '8px' }}>
                Customizable
              </Title>
              <Text style={{ color: 'black' }}>
                Tailor your resume to specific job applications with our
                flexible templates and formatting options.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box style={{ flex: 1 }}>
          <video
            src="https://cdn.enhancv.com/1080_ai_resume_builder_005c790816.mp4?updated_at=2023-12-21T13:15:17.985Z"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export { Goal };
