import React from 'react';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import FormikCloudForm from './NewUserForm.js';

import { Grid, Paper } from '@material-ui/core';

const NotifyNewUser = () => (
    <Grid container alignItems="center" justify="center">
        <Paper style={{ maxWidth: 500, padding:80 }}>
            <Grid item>
            <Typography align="left" variant="h4">
                Aanvragen nieuwe gebruiker
            </Typography>
            <Typography paragraph align="left">
              Via het onderstaande formulier kunt u een account voor een nieuwe werknemer aanvragen
            </Typography>
            </Grid>
            <Grid item>
            <FormikCloudForm />
            </Grid>
        </Paper>
    </Grid>
   
);
export default NotifyNewUser;
