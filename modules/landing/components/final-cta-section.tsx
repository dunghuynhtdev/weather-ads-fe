"use client";

import { useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function FinalCTASection() {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #3B4EFF 0%, #5B7EFF 100%)",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50px",
          left: "10%",
          width: "200px",
          height: "120px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(40px)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-30px",
          right: "5%",
          width: "250px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(50px)",
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              mb: 2,
              display: "block",
            }}
          >
            READY TO TAKE THE NEXT STEP?
          </Typography>

          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            See what WeatherAds can do for you:
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: "1rem",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Watch WeatherAds in action for Google Ads, Meta, and Programmatic,
            and discover how WeatherAds can increase your marketing ROI.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            {/* Email Input */}
            <TextField
              placeholder="Business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <MailOutlineIcon
                    sx={{ mr: 1, color: "rgba(255, 255, 255, 0.7)" }}
                  />
                ),
              }}
              sx={{
                width: { xs: "100%", sm: "280px" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  backgroundColor: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "8px",
                  "&:hover": {
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                  },
                  "&.Mui-focused": {
                    border: "2px solid white",
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "rgba(255, 255, 255, 0.6)",
                  opacity: 1,
                },
              }}
            />

            {/* CTA Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#3B4EFF",
                px: 3,
                py: 1.5,
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                },
              }}
            >
              Get a Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
