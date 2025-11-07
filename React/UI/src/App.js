

import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  CssBaseline,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
  Switch,
  FormControlLabel,
  Rating,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  CircularProgress,
  Backdrop,
  Fab,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// react-icons (social and extras)
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function a11yProps(index) {
  return {
    id: `section-tab-${index}`,
    "aria-controls": `section-tabpanel-${index}`,
  };
}

function tech() {
  // UI state
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDark);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#2563eb" }, // tailwind blue-600 vibe
          secondary: { main: "#7c3aed" }, // violet-600
        },
        shape: { borderRadius: 16 },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const [openDialog, setOpenDialog] = useState(false); // small dialog
  const [openBigDialog, setOpenBigDialog] = useState(false); // big dialog with form
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("This is a success message!");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [backdropOpen, setBackdropOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [budget, setBudget] = useState([2000, 15000]); // Slider range
  const [consent, setConsent] = useState(true); // Switch

  const steps = ["Consultation", "Design", "Development", "Launch"];
  const [activeStep, setActiveStep] = useState(1);

  // Handlers
  const handleStart = () => setOpenDialog(true);
  const handleMessage = (msg = "Saved successfully!", sev = "success") => {
    setSnackbarMsg(msg);
    setSnackbarSeverity(sev);
    setOpenSnackbar(true);
  };

  const fakeUpload = async () => {
    setBackdropOpen(true);
    setUploadProgress(0);
    for (let p = 0; p <= 100; p += 10) {
      // simulate work
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 120));
      setUploadProgress(p);
    }
    setBackdropOpen(false);
    handleMessage("Files uploaded!", "success");
  };

  // Small helper components
  const Section = ({ children }) => (
    <Box sx={{ mt: 8 }}>{children}</Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <BusinessIcon style={{ marginLeft: 8, marginRight: 8 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            TechSolutions
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, mr: 2 }}>
            <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
            <Button color="inherit" startIcon={<BuildIcon />}>Services</Button>
            <Button color="inherit" startIcon={<InfoIcon />}>About</Button>
            <Button color="inherit" startIcon={<ContactSupportIcon />}>Contact</Button>
          </Box>
          <Tooltip title={darkMode ? "Switch to light" : "Switch to dark"}>
            <IconButton color="inherit" onClick={() => setDarkMode((v) => !v)}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar>
              <BusinessIcon />
            </Avatar>
            <Box>
              <Typography fontWeight={700}>TechSolutions</Typography>
              <Typography variant="caption" color="text.secondary">
                Innovate • Build • Scale
              </Typography>
            </Box>
          </Box>
          <Divider />
          <List>
            {[
              { text: "Home", icon: <HomeIcon /> },
              { text: "Services", icon: <BuildIcon /> },
              { text: "About", icon: <InfoIcon /> },
              { text: "Contact", icon: <ContactSupportIcon /> },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <FormControlLabel
              control={<Switch checked={consent} onChange={(e) => setConsent(e.target.checked)} />}
              label="Email notifications"
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Budget Range
              </Typography>
              <Slider
                getAriaLabel={() => "Budget range"}
                value={budget}
                onChange={(_, val) => setBudget(val)}
                valueLabelDisplay="auto"
                min={1000}
                max={20000}
                step={500}
              />
              <Typography variant="caption" color="text.secondary">
                Current: ₹{budget[0]} – ₹{budget[1]}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Hero */}
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: { xs: 6, md: 10 } }}>
        <Chip label="Award‑winning agency" color="secondary" variant="outlined" sx={{ mb: 2 }} />
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Welcome to TechSolutions
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Innovative IT solutions for your business growth
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" size="large" sx={{ mr: 2 }} onClick={handleStart}>
            Get Started
          </Button>
          <Button variant="outlined" size="large" onClick={() => setOpenBigDialog(true)}>
            Request a Quote
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <LinearProgress variant="determinate" value={70} />
          <Typography variant="caption" color="text.secondary">
            70% of Q3 roadmap complete
          </Typography>
        </Box>
      </Container>

      {/* Tabs */}
      <Container sx={{ mt: 6 }}>
        <Paper sx={{ p: 2, borderRadius: 4 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" allowScrollButtonsMobile>
            <Tab label="Our Work" {...a11yProps(0)} />
            <Tab label="Services" {...a11yProps(1)} />
            <Tab label="About" {...a11yProps(2)} />
            <Tab label="Pricing" {...a11yProps(3)} />
            <Tab label="FAQs" {...a11yProps(4)} />
          </Tabs>
        </Paper>
      </Container>

      {/* Tab Panels */}
      <Container sx={{ mt: 4 }}>
        {tab === 0 && (
          <Section>
            <Typography variant="h4" align="center" gutterBottom>
              Our Work
            </Typography>
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
              <div>
                <img src="https://source.unsplash.com/1200x500/?technology" alt="Tech" />
                <p className="legend">Cutting‑edge Technology</p>
              </div>
              <div>
                <img src="https://source.unsplash.com/1200x500/?coding" alt="Coding" />
                <p className="legend">Powerful Code</p>
              </div>
              <div>
                <img src="https://source.unsplash.com/1200x500/?cloud" alt="Cloud" />
                <p className="legend">Cloud Infrastructure</p>
              </div>
            </Carousel>
          </Section>
        )}

        {tab === 1 && (
          <Section>
            <Typography variant="h4" align="center" gutterBottom>
              Our Services
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {[
                {
                  title: "Web Development",
                  desc: "Responsive, SEO‑friendly websites using modern stacks.",
                },
                {
                  title: "Mobile Apps",
                  desc: "Cross‑platform Flutter & React Native apps.",
                },
                {
                  title: "Cloud Solutions",
                  desc: "Secure, scalable infrastructure on AWS/GCP/Azure.",
                },
              ].map((s) => (
                <Grid key={s.title} item xs={12} md={4}>
                  <Card sx={{ minHeight: 200 }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {s.desc}
                      </Typography>
                      <List sx={{ mt: 1 }}>
                        {["Discovery call", "Proposal", "Delivery"].map((x) => (
                          <ListItem key={x} disableGutters>
                            <ListItemIcon>
                              <CheckCircleIcon color="success" />
                            </ListItemIcon>
                            <ListItemText primary={x} />
                          </ListItem>
                        ))}
                      </List>
                      <Button sx={{ mt: 1 }} size="small" endIcon={<ShareIcon />} onClick={() => handleMessage("Shared service details!", "info")}>
                        Share
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Process Stepper */}
            <Paper sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Our Process
              </Typography>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <Button disabled={activeStep === 0} onClick={() => setActiveStep((s) => s - 1)}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setActiveStep((s) => Math.min(s + 1, steps.length - 1))}
                >
                  Next
                </Button>
              </Box>
            </Paper>
          </Section>
        )}

        {tab === 2 && (
          <Section>
            <Typography variant="h4" align="center" gutterBottom>
              About Us
            </Typography>
            <Typography align="center" sx={{ maxWidth: 800, mx: "auto" }}>
              TechSolutions is a leading IT company delivering top‑notch digital solutions to clients worldwide.
              Our team of experts helps businesses innovate and grow using technology.
            </Typography>

            {/* Testimonials with Rating */}
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[1, 2, 3].map((i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar src={`https://i.pravatar.cc/150?img=${i}`} />
                      <Box>
                        <Typography fontWeight={600}>Client #{i}</Typography>
                        <Rating value={5 - (i % 2)} readOnly />
                      </Box>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                      “Amazing experience! The team delivered on time with fantastic quality.”
                    </Typography>
                    <Chip label="Verified" color="success" size="small" sx={{ mt: 1 }} />
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* FAQ Accordion */}
            <Paper sx={{ mt: 4 }}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>What industries do you serve?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    FinTech, AgriTech, E‑commerce, Healthcare, EdTech, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>What are your engagement models?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Fixed‑scope, time & materials, and dedicated team.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Section>
        )}

        {tab === 3 && (
          <Section>
            <Typography variant="h4" align="center" gutterBottom>
              Pricing
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="pricing table">
                <TableHead>
                  <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell align="right">Monthly</TableCell>
                    <TableCell align="right">Yearly</TableCell>
                    <TableCell align="right">Includes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { plan: "Starter", m: 99, y: 999, inc: "Basic support" },
                    { plan: "Growth", m: 199, y: 1999, inc: "Priority support" },
                    { plan: "Scale", m: 399, y: 3999, inc: "Dedicated manager" },
                  ].map((row) => (
                    <TableRow key={row.plan}>
                      <TableCell component="th" scope="row">
                        {row.plan}
                      </TableCell>
                      <TableCell align="right">${row.m}</TableCell>
                      <TableCell align="right">${row.y}</TableCell>
                      <TableCell align="right">{row.inc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button variant="contained" startIcon={<MonetizationOnIcon />} onClick={() => handleMessage("Selected Growth plan", "success")}>
                Choose Growth
              </Button>
              <Button variant="outlined" onClick={() => handleMessage("Applied coupon SPRING25", "info")}>
                Apply Coupon
              </Button>
            </Box>
          </Section>
        )}

        {tab === 4 && (
          <Section>
            <Typography variant="h4" align="center" gutterBottom>
              FAQs
            </Typography>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Do you offer maintenance?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Yes, we offer flexible AMC plans tailored to your needs.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can you migrate from legacy systems?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Absolutely. We create a phased migration with minimal downtime.</Typography>
              </AccordionDetails>
            </Accordion>
          </Section>
        )}
      </Container>

      {/* CTA / Actions */}
      <Container sx={{ mt: 6 }}>
        <Paper sx={{ p: 3, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Box>
            <Typography variant="h6">Ready to transform your idea?</Typography>
            <Typography variant="body2" color="text.secondary">
              Book a free consultation and get a tailored proposal.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" onClick={() => setOpenBigDialog(true)} startIcon={<CloudUploadIcon />}>Request Proposal</Button>
            <Button variant="outlined" onClick={fakeUpload} startIcon={<CloudUploadIcon />}>Upload Brief</Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Container sx={{ mt: 8, mb: 8 }}>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 1 }}>
            <IconButton aria-label="twitter" onClick={() => handleMessage("Opening Twitter…", "info")}> <FaTwitter /> </IconButton>
            <IconButton aria-label="linkedin" onClick={() => handleMessage("Opening LinkedIn…", "info")}> <FaLinkedin /> </IconButton>
            <IconButton aria-label="github" onClick={() => handleMessage("Opening GitHub…", "info")}> <FaGithub /> </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © 2025 TechSolutions. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Small Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Get Started with TechSolutions</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you for choosing us! Our representative will contact you soon.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Big Dialog (Form) */}
      <Dialog open={openBigDialog} onClose={() => setOpenBigDialog(false)} fullWidth maxWidth="md">
        <DialogTitle>Request a Project Quote</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Email" type="email" variant="outlined" sx={{ mb: 2 }} />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Project Type</InputLabel>
                <Select label="Project Type" defaultValue="web">
                  <MenuItem value="web">Web App</MenuItem>
                  <MenuItem value="mobile">Mobile App</MenuItem>
                  <MenuItem value="cloud">Cloud/DevOps</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Company" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Phone" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Timeline (weeks)" type="number" variant="outlined" sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Project Brief" multiline minRows={4} placeholder="Tell us about your goals, users, and key features…" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch checked={consent} onChange={(e) => setConsent(e.target.checked)} />} label="Send me updates and proposals via email" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<DownloadIcon />} onClick={() => handleMessage("Downloaded sample brief", "info")}>Download Sample Brief</Button>
          <Button variant="contained" onClick={() => { setOpenBigDialog(false); handleMessage("Quote request submitted!", "success"); }}>
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>

      {/* Backdrop + progress for fake upload */}
      <Backdrop open={backdropOpen} sx={{ color: "#fff", zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <CircularProgress thickness={5} />
          <Typography>Uploading… {uploadProgress}%</Typography>
        </Box>
      </Backdrop>

      {/* Speed Dial */}
      <SpeedDial
        ariaLabel="quick actions"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" onClick={() => handleMessage("Shared page", "info")} />
        <SpeedDialAction icon={<CloudUploadIcon />} tooltipTitle="Upload" onClick={fakeUpload} />
      </SpeedDial>

      {/* Scroll to top FAB */}
      <Fab
        color="primary"
        size="small"
        sx={{ position: "fixed", bottom: 24, left: 24 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </ThemeProvider>
  );
}

export default tech;
