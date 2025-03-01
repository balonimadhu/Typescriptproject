import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectCartItems,
} from "../redux/cartSlice";

const AddToCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const navigate = useNavigate();

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

   
  return (
    <Box sx={{ padding: "2rem", marginBottom:"25rem"}}>
      <Typography variant="h4" gutterBottom sx={{fontFamily:"cursive",color: "#0e2138", fontWeight: "bold" }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} sx={{ display: "flex", marginBottom: "1rem", maxWidth:"30rem",minWidth:"25rem", height:"10rem" }}>
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
              <Typography variant="body2">${item.price.toFixed(2)}</Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                  padding: "1",
                }}
              >
                <Box sx={{display:"flex", justifyContent:"center"}}>
                  <Button onClick={() => handleDecrease(item.id)}>-</Button>
                  <Typography sx={{ display: "inline", margin: "0 1rem" }}>
                    {item.quantity}
                  </Typography>
                  <Button onClick={() => handleIncrease(item.id)}>+</Button>
                </Box>
                

                <Typography variant="h6">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
                <Button
                  onClick={() => handleRemove(item.id)}
                 
                >
                  Remove
                </Button>
               
               
              </Box>
            </CardContent>
          </Card>
        ))
      )}

      {cartItems.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h6">
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>{" "}
          {/* Total Price */}
          <Button
            variant="contained"
            onClick={handleCheckout}
            sx={{
              backgroundColor: "#2E5077",
              margin: "1rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
