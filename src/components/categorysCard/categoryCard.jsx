import { URL } from "@/config/config";
import { Card, Typography, Box, Chip, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";

const CategoryCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <Box sx={{ position: "relative", my: 4 }}>
      {/* Section Title with Gradient Underline */}
      <Box sx={{ mb: 4, position: "relative", display: "inline-block" }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 700, 
            fontSize: "1.75rem",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: 0,
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #6366F1, #A855F7)",
              borderRadius: 4,
            }
          }}
        >
          Featured Categories
        </Typography>
      </Box>
      
      {/* Card Controls */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        mb: 2,
        gap: 1
      }}>
        <IconButton 
          aria-label="scroll left" 
          sx={{ 
            bgcolor: "background.paper", 
            boxShadow: 1,
            "&:hover": { 
              bgcolor: "background.paper", 
              boxShadow: 3
            } 
          }}
          onClick={() => {
            const container = document.getElementById('category-scroll');
            if (container) container.scrollLeft -= 320;
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </IconButton>
        <IconButton 
          aria-label="scroll right" 
          sx={{ 
            bgcolor: "background.paper", 
            boxShadow: 1,
            "&:hover": { 
              bgcolor: "background.paper", 
              boxShadow: 3
            } 
          }}
          onClick={() => {
            const container = document.getElementById('category-scroll');
            if (container) container.scrollLeft += 320;
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </IconButton>
      </Box>
      
      {/* Cards Container */}
      <Box
        id="category-scroll"
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          py: 2,
          px: 1,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "grey.300",
            borderRadius: 2,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "grey.100",
            borderRadius: 2,
          }
        }}
      >
        {data.map((el, index) => (
          <Box 
            key={el.id} 
            sx={{ 
              flexShrink: 0,
              position: "relative"
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Card
              sx={{
                width: 300,
                height: 320,
                borderRadius: 3,
                p: 0, // Remove padding to allow image to take full width
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "all 0.4s ease",
                boxShadow: activeIndex === index ? 
                  "0 10px 25px -5px rgba(99, 102, 241, 0.4)" : 
                  "0 4px 12px rgba(0,0,0,0.08)",
                transform: activeIndex === index ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                "&:hover": {
                  cursor: "pointer"
                }
              }}
            >
              {/* Category Image Container */}
              <Box
                sx={{
                  position: "relative",
                  height: 230,
                  width: "100%",
                  overflow: "hidden"
                }}
              >
                {/* Indicator Badge */}
                <Chip
                  label={`${Math.floor(Math.random() * 50) + 10} Items`}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(4px)",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    transition: "all 0.3s ease",
                    transform: activeIndex === index ? "scale(1.1)" : "scale(1)"
                  }}
                />
                
                {/* Category Image with Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "40%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                      opacity: activeIndex === index ? 1 : 0.7,
                      transition: "opacity 0.3s ease"
                    }
                  }}
                >
                  <img
                    src={URL + "/images/" + el.categoryImage}
                    alt={el.categoryName}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                      transform: activeIndex === index ? "scale(1.1)" : "scale(1)"
                    }}
                  />
                </Box>
              </Box>

              {/* Content Section */}
              <Box 
                sx={{ 
                  p: 2.5,
                  pt: 2,
                  textAlign: "left",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative"
                }}
              >
                {/* Decorative Element */}
                <Box 
                  sx={{ 
                    position: "absolute",
                    top: -12,
                    left: 20,
                    width: 40,
                    height: 3,
                    backgroundColor: activeIndex === index ? "#6366F1" : "#A855F7",
                    borderRadius: 4,
                    transition: "all 0.4s ease",
                    transform: activeIndex === index ? "scaleX(1.5)" : "scaleX(1)",
                    opacity: activeIndex === index ? 1 : 0.7
                  }}
                />
                
                <Box>
                  {/* Category Name */}
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      mb: 0.5,
                      color: "text.primary"
                    }}
                  >
                    {el.categoryName}
                  </Typography>
                  
                  {/* Optional subcategories text */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "text.secondary",
                      fontSize: "0.875rem",
                      opacity: activeIndex === index ? 1 : 0.8,
                      transform: activeIndex === index ? "translateY(0)" : "translateY(2px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Discover our exclusive collection
                  </Typography>
                </Box>
                
                {/* Browse Now with Arrow */}
                <Box 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center",
                    mt: 1.5,
                    color: activeIndex === index ? "#6366F1" : "text.secondary",
                    transition: "all 0.3s ease"
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontSize: "0.85rem", 
                      fontWeight: 600,
                      mr: 1
                    }}
                  >
                    Browse Now
                  </Typography>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ 
                      transition: "transform 0.3s ease",
                      transform: activeIndex === index ? "translateX(4px)" : "translateX(0)"
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Box>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
      
      {/* Scroll Indicator */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          mt: 3,
          gap: 0.8
        }}
      >
        {Array.from({ length: Math.min(5, data.length) }).map((_, index) => (
          <Box 
            key={index}
            sx={{ 
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: index === 0 ? "primary.main" : "grey.300",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.light",
                transform: "scale(1.2)"
              }
            }}
            onClick={() => {
              const container = document.getElementById('category-scroll');
              if (container) container.scrollLeft = index * 320;
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryCard;