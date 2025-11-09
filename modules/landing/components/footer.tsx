"use client";

import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Logo Section */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#3B4EFF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ⚡
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                WeatherAds
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: "#666" }}>
              Powered by 🌡️ AccuWeather
            </Typography>
          </Grid>

          {/* Platform Column */}
          <Grid size={{ xs: 12, sm: 6, md: 1.8 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Platform
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "Features",
                "Triggers & Data",
                "Trigger Comparison",
                "Plans & Pricing",
                "FAQ",
                "Meta",
                "TikTok",
                "YouTube",
                "DV360",
                "Google Ad Manager",
                "Zapier",
                "Webhooks",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": { color: "#3B4EFF" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Industries Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2.2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Industries
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "Automotive",
                "Home & Garden",
                "HVAC",
                "Travel & Tourism",
                "CPG & Grocery",
                "Health & Pharma",
                "Home Services",
                "Indoor Attractions",
                "Apparel & Sporting Goods",
                "Outdoor Attractions",
                "Restaurants & Food Delivery",
                "Insurance",
                "All Industries",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": { color: "#3B4EFF" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources Column */}
          <Grid size={{ xs: 12, sm: 6, md: 1.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Case Studies", "Media Kit", "Blog", "Press"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": { color: "#3B4EFF" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support Column */}
          <Grid size={{ xs: 12, sm: 6, md: 1.7 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Quick-Start Guides", "Help Center", "Video Tutorials"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": { color: "#3B4EFF" },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Contact Column */}
          <Grid size={{ xs: 12, sm: 12, md: 1.8 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#3B4EFF" },
                }}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#3B4EFF" },
                }}
              >
                Get Demo
              </Link>
              <Typography sx={{ color: "#666", fontSize: "0.875rem" }}>
                UK +44(0)1416287527
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "0.875rem" }}>
                USA +17027510594
              </Typography>
            </Box>
          </Grid>

          {/* Meta Business Partner Badge */}
          <Grid
            size={{ xs: 12, md: "auto" }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box
              sx={{
                border: "2px solid #3B4EFF",
                borderRadius: 1,
                px: 3,
                py: 2,
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "#3B4EFF", fontWeight: 600 }}>
                ∞ Meta
              </Typography>
              <Typography sx={{ color: "#3B4EFF", fontSize: "0.75rem" }}>
                Business Partner
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {["🐦", "📘", "📹", "📡"].map((icon, idx) => (
              <Link
                key={idx}
                href="#"
                sx={{
                  display: "inline-flex",
                  fontSize: "1.25rem",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {icon}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Typography sx={{ color: "#999", fontSize: "0.875rem" }}>
              © 2025 WeatherAds. All Rights Reserved
            </Typography>
            <Link
              href="#"
              sx={{
                color: "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Data Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#3B4EFF" },
              }}
            >
              Terms & Conditions
            </Link>
            <Typography sx={{ color: "#999", fontSize: "0.875rem" }}>
              Company registration: 13689466
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
