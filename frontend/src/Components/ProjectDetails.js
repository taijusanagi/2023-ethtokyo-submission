import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VerificationForm from './VerificationForm';
import { Link as RouterLink } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                GGG
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Polygon ID Connect'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <VerificationForm />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function ProjectDetails() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Great Gas Grants
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Box sx={{ mt: 3 }}>
                    <Link component={RouterLink} to='../grants'> {'Back to Grants List'} </Link>
                </Box>
                <Paper variant="outlined" sx={{ mt: 2, mb: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Great Gas Grants Request
                    </Typography>
                    {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> */}
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Box textAlign="center">
                                <CheckCircleIcon style={{ color: '#4BB543', fontSize: '5rem' }} />
                            </Box>
                            <Typography variant="h5" gutterBottom>
                                Credential Transfer Completed.
                            </Typography>
                            <Typography variant="subtitle1">
                                The credential has been provided to your Polygon wallet.
                                Please use the credential for expensing the gas fee.
                                Happy Hacking!
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{ pt: 3, pb: 5 }}>
                                {getStepContent(activeStep)}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {'Complete'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider >
    );
}