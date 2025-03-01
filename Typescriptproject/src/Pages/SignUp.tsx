import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const handleEmailchange = (e:React.ChangeEvent<HTMLInputElement>) => {
   setEmail(e.target.value);
  }

  const handleSubmit = () => {
    setErr("");

    if (!username || !password || !email) {
      setErr("Required all fields.");
      return;
    } else if  (username && email && password) {
        navigate("/login");
    } else {
        setErr("Invalid username or password.");
    }

   
  };


  return (
    <Container maxWidth={"xs"}>
      <Box mt={5} mb={5}>
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
            Sign Up
          </Typography>
          {err && (
            <Typography color="error" align="center" mb={2}>
              {err}
            </Typography>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={handleUsernameChange}
                label="Username"
                type="text"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={handleEmailchange}
                label="email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" value={password} onChange={handlePasswordChange}fullWidth />
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
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUp;
