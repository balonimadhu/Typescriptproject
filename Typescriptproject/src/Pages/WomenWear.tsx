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
import { useNavigate } from "react-router-dom";
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
    id: 121,
    title: "Women's Dress",
    description: "Elegant dress perfect for any occasion.",
    price: 49.8,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH2uIVcOQMeZ6TaLlJAi8V2I_SMjTSHzIcMFE3ktiy9Nzrr8ZMGwACzQkbL37ooP89RpNZQzeJx5j-clSAUIiNZCRc7KKJ-pCg5OFMfMDY9OpjIEM2UkkN-A",
  },
  {
    id: 122,
    title: "Women's Top",
    description: "A casual top for everyday wear.",
    price: 29.6,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH2uIVcOQMeZ6TaLlJAi8V2I_SMjTSHzIcMFE3ktiy9Nzrr8ZMGwACzQkbL37ooP89RpNZQzeJx5j-clSAUIiNZCRc7KKJ-pCg5OFMfMDY9OpjIEM2UkkN-A",
  },
  {
    id: 123,
    title: "Women's Skirt",
    description: "A stylish skirt for any event.",
    price: 39.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH2uIVcOQMeZ6TaLlJAi8V2I_SMjTSHzIcMFE3ktiy9Nzrr8ZMGwACzQkbL37ooP89RpNZQzeJx5j-clSAUIiNZCRc7KKJ-pCg5OFMfMDY9OpjIEM2UkkN-A",
  },
  {
    id: 124,
    title: "Women's Heels",
    description: "Perfect heels for an elegant look.",
    price: 59.9,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzT_72DNU-dyDhWilHMCdA3kojIVl7Qsk4hZiatX1MhL_DblLpPA-lTtW5jzD0Ws75BgmcFQXhXi0lFexKhgaqphA3FrywpAqS9Lj_MiqLt_GziHzWSGzB",
  },
  {
    id: 125,
    title: "Women's Heels",
    description: "Perfect heels for an elegant look.",
    price: 59.9,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH2uIVcOQMeZ6TaLlJAi8V2I_SMjTSHzIcMFE3ktiy9Nzrr8ZMGwACzQkbL37ooP89RpNZQzeJx5j-clSAUIiNZCRc7KKJ-pCg5OFMfMDY9OpjIEM2UkkN-A",
  },
  {
    id: 126,
    title: "Women's Heels",
    description: "Perfect heels for an elegant look.",
    price: 59.9,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH2uIVcOQMeZ6TaLlJAi8V2I_SMjTSHzIcMFE3ktiy9Nzrr8ZMGwACzQkbL37ooP89RpNZQzeJx5j-clSAUIiNZCRc7KKJ-pCg5OFMfMDY9OpjIEM2UkkN-A",
  },
];

const WomensWearPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Productitem) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "cursive", color: "#0e2138", fontWeight: "bold" }}
      >
        Women Wear Collection
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="230"
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
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#2E5077",

                      margin: "1rem",
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </Button>
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

export default WomensWearPage;
