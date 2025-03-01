import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

interface Productitem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const products: Productitem[] = [
  {
    id: 101,
    title: "Men's T-Shirt",
    description: "A cool and comfortable t-shirt for everyday wear.",
    price: 19.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
  {
    id: 102,
    title: "Men's Jeans",
    description: "Stylish denim jeans that go with anything.",
    price: 39.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
  {
    id: 103,
    title: "Men's Jacket",
    description: "Warm and stylish jacket for cold weather.",
    price: 59.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
  {
    id: 104,
    title: "Men's Sneakers",
    description: "Comfortable sneakers for all-day wear.",
    price: 49.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
  {
    id: 105,
    title: "Men's Hoodie",
    description: "Perfect hoodie for chilly evenings.",
    price: 29.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
  {
    id: 106,
    title: "Men's Hoodie",
    description: "Perfect hoodie for chilly evenings.",
    price: 29.99,
    image:
      "https://thehouseofrare.com/cdn/shop/files/turino-mens-polo-brown27624_fca36cc2-a1af-47f6-a603-621e511c352d_1000x.jpg?v=1719484022",
  },
];

const MensWear: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const handleAddToCart = (product: Productitem) => {
    dispatch(addToCart({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      image: product.image, 
      quantity: 1 
    }));
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "cursive", color: "#0e2138", fontWeight: "bold" }}
      >
        Men Wear Collection
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="210"
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography variant="h6" color="#0e2138">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="#0e2138">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="#0e2138" fontWeight="bold">
                  ${product.price.toFixed(2)}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link to={`/product/${product.id}`}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#2E5077",
                        margin: "1rem",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      View Details
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleAddToCart(product)} 
                    sx={{
                      backgroundColor: "#2E5077",
                      margin: "1rem",
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Add To Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MensWear;
