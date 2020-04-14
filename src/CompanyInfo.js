import React from 'react';
import PT from 'prop-types';
import {
  Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';


const CompanyInfoForm = ({ values, onInput }) => (
  <Grid
    container
    wrap="nowarp"
    direction="column"
    style={{ margin: '8px 0' }}
    spacing={2}
  >
    <Grid item>
      <Typography variant="h6" align="left">
        Bedrijfsgegevens
      </Typography>
    </Grid>
    <Grid item>
      <TextField
        placeholder="locatie"
        required
        id="standard-required"
        label="locatie"
        type="text"
        fullWidth
        name="location"
        value={values.location}
        onChange={onInput}
      />
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlfor="departmentSelect">afdeling</InputLabel>
        <Select
          inputProps={{ name: 'department', id: 'departmentSelect' }}
          placeholder="afdeling"
          value={values.department}
          onChange={onInput}
        >
          <MenuItem value="marketing">marketing</MenuItem>
          <MenuItem value="verkoop">verkoop</MenuItem>
          <MenuItem value="logistiek">logistiek</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    {values.department === 'marketing' && (
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlfor="functionSelect">functie</InputLabel>
        <Select
          inputProps={{ name: 'jobTitle', id: 'functionSelect' }}
          placeholder="functie"
          value={values.function}
          onChange={onInput}
        >
          <MenuItem value="junior online marketeer">
            Junior online marketeer
          </MenuItem>
          <MenuItem value="marketing medewerker">marketing medewerker</MenuItem>
          <MenuItem value="stagiair">stagiair</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    )}
    {values.department === 'verkoop' && (
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlfor="functionSelect">functie</InputLabel>
        <Select
          inputProps={{ name: 'jobTitle', id: 'functionSelect' }}
          placeholder="functie"
          value={values.function}
          onChange={onInput}
        >
          <MenuItem value="account manager">account manager</MenuItem>
          <MenuItem value="sales medewerker">sales medewerker</MenuItem>
          <MenuItem value="verkoop lead">verkoop lead</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    )}
    {values.department === 'logistiek' && (
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlfor="functionSelect">functie</InputLabel>
        <Select
          inputProps={{ name: 'jobTitle', id: 'functionSelect' }}
          placeholder="functie"
          value={values.function}
          onChange={onInput}
        >
          <MenuItem value="medewerker logistiek">medewerker logistiek</MenuItem>
          <MenuItem value="manager logistiek">manager logistiek</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    )}
    <Grid item>
      <TextField
        placeholder="leidinggevende"
        required
        fullWidth
        id="standard-required"
        label="leidinggevende"
        type="text"
        name="superior"
        value={values.superior}
        onChange={onInput}
      />
    </Grid>
  </Grid>
);

CompanyInfoForm.propTypes = {
  onInput: PT.func.isRequired,
  values: PT.shape({
    location: PT.string,
    department: PT.string,
    function: PT.string,
    superior: PT.string,
  }).isRequired,
};

export default CompanyInfoForm;
