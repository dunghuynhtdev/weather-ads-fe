"use client";

import { useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "20px", sm: "40px", md: "60px" },
        py: { xs: "60px", md: "80px" },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #3B4EFF 0%, #2B3ECC 100%)",
          borderRadius: "40px",
          padding: { xs: "40px 20px", sm: "60px 40px", md: "80px 60px" },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(-50%, 50%)",
          },
        }}
      >
        {/* Label */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: "rgba(255, 255, 255, 0.8)",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Ready to take the next step?
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h1"
          sx={{
            color: "#FFFFFF",
            mb: 2,
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          View your WeatherAds demo today
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1rem" },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Watch WeatherAds in action for Google Ads, Meta, and Programmatic, and
          discover how WeatherAds can increase your marketing ROI.
        </Typography>

        {/* Email Input & Button */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            position: "relative",
            zIndex: 1,
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <TextField
            type="email"
            placeholder="Business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <MailOutlineIcon sx={{ mr: 1, color: "#3B4EFF" }} />
              ),
            }}
            sx={{
              flex: 1,
              minWidth: "200px",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                color: "#000000",
                fontSize: "0.95rem",
                "& fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&:hover fieldset": {
                  borderColor: "#3B4EFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3B4EFF",
                  borderWidth: "2px",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "#999999",
                opacity: 1,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#3B4EFF",
              fontWeight: 700,
              fontSize: "0.875rem",
              px: 3,
              py: 1.5,
              minWidth: "140px",
              borderRadius: "8px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            Go to Demos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
