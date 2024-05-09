import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import workspace from './images/T4SU workspace.jpg'; // Import the workspace image

function Home() {
  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 12,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${workspace})`, // Use the workspace image as the background
        }}
      >
        {/* Increase the priority of the hero background image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={12}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 12 },
                pr: { md: 0 },
                textAlign: 'center', // Center align the text
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Welcome to Talent for Startups
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                This is a one-stop destination for startups to acquire essential digital skills and business management knowledge. Whether you're just launching your venture or seeking to scale it up, we have the resources you need to succeed in today's competitive landscape.
              </Typography>
              <Link variant="subtitle1" href="#">
                Kickstart your journey with us!
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5" gutterBottom>
                  Courses for Every Stage
                </Typography>
                <Typography variant="body1" paragraph>
                  Our platform offers a diverse range of courses tailored to suit startups at various stages of their journey. From foundational courses covering digital marketing, website development, and social media management to advanced modules on financial planning, leadership, and growth hacking, we have something for everyone.
                </Typography>
                <Typography variant="body1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={workspace} // Use the workspace image
                alt="other people"
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={12}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5" gutterBottom>
                  Learn from Industry Experts
                </Typography>
                <Typography variant="body1" paragraph>
                  Learn from industry experts and seasoned entrepreneurs who have successfully navigated the challenges of building and growing startups. Our instructors bring real-world experience and practical insights to the table, ensuring that you receive high-quality education that is directly applicable to your business.
                </Typography>
                <Typography variant="body1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={workspace} // Use the workspace image
                alt="another people"
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
