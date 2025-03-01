import React from "react";
import { Box, Typography, Grid, Button, Avatar } from "@mui/material";

import womenPic from "../img/womenPic.png";
import menPic from "../img/menPic.png";
import kidsPic from "../img/kidsPic.png";
import Slider from "../components/Slider";
import classes from "../styles/homePage.module.css";
import Product from "../Apifetch/Product";
// import { useNavigate } from "react-router-dom";


const HomePage: React.FC = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/Product')
  // }
  return (
    <>
      <Box className={classes.box}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ color: "#0e2138", fontFamily: "cursive" }}
        >
          Welcome to Our Website!
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
          Discover the best fashion items for you. Explore our collection of
          trendy and stylish clothing.
        </Typography>
       
         <Button
          sx={{
            backgroundColor: "#2E5077",
            fontSize: "1.2rem",
            margin: "2rem",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          // onClick={handleClick}
        >
          Shop Now
        </Button>
      
        

        <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                Women Wear
              </Typography>
              <Avatar
                alt="women"
                src={womenPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                {" "}
                Men Wear
              </Typography>
              <Avatar
                alt="men"
                src={menPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "1rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                Kid Wear
              </Typography>
              <Avatar
                alt="kids"
                src={kidsPic}
                sx={{ width: 80, height: 80, marginLeft: "3rem" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Product />
      <Slider />
    </>
  );
};

export default HomePage;
