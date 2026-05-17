import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Vindra Beauty",
    code: "#",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",
    ],
  },

  {
    title: "Portfolio Website",
    code: "#",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    ],
  },

  {
    title: "Admin Dashboard",
    code: "#",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    ],
  },

  {
    title: "Ecommerce Store",
    code: "#",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    ],
  },
];

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: 350,
          md: 450,
        },
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      {/* IMAGES */}
      {project.images.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          alt={project.title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: currentImage === i ? 1 : 0,
            transition: "1s",
          }}
        />
      ))}

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1))",
        }}
      />

      {/* DOTS */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        {project.images.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: currentImage === i ? 22 : 8,
              height: 8,
              borderRadius: 10,
              background:
                currentImage === i
                  ? "#ff2e88"
                  : "rgba(255,255,255,0.5)",
              transition: "0.4s",
            }}
          />
        ))}
      </Stack>

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: 25,
          zIndex: 10,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 800,
            fontSize: {
              xs: "28px",
              md: "38px",
            },
            mb: 2,
          }}
        >
          {project.title}
        </Typography>

        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          href={project.code}
          sx={{
            background:
              "linear-gradient(135deg,#ff2e88,#7c3aed)",

            borderRadius: "14px",

            px: 3,
            py: 1.2,

            textTransform: "none",

            fontWeight: "bold",

            "&:hover": {
              background:
                "linear-gradient(135deg,#ff2e88,#9333ea)",
            },
          }}
        >
          Get Source Code
        </Button>
      </Box>
    </Box>
  );
}

function Projects() {
  return (
    <Box
      sx={{
        py: 10,
        background: "#050505",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "42px",
              md: "70px",
            },
            fontWeight: 900,
            mb: 6,
          }}
        >
          My Projects
        </Typography>

        {/* GRID */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 6,
              }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


export default Projects;