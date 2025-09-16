import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl, Typography, Grid, Box, Paper, Divider } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; 
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const SellersFunnelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    budget: '',
    downPayment: '',
    preApproved: '',
    timeFrame: '',
    propertyType: '',
    preferredAreas: '',
    mustHaves: '',
    dealBreakers: '',
    currentHousing: '',
    movingReason: '',
    soleDecisionMaker: '',
    isRealtor: '',
    firstTimeBuyer: '',
    investmentProperty: '',
    additionalNotes: ''
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
      // Save to Firebase
      await addDoc(collection(db, 'buyersForms'), {
        ...formData,
        submittedAt: new Date(),
        timestamp: Date.now()
      });
      console.log('Document written successfully');

      // Send email notification
      await sendEmailNotification(formData);
      
      window.alert('Your form has been successfully submitted! You will now be redirected.');
      window.location.href = 'https://ericnans.sandiegoproperties4sale.com/';
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const sendEmailNotification = async (data) => {
    try {
      // EmailJS configuration
      const serviceID = 'service_zcfgxzj';
      const templateID = 'template_nfcv9ki';
      const publicKey = 'TLCLX4VF-ATeqO5z4';

      const templateParams = {
        to_email: 'ericsdrealestate@gmail.com',
        from_name: data.name || 'Unknown',
        from_email: data.email || 'No email provided',
        phone: data.number || 'No phone provided',
        budget: data.budget || 'Not specified',
        down_payment: data.downPayment || 'Not specified',
        pre_approved: data.preApproved || 'Not specified',
        time_frame: data.timeFrame || 'Not specified',
        property_type: data.propertyType || 'Not specified',
        preferred_areas: data.preferredAreas || 'Not specified',
        must_haves: data.mustHaves || 'Not specified',
        deal_breakers: data.dealBreakers || 'Not specified',
        current_housing: data.currentHousing || 'Not specified',
        moving_reason: data.movingReason || 'Not specified',
        sole_decision_maker: data.soleDecisionMaker || 'Not specified',
        is_realtor: data.isRealtor || 'Not specified',
        first_time_buyer: data.firstTimeBuyer || 'Not specified',
        investment_property: data.investmentProperty || 'Not specified',
        additional_notes: data.additionalNotes || 'Not specified',
        submission_date: new Date().toLocaleString(),
        message: `
New Buyer Inquiry from Sell State Next Gen Realty Form

PERSONAL INFORMATION:
Name: ${data.name || 'Not provided'}
Phone: ${data.number || 'Not provided'}
Email: ${data.email || 'Not provided'}

BUYING DETAILS:
Budget: ${data.budget || 'Not specified'}
Down Payment: ${data.downPayment || 'Not specified'}
Pre-Approved: ${data.preApproved || 'Not specified'}
Time Frame: ${data.timeFrame || 'Not specified'}
Property Type: ${data.propertyType || 'Not specified'}
Preferred Areas: ${data.preferredAreas || 'Not specified'}
Must Haves: ${data.mustHaves || 'Not specified'}
Deal Breakers: ${data.dealBreakers || 'Not specified'}
Current Housing: ${data.currentHousing || 'Not specified'}
Moving Reason: ${data.movingReason || 'Not specified'}
Sole Decision Maker: ${data.soleDecisionMaker || 'Not specified'}
Is Realtor: ${data.isRealtor || 'Not specified'}
First Time Buyer: ${data.firstTimeBuyer || 'Not specified'}
Investment Property: ${data.investmentProperty || 'Not specified'}
Additional Notes: ${data.additionalNotes || 'Not specified'}

Submitted on: ${new Date().toLocaleString()}
        `
      };

      // Debug: Log the data being sent
      console.log('Form data being sent:', data);
      console.log('Template parameters:', templateParams);
      
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);
      
      // Send email
      await emailjs.send(serviceID, templateID, templateParams);
      console.log('Email sent successfully');
      
    } catch (error) {
      console.error('Error sending email notification:', error);
      // Don't throw error to prevent form submission failure
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
          Sell State Next Gen Realty
        </Typography>
        <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 2  }}>
          San Diego
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#9ca3af' }}>
          Please fill out the form and Sell State will contact you within a couple business days to help you find your perfect home.
        </Typography>

        {/* Service Information */}
        <Box sx={{ mb: 4, p: 3, backgroundColor: '#374151', borderRadius: '0.5rem', border: '1px solid #4b5563' }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#ffffff', fontWeight: 'bold' }}>
           Buying?
         </Typography>
         <Typography variant="body2" sx={{ mb: 2, color: '#d1d5db', lineHeight: 1.6 }}>
           Work with me for just <strong style={{ color: '#4f46e5' }}>1.5%</strong> on the buy side. If the seller offers more than 1.5% in buyer's agent commission, any excess can be credited back to you at closing (subject to lender approval).
         </Typography>
         <Typography variant="body2" sx={{ mb: 3, color: '#9ca3af', fontSize: '0.875rem', fontStyle: 'italic' }}>
           (Credits may be applied toward closing costs or as a reduction in purchase price, depending on lender and escrow requirements.)
         </Typography>

          <Typography variant="h6" sx={{ mb: 2, color: '#ffffff', fontWeight: 'bold' }}>
            Experience Matters.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: '#d1d5db', lineHeight: 1.6 }}>
            We have extensive experience helping clients with:
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, color: '#d1d5db' }}>
              🏠 Single-Family Homes
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#d1d5db' }}>
              🏢 Multi-Family Properties
            </Typography>
            <Typography variant="body2" sx={{ mb: 0, color: '#d1d5db' }}>
              🏬 Commercial Real Estate
            </Typography>
          </Box>
        </Box>
     
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

              

              {/* Buying Info */}
              <Grid item xs={12}>
                <Divider sx={{ borderColor: '#9ca3af', my: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>Buying Information</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="What is your Budget Range?"
                  fullWidth
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder="e.g., $500,000 - $750,000"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Down Payment Amount"
                  fullWidth
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., $100,000 or 20%"
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                  Are you pre-approved for a loan?
                </Typography>
                <RadioGroup name="preApproved" value={formData.preApproved} onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="Working on it" control={<Radio sx={{ color: '#4f46e5' }} />} label="Working on it" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="What is your ideal timeline to buy?"
                  fullWidth
                  name="timeFrame"
                  value={formData.timeFrame}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., 3-6 months, ASAP, etc."
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: '#9ca3af' }}>Property Type</InputLabel>
                  <Select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#374151', color: '#ffffff' }}
                  >
                    <MenuItem value="Single Family">Single Family Home</MenuItem>
                    <MenuItem value="Condo">Condo/Townhouse</MenuItem>
                    <MenuItem value="Multi-Family">Multi-Family (2-4 units)</MenuItem>
                    <MenuItem value="Commercial">Commercial Property</MenuItem>
                    <MenuItem value="Land">Land/Lot</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                  Is this an investment property?
                </Typography>
                <RadioGroup name="investmentProperty" value={formData.investmentProperty} onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Preferred Areas/Neighborhoods"
                  fullWidth
                  name="preferredAreas"
                  value={formData.preferredAreas}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., La Jolla, Del Mar, Encinitas, etc."
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

              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: '#ffffff', mb: 1 }}>
                  Are you a first-time homebuyer?
                </Typography>
                <RadioGroup name="firstTimeBuyer" value={formData.firstTimeBuyer} onChange={handleChange} row>
                  <FormControlLabel value="Yes" control={<Radio sx={{ color: '#4f46e5' }} />} label="Yes" sx={{ color: '#ffffff' }} />
                  <FormControlLabel value="No" control={<Radio sx={{ color: '#4f46e5' }} />} label="No" sx={{ color: '#ffffff' }} />
                </RadioGroup>
              </Grid>

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

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Current Housing Situation"
                  fullWidth
                  name="currentHousing"
                  value={formData.currentHousing}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., Renting, Living with family, Own current home, etc."
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
              <Divider sx={{ borderColor: '#9ca3af', my: 2 }} />

                <Typography variant="h6" sx={{ mb: 1 }}>Property Preferences</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Must-Have Features"
                  fullWidth
                  name="mustHaves"
                  value={formData.mustHaves}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., Pool, Garage, Updated kitchen, Large backyard, etc."
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Deal Breakers"
                  fullWidth
                  name="dealBreakers"
                  value={formData.dealBreakers}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., No HOA, Must have parking, No busy streets, etc."
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Reason for Moving"
                  fullWidth
                  name="movingReason"
                  value={formData.movingReason}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., Growing family, Job relocation, Investment opportunity, etc."
                  InputProps={{ sx: { backgroundColor: '#374151', color: '#ffffff' } }}
                  InputLabelProps={{ sx: { color: '#9ca3af' } }}
                />
              </Grid>

              <Grid item xs={12}>
              <TextField
                label="Additional Notes or Special Requirements"
                fullWidth
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                variant="outlined"
                placeholder="Any other important details about your home search..."
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
