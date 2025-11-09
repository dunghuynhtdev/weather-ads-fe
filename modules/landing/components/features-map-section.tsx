"use client";

import Image from "next/image";

import { Box, Container, Grid, Typography } from "@mui/material";

interface Feature {
  icon: string;
  title: string;
  description: string;
  learnMore: string;
}

const features: Feature[] = [
  {
    icon: "🔗",
    title: "Connects with everything",
    description:
      "WeatherAds works with your existing Search, Display, Video, Social, Shopping, RTB, Email, Push and SMS campaigns. Effortlessly link your ad accounts with our plug & play connectors for Google Ads, Meta, TikTok, DV360, Google Ad Manager, and virtually any email, SMS or marketing automation platform.",
    learnMore: "Learn more →",
  },
  {
    icon: "📊",
    title: "Real-time reporting",
    description:
      "Real-time ad mapping, activation logging and automation reports make it easy to track and measure your success in real time.",
    learnMore: "Learn more →",
  },
  {
    icon: "🎧",
    title: "Stellar customer support",
    description:
      "We're your trusted moment-marketing and weather targeting partner. Our award winning customer success team will be on hand to guide you through every step of the way.",
    learnMore: "Learn more →",
  },
];

export default function FeaturesMapSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 400, md: 500 },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src="/dashboard-map.jpg"
                alt="WeatherAds Dashboard Map"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {features.map((feature, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        bgcolor: "#f0f4ff",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#1a1a1a",
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#3B4EFF",
                      textDecoration: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "color 0.2s",
                      "&:hover": {
                        color: "#2837cc",
                      },
                    }}
                  >
                    {feature.learnMore}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
