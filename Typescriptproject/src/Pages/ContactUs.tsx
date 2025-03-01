
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError('All fields are required.');
      return;
    }

    setFormError(null);
    console.log('Form submitted:', formData);

    
    navigate('/');   
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 15, mb:28 }}>
      <Typography variant="h4" gutterBottom align="center" color='#0e2138' fontFamily='cursive' fontWeight='bold'>
      Get In Touch
      </Typography>

      <form onSubmit={handleSubmit}>
        {formError && (
          <Typography color="error" variant="body2" gutterBottom>
            {formError}
          </Typography>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                type="submit"
                variant="contained"
                
                size="large"
                sx={{ width: '50%', backgroundColor: "#2E5077", marginBottom:'5rem', }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactUsPage;

 