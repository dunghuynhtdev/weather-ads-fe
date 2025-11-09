"use client";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";

export default function TopBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.9rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
        <span>
          NEW! Zapier integration launched – connect WeatherAds with 6000+
          applications!
        </span>
        <Button
          size="small"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
      <Button
        onClick={() => setIsOpen(false)}
        sx={{
          minWidth: "auto",
          padding: "4px",
          color: "white",
        }}
      >
        <CloseIcon fontSize="small" />
      </Button>
    </Box>
  );
}
