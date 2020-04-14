import React,{Fragment} from 'react';
import PT from 'prop-types';
import {
  Button, Grid, Typography, Paper,
} from '@material-ui/core';

import CompanyForm from './CompanyForm';
import PersonalInfoForm from './PersonalInfo';
import CompanyInfoForm from './CompanyInfo';

const defaultValues = {
  company: '',
  lastName: '',
  firstName: '',
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
  otherCompany: '',
};

class FormikCloudForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: defaultValues,
      error: null,
      success: false,
    };
  }

   handleSubmit = (event) => {
     event.preventDefault();

     const { values } = this.state;

     fetch('https://api.formik.com/submit/new-user-notification/new-user', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(values),
     })
       .then(() => {
         this.setState({ success: true });
       })
       .catch((error) => {
         this.setState({ error: error.message });
       });
   }

  handleInputChange = (event) => {
    const { values } = this.state;
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({
      values: {
        ...values,
        [nam]: val,
      },
    });
  };
  ;

  render() {
    const { success, values, error } = this.state;

    return (
      <Grid container direction="column" justify="center" wrap="nowarp" alignItems="center" elevation={3}>
        <Paper style={{ maxWidth: 500, padding: 80 }} align="center">
          <Grid item>
            <form onSubmit={this.handleSubmit}>
              {!success
                ? (
                  <Fragment>
                  <Grid item>
                   <Typography align="left" variant="h4">
                      Aanvragen nieuwe gebruiker
                   </Typography>
                   <Typography paragraph align="left">
                     Via het onderstaande formulier kunt u een account voor een nieuwe werknemer aanvragen
                   </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    wrap="nowarp"
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <CompanyForm values={values} onInput={this.handleInputChange} />
                    </Grid>
                    <Grid item>
                      <PersonalInfoForm values={values} onInput={this.handleInputChange} />
                    </Grid>
                    <Grid item>
                      <CompanyInfoForm values={values} onInput={this.handleInputChange} />
                    </Grid>
                    <Grid item style={{ alignSelf: 'flex-start' }}>
                      {error && <Typography>{error}</Typography>}
                      <Button variant="outlined" type="submit">Submit</Button>
                    </Grid>
                  </Grid>
                  </Fragment>
                ) : (
                  <ThankComponent retry={() => this.setState({
                    success: false,
                    values: defaultValues,
                  })}
                  />
                )}
            </form>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const ThankComponent = ({ retry }) => (
  <Grid container spacing={2} direction="column">
    <Grid item>
      <Typography variant="h4">Bedankt voor de aanmelding</Typography>
    </Grid>
    <Grid item>
      <Typography variant="h5">Klik opnieuw om nog een acount aan te maken</Typography>
    </Grid>
    <Grid item>
      <Button variant="outlined" onClick={retry}>Opnieuw</Button>
    </Grid>
  </Grid>
);

ThankComponent.propTypes = {
  retry: PT.func.isRequired,
};


export default FormikCloudForm;

