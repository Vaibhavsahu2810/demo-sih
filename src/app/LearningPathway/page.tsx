"use client"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Button,
  Paper,
} from "@mantine/core";

const pathways = [
  {
    domain: 'Frontend Development',
    subtopics: [
      { name: 'HTML & CSS', description: 'Learn the basics of HTML and CSS, the building blocks of web development.' },
      { name: 'JavaScript', description: 'Understand the fundamentals of JavaScript, the language that powers interactive web features.' },
      { name: 'React', description: 'Build interactive UIs with React, a popular JavaScript library for creating dynamic web applications.' }
    ]
  },
  {
    domain: 'Backend Development',
    subtopics: [
      { name: 'Node.js', description: 'Learn server-side JavaScript with Node.js to build scalable network applications.' },
      { name: 'Express.js', description: 'Build web applications using Express.js, a fast, unopinionated framework for Node.js.' },
      { name: 'Databases', description: 'Understand SQL and NoSQL databases to efficiently store and manage application data.' }
    ]
  },
  {
    domain: 'DevOps',
    subtopics: [
      { name: 'Continuous Integration', description: 'Learn about automating code integration and testing to improve development workflows.' },
      { name: 'Continuous Deployment', description: 'Automate deployment processes to ensure smooth and frequent releases.' },
      { name: 'Monitoring & Logging', description: 'Implement monitoring and logging practices to maintain and troubleshoot applications.' }
    ]
  },
  {
    domain: 'Cybersecurity',
    subtopics: [
      { name: 'Threat Analysis', description: 'Understand how to identify and analyze potential security threats.' },
      { name: 'Vulnerability Assessment', description: 'Learn techniques to discover and address security vulnerabilities in applications.' },
      { name: 'Ethical Hacking', description: 'Explore ethical hacking practices to assess and improve system security.' }
    ]
  },
  {
    domain: 'Cloud Computing',
    subtopics: [
      { name: 'AWS Fundamentals', description: 'Get acquainted with AWS, a leading cloud services platform for building and deploying applications.' },
      { name: 'Azure Basics', description: 'Learn about Microsoft Azure, another major cloud service provider, and its offerings.' },
      { name: 'Cloud Storage Solutions', description: 'Understand different cloud storage options and their use cases.' }
    ]
  },
  {
    domain: 'Machine Learning',
    subtopics: [
      { name: 'Introduction to ML', description: 'Learn the basics of machine learning, including types of learning and common algorithms.' },
      { name: 'Supervised Learning', description: 'Understand supervised learning techniques such as regression and classification.' },
      { name: 'Unsupervised Learning', description: 'Explore unsupervised learning methods like clustering and dimensionality reduction.' },
      
    ]
  }
];

export default function Page() {
  return (
    <>
      <Container mt={104}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box style={{ position: "relative", marginBottom: "40px" }}>
            <Title
              order={1}
              size="xl"
              style={{ fontWeight: 700, color: "gray" }}
            >
              Learning Pathways
            </Title>
          </Box>

          <Box mb={20} style={{ display: "flex", flexWrap: "wrap", gap: "lg",justifyContent:"space-between" } }>
            {pathways.map((item, index) => (
              <Box
                key={index}
                style={{
                  background: "linear-gradient(to right, #1E293B, #334155)",
                  borderColor: "#94A3B8",
                  width: "30%",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "3px solid",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  padding: "20px", // Apply padding here
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Title order={2} style={{ fontWeight: 700, color: "white" }}>
                  {item.domain}
                </Title>
                {item.subtopics.map((subtopic, subIndex) => (
                  <Box key={subIndex} mt="sm">
                    <Text
                      size="xl"
                      style={{
                        fontWeight: 800,
                        background: "linear-gradient(to right, purple, yellow)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {subtopic.name}
                    </Text>
                    <Text>{subtopic.description}</Text>
                  </Box>
                ))}
                <Box style={{ flexGrow: 1 }} />{" "}
                {/* Spacer to push the button down */}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px",
                  }}
                >
                  <Button
                    radius="lg"
                    variant="filled"
                    color="dark"
                    style={{ backgroundColor: "#CBD5E1", color: "black" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1F2937";
                      e.currentTarget.style.color = "#E5E7EB";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#CBD5E1";
                      e.currentTarget.style.color = "black";
                    }}
                  >
                    Explore the Domain
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Footer should be a component you create or import from Mantine if available */}
      <Footer />
    </>
  );
};
