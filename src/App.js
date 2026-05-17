// ===============================
// src/App.js
// ===============================

import React from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;