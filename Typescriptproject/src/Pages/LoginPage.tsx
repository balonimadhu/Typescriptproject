import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";



const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[loggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setError("");

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (username === "admin" && password === "password") {
      localStorage.setItem("LoggedUser", JSON.stringify({username}))
      setIsLoggedIn(true)
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };


  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Container maxWidth={"xs"}>
      <Box mt={5} mb={60}>
        <Paper sx={{ padding: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{
              fontFamily: "cursive",
              color: "#0e2138",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Login
          </Typography>

          {error && (
            <Typography color="error" align="center" mb={2}>
              {error}
            </Typography>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#2E5077",
                  margin: "1rem",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  marginRight: "2rem",
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleClick}
                sx={{
                  backgroundColor: "#2E5077",
                  margin: "1rem",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
