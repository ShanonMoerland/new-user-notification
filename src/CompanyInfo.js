import React from 'react';
import {Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem,} from '@material-ui/core'


class CompanyInfoForm extends React.Component {
    render(){
        return (
        <Grid container wrap='nowarp' spacing={2} direction='column' alignItems='stretch' style={{margin:8}}>
            <Grid item> 
          <Typography variant='h6'>
            bedrijfsgegevens
          </Typography>
          </Grid>
        <Grid item>
        <TextField placeholder='locatie'required id="standard-required" label='locatie' type='text' name='location' value={this.props.values.location} onChange={this.props.onInput} />
        </Grid>
        {console.log(this.props.values)}
        <Grid item >
        <FormControl fullWidth >
          <InputLabel htmlfor='departmentSelect'>afdeling</InputLabel>
          <Select 
          inputProps={{name: 'department', id:'departmentSelect'}}
          placeholder='afdeling'
          value={this.props.values.department}
          onChange={this.props.onInput}>
            <MenuItem value='marketing'>marketing</MenuItem>
            <MenuItem value='verkoop'>verkoop</MenuItem>
            <MenuItem value='logistiek'>logistiek</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        {this.props.values.department === 'marketing' && (
        <Grid item>
        <FormControl fullWidth>
          <InputLabel htmlfor='functionSelect'>functie</InputLabel>
          <Select
          inputProps={{name: 'jobTitle', id: 'functionSelect'}}
          placeholder= 'functie'
          value={this.props.values.function}
          onChange={this.props.onInput}>
            <MenuItem value='junior online marketeer'>Junior online marketeer</MenuItem>
            <MenuItem value='marketing medewerker'>marketing medewerker</MenuItem>
            <MenuItem value='stagiair'>stagiair</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        )}
        {this.props.values.department ==='verkoop' && (
            <Grid item>
        <FormControl fullWidth>
          <InputLabel htmlfor='functionSelect'>functie</InputLabel>
          <Select
          inputProps={{name: 'jobTitle', id: 'functionSelect'}}
          placeholder= 'functie'
          value={this.props.values.function}
          onChange={this.props.onInput}>
            <MenuItem value='account manager'>account manager</MenuItem>
            <MenuItem value='sales medewerker'>sales medewerker</MenuItem>
            <MenuItem value='verkoop lead'>verkoop lead</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        )}
        {this.props.values.department ==='logistiek' && (
            <Grid item>
        <FormControl fullWidth>
          <InputLabel htmlfor='functionSelect'>functie</InputLabel>
          <Select
          inputProps={{name: 'jobTitle', id: 'functionSelect'}}
          placeholder= 'functie'
          value={this.props.values.function}
          onChange={this.props.onInput}>
            <MenuItem value='medewerker logistiek'>medewerker logistiek</MenuItem>
            <MenuItem value='manager logistiek'>manager logistiek</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        )}
        <Grid item>
        <TextField placeholder = 'leidinggevende'required id="standard-required" label="leidinggevende" type='text' name='superior' value={this.props.values.superior} onChange={this.props.onInput} />
        </Grid>
        </Grid>
    
        )
    }
}
export default CompanyInfoForm;