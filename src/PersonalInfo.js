import React from 'react';
import PT from 'prop-types';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

const userAccountPurseCompanies = ['intersprint', 'intertyre', 'bandenexpress', 'wheeltyre'];

const PersonalInfoForm = ({ values, onInput }) => (
  <Grid
    container
    direction="column"
    style={{ margin: '8px 0' }}
    spacing={2}
  >
    <Grid Item>
      <Typography variant="h6" align='left'>
        Persoonsgevens
      </Typography>
    </Grid>
    <Grid item>
      <TextField
        placeholder="achternaam"
        type="text"
        name="lastName"
        margin="normal"
        fullWidth
        value={values.lastName}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <TextField
        placeholder="voornaam"
        type="text"
        name="firstName"
        margin="normal"
        fullWidth
        value={values.firstName}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <Grid container alignItems="flex-start" justify="flex-start">
        <FormControl component="fieldset">
          <Grid item>
            <FormLabel component="legend" style={{ textAlign: 'left' }}>Geslacht</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              onChange={onInput}
              style={{ flexDirection: 'row' }}
            >
              <FormControlLabel
                value="man"
                control={<Radio color="primary" />}
                label="man"
              />
              <FormControlLabel
                value="vrouw"
                control={<Radio color="primary" />}
                label="vrouw"
              />
              <FormControlLabel
                value="anders"
                control={<Radio color="primary" />}
                label="anders"
              />
            </RadioGroup>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
    <Grid item>
      <TextField
        placeholder="weer te geven naam"
        helperText="*eigen naam\partner naam"
        type="text"
        name="showName"
        fullWidth
        value={values.showName}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <TextField
        placeholder="datum in dienst"
        type="date"
        name="contractDate"
        fullWidth
        value={values.contractDate}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <TextField
        placeholder="start datum"
        type="date"
        name="startDate"
        fullWidth
        value={values.startDate}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <TextField
        placeholder="personeelsnummer"
        type="text"
        name="staffId"
        fullWidth
        value={values.staffId}
        onChange={onInput}
      />
    </Grid>
    {userAccountPurseCompanies.includes(values.company) && (
    <Grid item>
      <TextField
        placeholder="user account purse"
        type="text"
        fullWidth
        name="userAccountPurse"
        value={values.userAccountPurse}
        onChange={onInput}
      />
    </Grid>
    )}
  </Grid>
);

PersonalInfoForm.propTypes = {
  onInput: PT.func.isRequired,
  values: PT.shape({
    lastName: PT.string,
    firstName: PT.string,
    showName: PT.string,
    startDate: PT.string,
    contractDate: PT.string,
    staffId: PT.string,
    company: PT.string,
    userAccountPurse: PT.string,
  }).isRequired,
};

export default PersonalInfoForm;