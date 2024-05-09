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
      backgroundImage: `url(${workspace})`, 
    }}
  >
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
      <Grid item md={15}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 12, md: 12 },
            pr: { md: 12 },
            textAlign: 'center', // Center align the text
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            About Talent For Startups
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

  <Grid container spacing={1}>
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

    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" gutterBottom>
              What we do
            </Typography>
            <Typography variant="body1" paragraph>
              At Talent for Startups, we are driven by a vision to democratize access to technology education across Africa.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded on the belief that talent knows no boundaries, we strive to empower aspiring entrepreneurs and professionals with the skills and knowledge needed to succeed in today's digital age.
            </Typography>
            <Typography variant="body1" paragraph>
              Our platform is committed to breaking down barriers to education by offering affordable and accessible courses in digital marketing, data analytics, software development, customer support, cloud computing, and business management.
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

    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              The Africa's economy
            </Typography>
            <Typography variant="body1" paragraph>
              With a focus on bridging the educational gap and fostering innovation, Talent for Startups aims to be a catalyst for economic growth and social change within African communities. We understand the transformative power of technology education and its potential to unlock opportunities for individuals, regardless of their background or financial resources. By providing practical, hands-on learning experiences and industry-relevant skills, we seek to empower the next generation of African leaders, innovators, and changemakers to thrive in the digital economy.
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

    <Grid item xs={12} md={14}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" gutterBottom>
              Our impact
            </Typography>
            <Typography variant="body1" paragraph>
              Community Support:
            </Typography>
            <Typography variant="body1" paragraph>
              Join a vibrant community of like-minded entrepreneurs who share your passion for innovation and growth. Connect with fellow members, ask questions, seek advice, and celebrate milestones together. Our community forums and networking events provide valuable opportunities to expand your professional network and forge meaningful partnerships.
            </Typography>
            <Typography variant="body1" paragraph>
              Stay Updated:
            </Typography>
            <Typography variant="body1" paragraph>
              Stay ahead of the curve with our regularly updated content covering the latest trends, technologies, and strategies shaping the startup ecosystem. Whether it's insights on emerging digital platforms, regulatory changes affecting startups, or tips for effective remote team management, we keep you informed and empowered to adapt to evolving circumstances.
            </Typography>
            <Typography variant="body1" paragraph>
              Start Learning Today:
            </Typography>
            <Typography variant="body1" paragraph>
              Ready to take your startup to the next level? Sign up for a free trial and start exploring our comprehensive library of courses and resources. With StartupSkillHub by your side, you have the knowledge, skills, and support you need to turn your startup dreams into reality.
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
