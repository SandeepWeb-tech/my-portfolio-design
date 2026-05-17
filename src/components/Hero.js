// ===============================
// src/components/Hero.js
// ===============================

import React from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import resume from "../assets/Sandeep_Resume.pdf";

function Hero() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          width: "100%",
        }}
      >
        {/* LEFT */}
        <Box flex={1}>
          <Typography
            sx={{
              color: "#ff2e88",
              letterSpacing: 5,
              mb: 2,
              fontWeight: "bold",
            }}
          >
            FRONTEND DEVELOPER
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "48px",
                md: "90px",
              },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Creative
            <br />
            <span style={{ color: "#ff2e88" }}>Modern</span> UI
          </Typography>

          <Typography
            sx={{
              color: "#b0b0b0",
              fontSize: "18px",
              maxWidth: "600px",
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            I build premium responsive websites and modern web experiences using
            React.js, Material UI, and modern frontend technologies.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#ff2e88",
                px: 4,
                py: 1.7,
                borderRadius: "14px",
                fontWeight: "bold",
                boxShadow: "0px 0px 30px rgba(255,46,136,0.4)",
                "&:hover": {
                  bgcolor: "#ff0f74",
                },
              }}
            >
              View Work
            </Button>

            <Button
              variant="outlined"
              component="a"
              href={resume}
              download="Sandeep_Resume.pdf"
              sx={{
                borderColor: "#555",
                color: "white",
                px: 4,
                py: 1.7,
                borderRadius: "14px",

                "&:hover": {
                  borderColor: "#ff2e88",
                  color: "#ff2e88",
                },
              }}
            >
              Download CV
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
          </Stack>
        </Box>

        {/* RIGHT */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: 280,
                md: 420,
              },
              height: {
                xs: 350,
                md: 520,
              },
              borderRadius: "40px",
              background: "linear-gradient(180deg,#ff2e88 0%, #7c3aed 100%)",
              p: "3px",
              boxShadow: "0px 0px 40px rgba(255,46,136,0.3)",
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "38px",
                bgcolor: "#111",
                fontSize: "120px",
                fontWeight: "bold",
              }}
            >
              S
            </Avatar>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
