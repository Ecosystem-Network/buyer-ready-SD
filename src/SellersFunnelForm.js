import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Checkbox, Select, MenuItem, InputLabel, FormControl, Typography, Grid, Box, Paper, Divider } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; 
import Footer from './Footer';

const SellersFunnelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    email: '',
    thoughtOfSelling: '',
    proceedsOption: '',
    timeFrame: '',
    desiredPrice: '',
    soleDecisionMaker: false,
    ownershipDuration: '',
    isRealtor: false,
    roofAge: '',
    roofWarranty: '',
    lastPainted: '',
    waterHeaterAge: '',
    interiorImprovements: '',
    loanBalance: '',
    unitMix: '',
    unitRents:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'sellersForms'), formData);
      console.log('Document written successfully');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: 'url(/bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      py: 5,
    }}>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#1f2937',
          color: '#ffffff',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          borderRadius: '0.75rem',
          padding: 4,
          maxWidth: { xs: '90%', sm: 800 },
          width: '100%',
          mx: { xs: 2, sm: 0 }, 
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          Offer Ready
        </Typography>
        <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 2  }}>
          San Diego
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#9ca3af' }}>
          Please fill out the form and South Coast Commercial will provide a Brokers Opinion of Value within a couple business days.
        </Typography>
     
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Personal Info */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 1 }}>Personal Information</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              

              {/* Property Info */}
              <Grid item xs={12}>
                <Divider sx={{ borderColor: '#9ca3af', my: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>Property Information</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Address"
                  fullWidth
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                  Have you thought about selling?
                </Typography>
                <RadioGroup name="thoughtOfSelling" value={formData.thoughtOfSelling} onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: '#9ca3af' }}>Proceeds Option</InputLabel>
                  <Select
                    name="proceedsOption"
                    value={formData.proceedsOption}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#374151', color: '#ffffff' }}
                  >
                    <MenuItem value="Cashout">Cashout</MenuItem>
                    <MenuItem value="Exchange">Exchange</MenuItem>
                    <MenuItem value="TIC">TIC</MenuItem>
                    <MenuItem value="NNN">NNN</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="What is your Desired Price?"
                  fullWidth
                  name="desiredPrice"
                  value={formData.desiredPrice}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="How Long Have you Owned the Property?"
                  fullWidth
                  name="ownershipDuration"
                  value={formData.ownershipDuration}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="What is Your Time Frame to Sell?"
                  fullWidth
                  name="timeFrame"
                  value={formData.timeFrame}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                  Are you the sole decision maker?
                </Typography>
                <RadioGroup name="soleDecisionMaker" value={formData.soleDecisionMaker} onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

              

              {/* <Grid item xs={12} sm={6}>
                <TextField
                  label="Are you a realtor or working with another realtor?"
                  fullWidth
                  name="isRealtor"
                  value={formData.isRealtor}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                Are you a realtor or working with another realtor?
                </Typography>
                <RadioGroup  name="isRealtor"
                  value={formData.isRealtor}
                  onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
              <Divider sx={{ borderColor: '#9ca3af', my: 2 }} />

                <Typography variant="h6" sx={{ mb: 1 }}>Property Features</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="How old is your Roof?"
                  fullWidth
                  name="roofAge"
                  value={formData.roofAge}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Is there a Roof Warranty/ if yes how long?"
                  fullWidth
                  name="roofWarranty"
                  value={formData.roofWarranty}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="When was it Last Painted?"
                  fullWidth
                  name="lastPainted"
                  value={formData.lastPainted}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="What is the Water Heaters Age?"
                  fullWidth
                  name="waterHeaterAge"
                  value={formData.waterHeaterAge}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Do You have a Remaining Loan Balance?"
                  fullWidth
                  name="loanBalance"
                  value={formData.loanBalance}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                label="What is the Unit Mix?"
                fullWidth
                name="unitMix"
                value={formData.unitMix}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                InputLabelProps={{ sx: { color: '#9ca3af' } }}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                label="What are the Unit Rents?"
                fullWidth
                name="unitRents"
                value={formData.unitRents}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                InputLabelProps={{ sx: { color: '#9ca3af' } }}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                label="Have you done any Interior Improvements?"
                fullWidth
                name="interiorImprovements"
                value={formData.interiorImprovements}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  sx: { 
                    backgroundColor: '#374151', 
                    color: '#ffffff', 
                    height: '100px' 
                  },
                  inputProps: {
                    style: {
                      height: '100px',
                      padding: '10px' 
                    }
                  }
                }}
                InputLabelProps={{ sx: { color: '#9ca3af' } }}
              />
              </Grid>
              <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#9ca3af' }}>
              Feel Free to Call Us: <strong>760-450-6090</strong> Monday-Friday 8am-5pm 
              </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <button className="button">
                Submit
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Box>

            </Grid>
            </Grid>
          </form>
      </Paper>
    </Box>
    <Footer/>
    </>
  );
};

export default SellersFunnelForm;