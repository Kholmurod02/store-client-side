import { URL } from "@/config/config";
import { useProducts } from "@/store/getStores";
import { Button, Card, Typography, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard = ({ data }) => {
  const { addToCart } = useProducts();

  return (
    <Box

      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        alignItems: "center", justifyContent: "center"
      }}
    >
      {data.length > 0 ?  data?.map((el) => (
        <Card
          key={el.id}
          sx={{
            width: 300,
            p: 2,
            position: "relative",
            "&:hover": {
              boxShadow: 6,
              "& .add-to-cart-button": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Discount Badge */}
          {el.discountPrice && (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                bgcolor: "error.main",
                color: "white",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              -{Math.round(
                ((el.price - el.discountPrice) / el.price) * 100
              )
              }%
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
            }}
          >
            <IconButton
              sx={{
                bgcolor: "background.paper",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <Link to={`/infoPage/${el.id}`}>
              <IconButton
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { bgcolor: "action.hover" },
                }}
              >
                <VisibilityIcon fontSize="small" />
              </IconButton>
            </Link>
          </Box>

          {/* Product Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 180,
              mb: 2,
            }}
          >
            <img
              src={URL + "/images/" + el.image}
              alt={el.productName}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Add to Cart Button */}
          <Button
            onClick={() => addToCart(el.id)}
            className="add-to-cart-button"
            sx={{
              width: "100%",
              bgcolor: "black",
              color: "white",
              py: 1,
              opacity: 0,
              transform: "translateY(10px)",
              transition: "opacity 0.3s, transform 0.3s",
              "&:hover": {
                bgcolor: "grey.900",
              },
            }}
          >
            Add to Cart
          </Button>

          {/* Product Details */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {el.productName}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="h6" color="error.main" sx={{ fontWeight: 600 }}>
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

          </Box>
        </Card>
      )):null}
    </Box>
  );
};

export default ProductCard;