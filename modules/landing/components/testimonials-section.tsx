"use client";

import { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Our orders and revenue both increased by 44%.",
    author: "Micah",
    title: "Founding Partner, Augurian",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Micah",
    rating: 5,
  },
  {
    id: 2,
    quote: "WeatherAds transformed our marketing strategy completely.",
    author: "Sarah",
    title: "Marketing Director, Tech Corp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    id: 3,
    quote: "The best moment marketing platform we've ever used.",
    author: "James",
    title: "CEO, Retail Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 5,
  },
  {
    id: 4,
    quote: "Conversion rates went through the roof with WeatherAds.",
    author: "Emma",
    title: "Growth Manager, E-commerce Plus",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5,
  },
  {
    id: 5,
    quote: "Finally, a platform that understands real-world targeting.",
    author: "David",
    title: "Head of Marketing, Global Brands",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Headline */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: 700,
            mb: 6,
          }}
        >
          Join{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", color: "#3B4EFF" }}
          >
            thousands
          </Box>{" "}
          of delighted customers
        </Typography>

        {/* Testimonial Carousel */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            position: "relative",
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: -60,
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              zIndex: 10,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Testimonial Card */}
          <Card
            sx={{
              flex: 1,
              backgroundColor: "#3B4EFF",
              color: "#fff",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Opening Quote */}
            <Typography
              sx={{
                fontSize: "80px",
                fontWeight: 700,
                opacity: 0.2,
                position: "absolute",
                top: 20,
                left: 30,
                lineHeight: 1,
              }}
            >
              &quot;
            </Typography>

            {/* Profile Image */}
            <Avatar
              src={currentTestimonial.image}
              sx={{
                width: 100,
                height: 100,
                mb: 3,
                border: "4px solid rgba(255, 255, 255, 0.5)",
              }}
            />

            {/* Rating */}
            <Rating
              value={currentTestimonial.rating}
              readOnly
              sx={{
                mb: 3,
                "& .MuiRating-icon": {
                  color: "#fff",
                },
              }}
            />

            {/* Quote */}
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontSize: "20px",
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              &quot;{currentTestimonial.quote}&quot;
            </Typography>

            {/* Author */}
            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
              {currentTestimonial.author}
            </Typography>
            <Typography sx={{ fontSize: "14px", opacity: 0.9 }}>
              {currentTestimonial.title}
            </Typography>

            {/* Closing Quote */}
            <Typography
              sx={{
                fontSize: "80px",
                fontWeight: 700,
                opacity: 0.2,
                position: "absolute",
                bottom: 20,
                right: 30,
                lineHeight: 1,
              }}
            >
              &quot;
            </Typography>
          </Card>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -60,
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              zIndex: 10,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Carousel Indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 4,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: index === currentIndex ? 32 : 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#3B4EFF" : "#d0d0d0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
