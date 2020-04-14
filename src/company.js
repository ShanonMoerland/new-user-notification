import React from 'react';
import { Grid, Typography, FormControl, MenuItem, InputLabel, Select, TextField } from '@material-ui/core'



class CompanyForm extends React.Component {

    render () {
        return (  
  
 <Grid container warp='nowarp' spacing={2} direction='column' justify='flex-end' alignItems='stretch' style={{margin:8}}>
 <Grid item>
 <Typography variant='h6'>
   bedrijf
 </Typography>
 </Grid>
 <Grid item>
<FormControl fullWidth >
<InputLabel htmlfor='companyselect'>bedrijf</InputLabel>
<Select 
inputProps={{name: 'company', id: 'companyselect'}} 
placeholder='Bedrijf' 
value={this.props.values.company} 
onChange= {this.props.onInput}>
 <MenuItem value='intersprint'>Intersprint B.V</MenuItem> 
 <MenuItem value='intertyre'>Inter-Tyre B.V</MenuItem>
 <MenuItem value='bandenexpress'>Banden Express B.V</MenuItem>
 <MenuItem value='Wheeltyre'>WheelTyre B.V</MenuItem>
 <MenuItem value='vandenban'>Van den Ban B.V</MenuItem>
 <MenuItem value='reedijk'>Reedijk Banden import B.V</MenuItem>
 <MenuItem value='amring'>Amring B.V</MenuItem>
 <MenuItem value='grupo'>Grupo Neumaticos B.V</MenuItem>
 <MenuItem value='different'>Anders: zelf in te vullen</MenuItem>
</Select>
</FormControl>
</Grid>
{this.props.values.company === 'different' && (
    <Grid item>
    <TextField placeholder='zelf in te vullen' type='text' name='otherCompany' value={this.props.values.otherCompany} onChange={this.props.onInput} />
</Grid>
)}
</Grid>
        )
    }
    };

    export default CompanyForm;
