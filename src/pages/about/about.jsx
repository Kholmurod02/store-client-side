"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Paper,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material"
import {
  ChevronRight,
  People as Users,
  ShoppingBag,
  EmojiEvents as Award,
  TrendingUp,
  LocalShipping as Truck,
  Headset as Headphones,
  Shield,
  Verified as Trust,
  Lightbulb as Innovation,
  Groups as Community,
  LocationOn as LocalFocus,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material"
import { motion } from "framer-motion"
import africans from '../../assets/africans.svg'
import img1 from '../../assets/img1.svg'

// Styled components
const GradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius * 3,
  overflow: "hidden",
  position: "relative",
}))

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.2,
  mixBlendMode: "overlay",
})

const TimelineConnector = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  height: "100%",
  width: 2,
  backgroundColor: theme.palette.divider,
}))

const TimelineDot = styled(Box)(({ theme, active }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: 24,
  height: 24,
  borderRadius: "50%",
  border: `4px solid ${theme.palette.background.paper}`,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[400],
  zIndex: 1,
}))

const MotionContainer = styled(motion.div)({
  width: "100%",
})

const About = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  // Stats data
  const stats = [
    {
      id: 1,
      icon: <Users fontSize="large" />,
      title: "10.5K",
      desc: "Active Sellers",
    },
    {
      id: 2,
      icon: <ShoppingBag fontSize="large" />,
      title: "300+",
      desc: "Trusted Brands",
      highlight: true,
    },
    {
      id: 3,
      icon: <Award fontSize="large" />,
      title: "3M+",
      desc: "Happy Customers",
    },
    {
      id: 4,
      icon: <TrendingUp fontSize="large" />,
      title: "1M+",
      desc: "Products Available",
    },
  ]

  // Team members data
  const team = [
    {
      id: 1,
      image: img1,
      title: "Tom Cruise",
      desc: "Product Designer",
      social: [<Twitter/>, <LinkedIn/>, <Instagram/>],
    },
    {
      id: 2,
      image: img1,
      title: "Emma Watson",
      desc: "Marketing Director",
      social: ["twitter", "linkedin", "instagram"],
    },
    {
      id: 3,
      image: img1,
      title: "John Smith",
      desc: "Lead Developer",
      social: ["twitter", "linkedin", "instagram"],
    },
  ]

  // Services data
  const services = [
    {
      id: 1,
      icon: <Truck fontSize="large" />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <Headphones fontSize="large" />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <Shield fontSize="large" />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ]

  // Values data
  const values = [
    {
      id: 1,
      icon: <Trust />,
      title: "Trust & Transparency",
      desc: "We believe in building trust through transparent business practices and honest communication with our customers and sellers.",
    },
    {
      id: 2,
      icon: <Innovation />,
      title: "Innovation",
      desc: "We continuously innovate to improve the shopping experience, introducing new features and technologies that benefit both buyers and sellers.",
    },
    {
      id: 3,
      icon: <Community />,
      title: "Community",
      desc: "We foster a community of buyers and sellers, supporting local businesses and creating economic opportunities across South Asia.",
    },
    {
      id: 4,
      icon: <LocalFocus />,
      title: "Local Focus",
      desc: "While we have a global outlook, we maintain a strong focus on local needs, preferences, and cultural nuances in each market we serve.",
    },
  ]

  // Timeline data
  const timeline = [
    { year: 2015, title: "Founded", description: "Exclusive was launched in South Asia" },
    { year: 2018, title: "Expansion", description: "Reached 1,000 sellers and 50 brands" },
    { year: 2020, title: "Growth", description: "Expanded to 5,000 sellers and 150 brands" },
    { year: 2023, title: "Today", description: "10,500 sellers, 300 brands, 3M customers" },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <GradientBox sx={{ mb: 12 }}>
        <ImageOverlay sx={{ backgroundImage: "url(/placeholder.svg?height=800&width=1200)" }} />
        <Grid container spacing={4} sx={{ position: "relative", p: { xs: 4, md: 6, lg: 8 } }} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            component={MotionContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Chip
                label="Est. 2015"
                color="primary"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  alignSelf: "flex-start",
                }}
              />
              <Typography variant="h2" component="h1" fontWeight="bold">
                Our Story
              </Typography>
              <Typography variant="h6" color="rgba(255, 255, 255, 0.8)">
                Transforming online shopping in South Asia since 2015, with a commitment to quality, convenience, and
                customer satisfaction.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ChevronRight />}
                sx={{
                  borderRadius: 50,
                  alignSelf: "flex-start",
                  px: 3,
                  py: 1.5,
                }}
              >
                Our Mission
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            component={MotionContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${africans})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </GradientBox>

      {/* About Content */}
      <Box sx={{ mb: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            component={MotionContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "1/1",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${africans})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  p: 3,
                }}
              >
                <Typography variant="h6" color="white">
                  South Asia's Premier Marketplace
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            component={MotionContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="h3" fontWeight="bold">
                Our Journey
              </Typography>
              <Typography variant="body1" fontSize="1.125rem" color="text.secondary">
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence
                in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive
                has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Exclusive has more than 1 Million products to offer, growing at a very fast pace. We offer a diverse
                assortment in categories ranging from consumer electronics to fashion, home essentials, and more.
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Button variant="outlined" endIcon={<ChevronRight />} sx={{ borderRadius: 50 }}>
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Timeline Section */}
      {/* <Box sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Growth Timeline
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            From our humble beginnings to becoming South Asia's leading marketplace
          </Typography>
        </Box>

        <Box sx={{ position: "relative", minHeight: 600 }}>
          <TimelineConnector />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {timeline.map((item, index) => (
              <Box
                key={item.year}
                component={MotionContainer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  width: { xs: "100%", md: "50%" },
                  alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                  ml: index % 2 === 0 ? 0 : { xs: 0, md: "auto" },
                }}
              >
                <TimelineDot active={index === timeline.length - 1} />
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    width: { xs: "100%", md: "calc(100% - 40px)" },
                    ml: index % 2 === 0 ? 0 : { xs: 0, md: 5 },
                    mr: index % 2 === 0 ? { xs: 0, md: 5 } : 0,
                  }}
                >
                  <Chip label={item.year} color="primary" size="small" sx={{ mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Box> */}

      {/* Stats Section */}
      <Box sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Exclusive by Numbers
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Our growth and impact in the e-commerce industry
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={stat.id}
              component={MotionContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  bgcolor: stat.highlight ? "primary.main" : "background.paper",
                  color: stat.highlight ? "white" : "text.primary",
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: stat.highlight ? "rgba(255, 255, 255, 0.2)" : "primary.light",
                      color: stat.highlight ? "white" : "primary.main",
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography variant="h3" fontWeight="bold">
                    {stat.title}
                  </Typography>
                  <Typography variant="body1" color={stat.highlight ? "rgba(255, 255, 255, 0.8)" : "text.secondary"}>
                    {stat.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Meet Our Leadership
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            The talented individuals behind Exclusive's success
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={member.id}
              component={MotionContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 4, mb: 2 }}>
                <Box
                  sx={{
                    paddingTop: "133%", // 4:3 aspect ratio
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.5s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    p: 3,
                    transform: "translateY(100%)",
                    transition: "transform 0.3s",
                    ".MuiBox-root:hover &": {
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    {member.social.map((platform) => (
                      <Avatar
                        key={platform}
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            bgcolor: "white",
                          }}
                        />
                      </Avatar>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Values & Services Section */}
      <Box sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Commitment to You
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            What sets Exclusive apart from other marketplaces
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
            <Tabs value={tabValue} onChange={handleTabChange} centered variant={isMobile ? "fullWidth" : "standard"}>
              <Tab label="Our Services" />
              <Tab label="Our Values" />
            </Tabs>
          </Box>

          {tabValue === 0 && (
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={service.id}
                  component={MotionContainer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: "100%" }}>
                    <CardContent
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: "primary.light",
                          color: "primary.main",
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Typography variant="h6" fontWeight="bold">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={value.id}
                  component={MotionContainer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: "100%" }}>
                    <CardContent sx={{ p: 3, display: "flex", alignItems: "flex-start", gap: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.main",
                        }}
                      >
                        {value.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.desc}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      {/* CTA Section */}
      {/* <GradientBox>
        <Grid container spacing={4} sx={{ p: { xs: 4, md: 6 } }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="h3" fontWeight="bold">
                Join the Exclusive Family
              </Typography>
              <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
                Whether you're a shopper looking for great deals or a seller wanting to reach millions of customers,
                Exclusive is the platform for you.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button variant="contained" color="secondary" sx={{ borderRadius: 50 }}>
                  Shop Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      bgcolor: "white",
                      color: "primary.main",
                      borderColor: "white",
                    },
                  }}
                >
                  Become a Seller
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: "url(/placeholder.svg?height=300&width=500)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </GradientBox> */}
    </Container>
  )
}

export default About

