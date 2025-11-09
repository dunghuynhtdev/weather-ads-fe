"use client";

import { Box, Button, Container, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: "#FAFBFC", paddingTop: 8, paddingBottom: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 3,
                color: "#000",
              }}
            >
              The #1 hyperlocal moment marketing platform for brands & agencies.
            </Typography>

            <Box
              sx={{
                marginBottom: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#000" }}
              >
                70+ live signals:
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#3B4EFF",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Rain & flooding
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#666",
                marginBottom: 4,
              }}
            >
              Target audiences and personalize ads using 70+ cookieless
              contextual triggers & signals such as weather, health, sickness,
              travel, leisure, and more – across all marketing channels and
              platforms. Get more clicks, better engagement and higher
              conversions.
            </Typography>

            <Box sx={{ display: "flex", gap: 3, marginBottom: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "12px 32px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                }}
              >
                Create Free Account
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  padding: "12px 32px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  "&:hover": {
                    borderColor: "#000",
                    backgroundColor: "rgba(0, 0, 0, 0.02)",
                  },
                }}
              >
                View Demo
              </Button>
            </Box>

            <Typography sx={{ fontSize: "0.85rem", color: "#999" }}>
              Get started for free. No credit card required.
            </Typography>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/weather-ads-mobile-app-phones-showing-personalized.jpg"
              alt="WeatherAds mobile app mockup showing personalized weather-based advertising"
              style={{
                maxWidth: "100%",
                height: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
