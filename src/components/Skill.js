// ===============================
// src/components/Skills.js
// ===============================

import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";

const topSkills = [
  { name: "React", value: 95 },
  { name: "Next.js", value: 90 },
  { name: "JavaScript", value: 92 },
  { name: "Material UI", value: 94 },
  { name: "Redux", value: 88 },
  { name: "TypeScript", value: 85 },
];

const otherSkills = [
  "Node.js",
  "MongoDB",
  "Git & GitHub",
  "REST API",
  "Firebase",
  "Responsive Design",
  "Tailwind CSS",
  "UI/UX",
];

function Skills() {
  return (
    <Box
      sx={{
        py: 14,
        background: "#070707",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* SMALL TITLE */}
        <Typography
          sx={{
            color: "#ff2e88",
            fontWeight: "bold",
            letterSpacing: 3,
            mb: 2,
          }}
        >
          — MY SKILLS
        </Typography>

        {/* MAIN TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              md: "60px",
            },
            fontWeight: "bold",
            mb: 3,
            color: "white",
          }}
        >
          Develop <span style={{ color: "#ff2e88" }}>Skills</span>
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#b0b0b0",
            maxWidth: "700px",
            lineHeight: 1.8,
            mb: 10,
            fontSize: "17px",
          }}
        >
          I create responsive and modern web applications with premium UI,
          smooth user experience, and scalable frontend architecture using
          React.js, Next.js, and Material UI.
        </Typography>

        {/* TOP CIRCLE SKILLS */}
        <Grid container spacing={4}>
          {topSkills.map((skill, index) => (
            <Grid item xs={6} md={4} lg={2} key={index}>
              <Paper
                elevation={0}
                sx={{
                  background: "#111",
                  borderRadius: "30px",
                  p: 4,
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.4s",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "#ff2e88",
                    boxShadow:
                      "0px 0px 30px rgba(255,46,136,0.2)",
                  },
                }}
              >
                {/* CIRCLE */}
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    mb: 3,
                  }}
                >
                  {/* BACKGROUND CIRCLE */}
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={120}
                    thickness={3}
                    sx={{
                      color: "#222",
                      position: "absolute",
                    }}
                  />

                  {/* ACTIVE CIRCLE */}
                  <CircularProgress
                    variant="determinate"
                    value={skill.value}
                    size={120}
                    thickness={3}
                    sx={{
                      color: "#ff2e88",
                    }}
                  />

                  {/* CENTER TEXT */}
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "22px",
                        color: "white",
                      }}
                    >
                      {skill.value}%
                    </Typography>
                  </Box>
                </Box>

                {/* SKILL NAME */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* OTHER SKILLS */}
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              mb: 5,
              color: "white",
            }}
          >
            Other Technologies
          </Typography>

          <Grid container spacing={3}>
            {otherSkills.map((skill, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    background: "#111",
                    borderRadius: "18px",
                    textAlign: "center",
                    py: 3,
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "0.3s",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg,#ff2e88,#7c3aed)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;