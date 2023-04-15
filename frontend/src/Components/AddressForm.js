import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Project Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="projectName"
                        name="projectName"
                        label="Project Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="projectDetails"
                        name="projectDetails"
                        label="Project Details"
                        multiline
                        rows={6}
                        fullWidth
                        autoComplete="project details"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}