import { Box, Typography, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import React from 'react';

interface offers {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText:string;
  buttonLink:string
}
const offers:offers[] = [
  {
    id: "1",
     image: "https://t4.ftcdn.net/jpg/02/88/65/45/360_F_288654557_h0hiDv7cdEkdfKOIeF9wrSk4P6YH4ZMc.jpg",
    title: "Limited Time Offer!",
    description: "Get up to 50% off on all products. Hurry, the sale ends soon!",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: "2",
     image: "https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg",
    title: "Exclusive Deals Just for You",
    description: "Exclusive offers for our loyal customers. Don't miss out!",
    buttonText: "Learn More",
    buttonLink: "/offers",
  },
  {
    id: "3",
    image: "https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg",
    title: "Check Out Our New Arrivals!",
    description: "Fresh products just in! Browse the latest items and discover something new.",
    buttonText: "Explore Now",
    buttonLink: "/new-arrivals",
  },
];


const Slider: React.FC = () => {
  
  return (
    <>
    <Box sx={{backgroundColor:"#2E5077", marginBottom:"1rem"}}>
    <Typography
    sx={{ fontSize: "2rem", fontWeight: "bold", marginTop: 5, fontFamily:"cursive", color:"white"}}
  >
   Sale is Live Now
  </Typography>
    </Box>
    <Box sx={{ maxWidth: "100%", marginTop: "1rem" }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000}>
        {offers.map((offer) => (
          <Box key={offer.id}>
            <img src={offer.image} alt={offer.title} style={{ width: "100%", height: "30rem" }} />
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color:"#0e2138", fontFamily:"cursive" }}>
                {offer.title}
              </Typography>
              <Typography variant="h5" sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", marginTop:"1rem"}}>
                {offer.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{backgroundColor:"#2E5077", fontSize:"1.2rem",margin:"2rem", color:"white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
              >
                {offer.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
    </>
  );
}

export default Slider;
