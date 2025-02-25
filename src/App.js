import React from "react";
import { AppBar, Box, Button, Card, CardContent, Container, Grid, Toolbar, Typography } from "@mui/material";
import { ShoppingCart, WaterDrop, CheckCircle, Whatshot, ThumbUp, Star } from "@mui/icons-material";

const App = () => {
  // Scroll to specific section when button is clicked
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <></>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }} onClick={() => scrollToSection("hero")}>
            HydraSync
          </Typography>
          <Button color="inherit" onClick={() => scrollToSection("features")}>Features</Button>
          <Button color="inherit" onClick={() => scrollToSection("testimonials")}>Testimonials</Button>
          <Button color="inherit" onClick={() => scrollToSection("shop")}>Shop</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <img src="/logo.webp" alt="HydraSync Logo" width="150px" style={{ marginBottom: "20px" }} />
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Stay Hydrated, Stay Healthy
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            HydraSync is a smart water bottle designed to track your hydration, remind you to drink water, and keep your beverage at the perfect temperature. Take control of your hydration today!
          </Typography>
          <Button variant="contained" size="large" startIcon={<ShoppingCart />} sx={{ mt: 2 }} onClick={() => scrollToSection("shop")}>
            Get Yours Now
          </Button>
        </Container>
      </Box>

      {/* Product Images */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <img src="/product1.jpg" alt="HydraSync Product 1" width="100%" />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">HydraSync Classic</Typography>
                <Typography variant="body2" color="textSecondary">Smart hydration with real-time tracking.</Typography>
                
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <img src="/product2.jpg" alt="HydraSync Product 2" width="100%" />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">HydraSync Pro</Typography>
                <Typography variant="body2" color="textSecondary">Advanced features with temperature control.</Typography>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Why Choose HydraSync?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: <WaterDrop color="primary" />, title: "Smart Hydration Reminders", text: "Never forget to drink water with intelligent alerts." },
            { icon: <CheckCircle color="secondary" />, title: "Real-Time Water Tracking", text: "Seamlessly monitor your daily water intake." },
            { icon: <Whatshot color="error" />, title: "Temperature Control", text: "Keeps beverages hot or cold for hours." },
            { icon: <ThumbUp color="success" />, title: "Eco-Friendly & BPA-Free", text: "Safe, sustainable, and built for daily use." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2 }}>
                <Box>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{feature.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container id="testimonials" sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { text: "HydraSync has completely changed the way I hydrate!", name: "Emily R." },
            { text: "I love how it tracks my water intake. So easy!", name: "Jake M." },
          ].map((review, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ p: 3, textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                </Box>
                <Typography variant="body1">{review.text}</Typography>
                <Typography variant="subtitle2" color="textSecondary" mt={2}>
                  — {review.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: "center", py: 3, backgroundColor: "#0d47a1", color: "white" }}>
        <Typography variant="body2">&copy; 2025 HydraSync. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default App;
