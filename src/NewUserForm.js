import React from 'react';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import CompanyForm from './company.js'
import PersonalInfoForm from './PersonalInfo.js'
import CompanyInfoForm from './CompanyInfo.js'


const defaultValues =  {
  company: '',
  lastname: '',
  firstname: '',
  gender: '',
  showName: '',
  contractDate: '',
  startDate: '',
  staffId: '',
  userAccountPurse: '',
  location: '',
  department: '',
  jobTitle: '',
  superior: '',
  otherCompany:'',
};

class FormikCloudForm extends React.Component {
    state = {
      values: defaultValues,
      error: null,
      success: false,
  }


   handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    fetch('https://api.formik.com/submit/new-user-notification/new-user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.values),
    })
      .then((result) => {
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  handleInputChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({values: {
      ...this.state.values,
      [nam]: val
    }});
  };
  ;
  
  render() {
    return (
        <Grid container direction='column' justify='center' wrap='nowarp' alignItems='center' >
          <Paper style={{ maxWidth: 500, padding:80 }} align='center'>
            <Grid item>
            <Typography align="left" variant="h4">
                Aanvragen nieuwe gebruiker
            </Typography>
            <Typography paragraph align="left">
              Via het onderstaande formulier kunt u een account voor een nieuwe werknemer aanvragen
            </Typography>
            </Grid>
            <form onSubmit={this.handleSubmit}>
        {!this.state.success
          ? (
          <Grid container direction='column' justify='flex-end' wrap='nowarp' alignItems='stretch' >
            <Grid item>
          <CompanyForm values={this.state.values} onInput={this.handleInputChange} />
          </Grid>
           <Grid item  >
            <PersonalInfoForm values={this.state.values} onInput={this.handleInputChange} />
            </Grid>
          <Grid item>
              <CompanyInfoForm values={this.state.values} onInput={this.handleInputChange} />
              </Grid>
          <Grid item>
          <Button variant='outlined' type="submit">Submit</Button>
          </Grid>
          </Grid>
          
         
          ) : (
            <ThankComponent retry={() => this.setState({
              success: false,
              values: defaultValues,
              error: null,
            })} />
          )
        }
        </form> 
         </Paper>
          </Grid>
        
      
      
    );
  }
}

const ThankComponent = ({ retry }) => (
  <Grid container spacing={2} direction='column'>
    <Grid item>
      <Typography variant='h4'>Bedankt voor de aanmelding</Typography>
    </Grid>
    <Grid item>
      <Typography variant='h5'>Klik opnieuw om nog een acount aan te maken</Typography>
    </Grid>
    <Grid item>
      <Button variant='outlined'onClick={retry}>Opnieuw</Button>
    </Grid>
  </Grid>
)
  

export default FormikCloudForm;
