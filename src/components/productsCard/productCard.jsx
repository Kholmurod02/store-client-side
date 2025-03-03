import { URL } from "@/config/config";
import { useProducts } from "@/store/getStores";
import { Button, Card, Typography, Box, IconButton, Stack, Chip, Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion } from "framer-motion";

const ProductCard = ({ data }) => {
  const { addToCart } = useProducts();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center", 
        justifyContent: "center"
      }}
    >
      {data?.length > 0 ? data.map((el) => (
        <Card
          key={el.id}
          component={motion.div}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 },
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          onMouseEnter={() => setHoveredCard(el.id)}
          onMouseLeave={() => setHoveredCard(null)}
          sx={{
            width: 300,
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
            backgroundColor: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            "&:hover": {
              "& .product-image": {
                transform: "scale(1.08)",
              },
              "& .add-to-cart-button": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Top Banner - New or Best Seller */}
          {el.isNew && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                bgcolor: "#2dd4bf",
                color: "white",
                px: 1,
                py: 0.5,
                textAlign: "center",
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              NEW ARRIVAL
            </Box>
          )}

          {/* Discount Badge */}
          {el.discountPrice && (
            <Box
              sx={{
                position: "absolute",
                top: el.isNew ? 40 : 10,
                left: 10,
                bgcolor: "error.main",
                color: "white",
                px: 1,
                py: 0.5,
                borderRadius: "4px 10px 10px 4px",
                fontSize: 12,
                fontWeight: "bold",
                zIndex: 2,
                boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              SAVE {Math.round(((el.price - el.discountPrice) / el.price) * 100)}%
            </Box>
          )}

          {/* Action Buttons (Favorite and View) */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              zIndex: 2,
            }}
          >
            <IconButton
              onClick={() => toggleFavorite(el.id)}
              sx={{
                bgcolor: "white",
                boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
                "&:hover": { 
                  bgcolor: "white",
                  transform: "scale(1.1)"
                },
              }}
            >
              {favorites[el.id] ? 
                <FavoriteIcon fontSize="small" color="error" /> : 
                <FavoriteBorderIcon fontSize="small" />
              }
            </IconButton>
            <Link to={`/infoPage/${el.id}`}>
              <IconButton
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  "&:hover": { 
                    bgcolor: "white",
                    transform: "scale(1.1)"
                  },
                }}
              >
                <VisibilityIcon fontSize="small" color="primary" />
              </IconButton>
            </Link>
          </Box>

          {/* Product Image Container */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: 200,
              backgroundColor: "#f9fafb",
            }}
          >
            <Box
              className="product-image"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                transition: "transform 0.5s ease",
              }}
            >
              <img
                src={URL + "/images/" + el.image}
                alt={el.productName}
                style={{ 
                  maxWidth: "85%", 
                  maxHeight: "85%", 
                  objectFit: "contain"
                }}
              />
            </Box>
          </Box>

          {/* Product Details */}
          <Box sx={{ p: 2 }}>
            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Rating value={el.rating || 4.5} readOnly size="small" precision={0.5} />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({el.reviewCount || "128"})
              </Typography>
            </Box>

            {/* Product Name */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 1, 
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                height: 50
              }}
            >
              {el.productName}
            </Typography>

            {/* Pricing */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="h6" color="error.main" sx={{ fontWeight: 700 }}>
                ${el.hasDiscount ? el.discountPrice : el.price}
              </Typography>
              {el.hasDiscount && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ${el.price}
                </Typography>
              )}
            </Stack>

            {/* Available Tags */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {el.freeShipping && (
                <Chip 
                  size="small" 
                  icon={<LocalShippingIcon fontSize="small" />} 
                  label="Free Shipping" 
                  color="primary" 
                  variant="outlined"
                />
              )}
              {el.stock <= 5 && el.stock > 0 && (
                <Chip 
                  size="small" 
                  label={`Only ${el.stock} left`} 
                  color="warning" 
                  variant="outlined"
                />
              )}
            </Box>

            {/* Add to Cart Button */}
            <Button
              onClick={() => addToCart(el.id)}
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              className="add-to-cart-button"
              sx={{
                width: "100%",
                bgcolor: "#000",
                color: "white",
                py: 1,
                borderRadius: 2,
                opacity: hoveredCard === el.id ? 1 : 0,
                transform: hoveredCard === el.id ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.3s, transform 0.3s, background-color 0.2s",
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Card>
      )) : null}
    </Box>
  );
};

export default ProductCard;