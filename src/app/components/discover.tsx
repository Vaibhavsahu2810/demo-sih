import { Container, Box, Title, Text, Button } from '@mantine/core';

function Discover() {
  return (
    <Container p="xl" fluid>
      <Box
        style={{
          backgroundColor: '#64748b', // Slate-500 equivalent
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px', // Corresponding to theme.spacing.lg
          padding: '48px', // Corresponding to theme.spacing.xl
        }}
      >
        <Box style={{ textAlign: 'center' }}>
          <Title order={3} style={{ fontSize: '40px' }}>
            Discover your dream career today
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque ipsam nam maxime et iste.
          </Text>
        </Box>
        <Box style={{ display: 'flex', gap: '32px' }}> {/* Manual spacing between buttons */}
          <Button size="lg" radius="md" style={{ backgroundColor: '#334155', color: 'white' }}>
            Sign up
          </Button>
          <Button size="lg" radius="md" variant="outline" style={{ borderColor: 'white', color: 'white' }}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Discover;
