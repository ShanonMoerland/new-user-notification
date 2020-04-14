import React from 'react';
import {Grid,Typography, TextField, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel} from '@material-ui/core'


class PersonalInfoForm extends React.Component{

    render () {
        return (

        <Grid container wrap='nowarp' spacing={2} direction='column' alignItems='stretch' style={{margin:8}}>
            <Grid Item>
        <Typography variant='h6'>
         persoonsgevens
          </Typography>
          </Grid>
          <Grid item>
        <TextField placeholder="achternaam" type="text" name="lastname" margin='normal' value={this.props.values.lastname} onChange={this.props.onInput} />
        </Grid>
        <Grid item>
        <TextField placeholder="voornaam" type="text" name="firstname" margin='normal'value={this.props.values.firstname} onChange={this.props.onInput} />
        </Grid>
        <Grid item>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Geslacht</FormLabel> 
          <RadioGroup  aria-label='gender' name='gender' onChange={this.props.onInput}>
           <FormControlLabel value='man' control ={<Radio color='primary' />} label='man'/>
           <FormControlLabel value ='vrouw' control={<Radio color='primary' />} label='vrouw'/>
           <FormControlLabel value='anders' control={<Radio color='primary' />} label='anders'/>
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item>
        <TextField placeholder='weer te geven naam' helperText='*eigen naam\partner naam' type='text' name='showName' value={this.props.values.showName} onChange={this.props.onInput} />
        </Grid>
          <Grid item>
        <TextField 
          placeholder='datum in dienst' 
          type='date' name='contractDate' value={this.props.values.contractDate} onChange={this.props.onInput} />
        </Grid>
        <Grid item>
        <TextField placeholder='start datum' type='date' name='startDate' value={this.props.values.startDate} onChange={this.props.onInput} />
        </Grid>
        <Grid item>
        <TextField placeholder='personeelsnummer' type='text' name='staffId' value={this.props.values.staffId} onChange={this.props.onInput} />
        </Grid>
{['intersprint', 'intertyre', 'bandenexpress', 'wheeltyre'].includes(this.props.values.company) && (
 <Grid item>
 <TextField placeholder='user account purse' type='text' name='userAccountPurse' value={this.props.values.userAccountPurse} onChange={this.props.onInput} />
 </Grid>
        )}
        </Grid>
        )
    }
}
export default PersonalInfoForm;