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
import { IconHtml } from "@tabler/icons-react";
import FeaturesCard from "../components/mantineCard";


export default function Page() {
  return (
    <>
      <FeaturesCard />
     
      {/* Footer should be a component you create or import from Mantine if available */}
      <Footer />
    </>
  );
};
