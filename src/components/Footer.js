// ===============================
// src/components/Footer.js
// ===============================

import React from "react";

import {
  Box,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        py: 4,
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography sx={{ color: "#888" }}>
        © 2026 Sandeep Kumar Sharma. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;