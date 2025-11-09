"use client";

import { Box, Container, Link, Typography } from "@mui/material";

const customers = [
  { name: "Unilever", initials: "U" },
  { name: "ACE Hardware", initials: "ACE" },
  { name: "Woolrich", initials: "W" },
  { name: "McDonald's", initials: "M" },
  { name: "Decathlon", initials: "D" },
  { name: "Toyota", initials: "T" },
  { name: "Heineken", initials: "H" },
];

export default function CustomersSection() {
  return (
    <Box sx={{ backgroundColor: "#F9FAFB", paddingY: 8 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#666",
            textAlign: "center",
            marginBottom: 6,
          }}
        >
          Trusted by thousands of the world&apos;s top brands and agencies
        </Typography>

        {/* Customer Logos Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            marginBottom: 6,
          }}
        >
          {customers.map((customer) => (
            <Box
              key={customer.name}
              sx={{
                backgroundColor: "#FFF",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "120px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#999",
                }}
              >
                {customer.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Meet Our Customers Link */}
        <Box sx={{ textAlign: "center" }}>
          <Link
            href="#"
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#3B4EFF",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Meet our customers →
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
