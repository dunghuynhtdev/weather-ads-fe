"use client";

import Image from "next/image";

import { Box, Container, Link as MuiLink, Typography } from "@mui/material";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: "⚡",
    title: "70+ contextual targeting signals",
    description:
      "Target audiences and personalize ads using 70+ intent-rich hyper-contextual triggers & signals such as weather, health, sickness, travel, leisure, and more. 100% cookieless and privacy-compliant.",
  },
  {
    icon: "🌍",
    title: "Global data coverage",
    description:
      "WeatherAds is powered by best-in-class global weather, health, travel, leisure and environmental data, meaning you can target audiences worldwide with pinpoint precision.",
  },
  {
    icon: "🔧",
    title: "Launch in under 15 minutes",
    description:
      "Our visual interface helps you quickly create, launch and scale powerful contextual targeting & ad personalization rules for your existing campaigns. No coding required. Go live in under 15 minutes.",
  },
];

export default function FeaturesDashboardSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        {/* Headline */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#000000",
              mb: 2,
            }}
          >
            Engage your audience at the most impactful moments with ads that
            move them to{" "}
            <Box
              component="span"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#3B4EFF",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              action
            </Box>
            .
          </Typography>
        </Box>

        {/* Features and Dashboard Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left: Features List */}
          <Box>
            {features.map((feature, index) => (
              <Box key={index} sx={{ mb: 6 }}>
                {/* Feature Icon */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                  {/* Icon Container */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      minWidth: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      backgroundColor: "#f0f2ff",
                      fontSize: "24px",
                    }}
                  >
                    {feature.icon}
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#000000",
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "#666666",
                        mb: 2,
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <MuiLink
                      href="#"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#3B4EFF",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Learn more →
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right: Dashboard Screenshot */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "3/4",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Image
                src="/dashboard-screenshot.png"
                alt="WeatherAds Dashboard Preview"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
