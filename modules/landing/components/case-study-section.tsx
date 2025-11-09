"use client";

import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function CaseStudySection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#f0f0ff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Case Study Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: { xs: 3, md: 4 },
                boxShadow: "0 2px 16px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "28px" },
                  mb: 2,
                  color: "#000",
                }}
              >
                McDonald&apos;s Reduce CPM by <u>50%</u> on Social
              </Typography>

              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#666",
                  mb: 3,
                }}
              >
                &quot;WeatherAds enables us to reach our guests at relevant
                moments with the right content. That is why we expanded the use
                of the platform towards always on campaigns and across different
                parts of the business.&quot;
              </Typography>

              <Link
                href="#case-studies"
                sx={{
                  color: "#3B4EFF",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                View case studies →
              </Link>
            </Box>
          </Grid>

          {/* McDonald's Logo */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/mcdonalds-arches.jpg"
                alt="McDonald's Golden Arches"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "300px",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Press & Media Section */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            sx={{
              color: "#666",
              fontSize: "14px",
              fontWeight: 500,
              mb: 3,
            }}
          >
            As Featured in:
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 3, md: 6 },
            }}
          >
            {[
              { name: "ADWEEK", src: "/press-adweek.jpg" },
              { name: "Econsultancy", src: "/press-econsultancy.jpg" },
              { name: "Forbes", src: "/press-forbes.jpg" },
              { name: "DMI", src: "/press-dmi.jpg" },
              { name: "WordStream", src: "/press-wordstream.jpg" },
              { name: "Medium", src: "/press-medium.jpg" },
            ].map((press) => (
              <Box
                key={press.name}
                component="img"
                src={press.src}
                alt={press.name}
                sx={{
                  height: "40px",
                  width: "auto",
                  opacity: 0.7,
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
