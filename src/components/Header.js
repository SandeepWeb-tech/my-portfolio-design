// ===============================
// src/components/Header.js
// ===============================

import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(10,10,10,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          Sandeep
          <span style={{ color: "#ff2e88" }}>.</span>
        </Typography>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 4,
          }}
        >
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff2e88",
            borderRadius: "12px",
            px: 3,
            py: 1,
            fontWeight: "bold",
            boxShadow: "0px 0px 20px rgba(255,46,136,0.4)",
            "&:hover": {
              bgcolor: "#ff0f74",
            },
          }}
        >
          Hire Me
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;