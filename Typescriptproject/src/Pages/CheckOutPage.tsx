import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CheckOutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Review Your Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography variant="h6">Your cart is empty.</Typography>
          ) : (
            cartItems.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", marginBottom: "1rem" }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.image}
                  sx={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Shipping Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Zip Code"
              variant="outlined"
              fullWidth
              required
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Typography variant="h6">
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#2E5077",

                  margin: "1rem",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Submit Order
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckOutPage;
