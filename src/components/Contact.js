// src/components/Contact.js

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#111",
        textAlign: "center",
      }}
      id='contact'
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" mb={3}>
          Let's Work Together
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#b0b0b0",
            mb: 5,
            fontSize: "18px",
          }}
        >
          Interested in collaborating or building modern web experiences?
          Let’s connect and create something amazing together.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff4081",
            px: 5,
            py: 1.5,
            "&:hover": {
              bgcolor: "#e91e63",
            },
          }}
        >
          Contact Me
        </Button>
      </Container>
    </Box>
  );
}

export default Contact;