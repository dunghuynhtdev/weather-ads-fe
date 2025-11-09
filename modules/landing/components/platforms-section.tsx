"use client";

import { Box, Container, Typography } from "@mui/material";

const platforms = [
  { name: "Meta", icon: "🔵" },
  { name: "Facebook", icon: "📘" },
  { name: "Instagram", icon: "📷" },
  { name: "Google Ads", icon: "🔍" },
  { name: "TikTok", icon: "♪" },
  { name: "YouTube", icon: "🎥" },
  { name: "GAM", icon: "📊" },
  { name: "DV360", icon: "📡" },
  { name: "Zapier", icon: "⚡" },
  { name: "Webhooks", icon: "🔗" },
];

export default function PlatformsSection() {
  return (
    <Box sx={{ backgroundColor: "#FFF", paddingY: 8 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#666",
            textAlign: "center",
            marginBottom: 6,
          }}
        >
          Works across virtually all channels and platforms
        </Typography>

        {/* Platform Icons Card */}
        <Box
          sx={{
            backgroundColor: "#FFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 8,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            overflow: "auto",
          }}
        >
          {platforms.map((platform) => (
            <Box
              key={platform.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              <Box sx={{ fontSize: "2.5rem" }}>{platform.icon}</Box>
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: 500, color: "#333" }}
              >
                {platform.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
