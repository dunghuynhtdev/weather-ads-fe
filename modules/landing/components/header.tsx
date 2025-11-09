"use client";

import { Box, Button, Container, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{ backgroundColor: "#FAFBFC", borderBottom: "1px solid #E5E5E5" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#3B4EFF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              ⚡
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 700, fontSize: "1.25rem", color: "#000" }}
              >
                WeatherAds
              </Typography>
              <Typography
                sx={{ fontSize: "0.7rem", color: "#999", fontWeight: 500 }}
              >
                Powered by AccuWeather
              </Typography>
            </Box>
          </Box>

          {/* Navigation */}
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Platform
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Pricing
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Industries
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Case Studies
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Resources
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Contact
            </Typography>
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#000",
                color: "#000",
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                },
              }}
            >
              🔒 Log In
            </Button>
            <Button variant="contained" color="primary">
              View Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
