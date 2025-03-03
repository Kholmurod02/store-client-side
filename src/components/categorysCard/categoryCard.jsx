import { URL } from "@/config/config";
import { Card, Typography, Box } from "@mui/material";
import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        overflowX: "auto",
        p: 2,
        "&::-webkit-scrollbar": {
          height: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey.400",
          borderRadius: 2,
        },
      }}
    >
      {data.map((el) => (
        <Box key={el.id} sx={{ flexShrink: 0 }}>
          <Card
            sx={{
              width: 300,
              height:300,
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            {/* Category Image */}
            <Box
              sx={{
                width: 200,
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={URL + "/images/" + el.categoryImage}
                alt={el.categoryName}
                style={{ maxWidth: "300px", maxHeight: "200px", objectFit: "fill" }}
              />
            </Box>

            {/* Category Name */}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {el.categoryName}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryCard;