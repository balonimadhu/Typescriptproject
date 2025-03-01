import React from "react";
import { Container, Typography, Box, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Container sx={{maxWidth:"32rem", paddingTop:"3rem", paddingBottom:"3rem"}}>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "1rem", color:"#2E5077",fontFamily:"cursive"  }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center",color:"info.main" }}
        >
          Welcome to Shopping Us....
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold", color:"#2E5077",fontFamily:"cursive"  }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color:"info.main"}}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          cumque voluptas illum impedit. Doloremque corrupti dignissimos maiores
          praesentium ullam quasi qui, voluptatibus voluptates! Eligendi placeat
          vel rerum qui rem voluptate?
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold",color:"#2E5077",fontFamily:"cursive"  }}
        >
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: "2rem", textAlign: "center", boxShadow: 3}}>
              <img
                src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg"
                alt="Team Member"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h6">name</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                CEO & Founder
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "1rem", color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis aliquid illum harum modi quo dicta amet blanditiis
                corrupti neque! In dignissimos iure reiciendis natus ex fugiat
                repudiandae corrupti sed.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: "2rem", textAlign: "center", boxShadow: 3 }}>
              <img
                src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg"
                alt="Team Member"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h6">Name</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Head of Marketing
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "1rem", color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis aliquid illum harum modi quo dicta amet blanditiis
                corrupti neque! In dignissimos iure reiciendis natus ex fugiat
                repudiandae corrupti sed.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: "2rem", textAlign: "center", boxShadow: 3 }}>
              <img
                src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg"
                alt="Team Member"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h6">name</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
               Product Development
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "1rem", color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis aliquid illum harum modi quo dicta amet blanditiis
                corrupti neque! In dignissimos iure reiciendis natus ex fugiat
                repudiandae corrupti sed.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem", color:"#2E5077",fontFamily:"cursive"  }}
        >
          Join Us Today!
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "2rem", color:"info.main"}}
        >
          Discover our amazing products and enjoy a unique shopping experience
          with us. We are excited to have you as part of our community.
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: "1.1rem", fontWeight:"bold", padding: "0.75rem 2rem", backgroundColor: "#2E5077" }}
          >
            Start Shopping
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;
