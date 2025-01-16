import React from 'react';
import { Container, Typography, Box, Divider, Paper, Link } from '@mui/material';
import Layout from '../Layout/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Paper sx={{ padding: 3, backgroundColor: '#1E3A8A',color:'white',textAlign:'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 3 }} color="primary">
            Terms and Conditions
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            By using the World Info App (referred to as "the App"), you agree to comply with and be bound by the following terms and conditions.
            Please review the following terms carefully. If you do not agree to these terms, you must not use this App.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            By accessing or using the App, you agree to be bound by these terms and all applicable laws and regulations.
            If you do not agree with any part of the terms, you are prohibited from using the App.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            2. User Registration
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            To access certain features of the App, you may need to register for an account. You agree to provide accurate, complete, and up-to-date information when registering.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            3. Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Your privacy is important to us. Please refer to our <Link href="/privacy-policy" color="primary">Privacy Policy</Link> for details about how we collect, use, and protect your personal information.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            4. License to Use the App
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial use only. This license does not permit you to copy, distribute, or alter the App in any way.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            5. Restrictions
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            You agree not to use the App for any unlawful purpose or any purpose that could damage, disable, or impair the App’s functionality.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            6. Termination
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We reserve the right to suspend or terminate your access to the App at any time, without notice, for conduct that violates these terms or for any other reason.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the App.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            8. Governing Law
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            These terms will be governed by and construed in accordance with the laws of the jurisdiction where we are located.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            9. Changes to Terms
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We reserve the right to update or modify these terms at any time. Any changes will be effective immediately upon posting the revised terms on the App. Your continued use of the App signifies your acceptance of those changes.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }} color="primary">
            10. Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            If you have any questions or concerns about these Terms and Conditions, please contact us at <Link top={'/contact'} color="primary">support@worldinfoapp.com</Link>.
          </Typography>
        </Paper>
      </Container>
    </Layout>
  );
};

export default TermsAndConditions;
