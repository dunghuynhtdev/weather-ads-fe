"use client";

import { Box, Container, Typography } from "@mui/material";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📱",
      title: "Maximize Conversions",
      description:
        "Maximize conversions with ads that engage the most receptive viewers at the most impactful moments",
    },
    {
      icon: "🏦",
      title: "Drive Down Costs",
      description:
        "More contextually relevant ads result in better quality scores and reduced advertising costs",
    },
    {
      icon: "🎁",
      title: "Deliver Superior ROAS",
      description:
        "Get more bang for your buck with hugely profitable campaigns that deliver superior ROAS",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 8,
            fontWeight: 700,
            fontSize: { xs: "24px", md: "42px" },
            lineHeight: 1.3,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          Automate your advertising based on localized, real-world signals, and
          watch your conversion rates{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", color: "#1e3a8a" }}
          >
            skyrocket
          </Box>
          .
        </Typography>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  fontSize: "48px",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80px",
                  width: "80px",
                }}
              >
                {feature.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "18px",
                  color: "#1a1a1a",
                }}
              >
                {feature.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
