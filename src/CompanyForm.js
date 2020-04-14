import React from 'react';
import PT from 'prop-types';
import {
  Grid, Typography, FormControl, MenuItem, InputLabel, Select, TextField,
} from '@material-ui/core';

const CompanyForm = ({ values, onInput }) => (
  <Grid
    container
    warp="nowarp"
    direction="column"
    style={{ margin: '8px 0' }}
    spacing={2}
  >
    <Grid item>
      <Typography variant="h6" align="left">
        Bedrijf
      </Typography>
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlfor="companyselect">bedrijf</InputLabel>
        <Select
          inputProps={{ name: 'company', id: 'companyselect' }}
          placeholder="Bedrijf"
          value={values.company}
          onChange={onInput}
        >
          <MenuItem value="intersprint">Intersprint B.V</MenuItem>
          <MenuItem value="intertyre">Inter-Tyre B.V</MenuItem>
          <MenuItem value="bandenexpress">Banden Express B.V</MenuItem>
          <MenuItem value="Wheeltyre">WheelTyre B.V</MenuItem>
          <MenuItem value="vandenban">Van den Ban B.V</MenuItem>
          <MenuItem value="reedijk">Reedijk Banden import B.V</MenuItem>
          <MenuItem value="amring">Amring B.V</MenuItem>
          <MenuItem value="grupo">Grupo Neumaticos B.V</MenuItem>
          <MenuItem value="different">Anders: zelf in te vullen</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    {values.company === 'different' && (
    <Grid item>
      <TextField
        fullWidth
        placeholder="zelf in te vullen"
        type="text"
        name="otherCompany"
        value={values.otherCompany}
        onChange={onInput}
      />
    </Grid>
    )}
  </Grid>
);

CompanyForm.propTypes = {
  onInput: PT.func.isRequired,
  values: PT.shape({
    company: PT.string,
    otherCompany: PT.string,
  }).isRequired,
};

export default CompanyForm;

