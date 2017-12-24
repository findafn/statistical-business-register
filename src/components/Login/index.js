import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText, 
} from 'reactstrap';


class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="login-page">
          <div className="logo-sbr">
            <h4>Logo SBR</h4>
          </div>
          <p>Silakan gunakan password Community BPS untu masuk ke sistem SBR BPS</p>
          <div className="login-form">
            <Form>
              <FormGroup>
                <Input type="text" name="username" id="username" placeholder="NIP/Username" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              <Button color="info">Login</Button>
            </Form>
            <div className="login-footer">
              <h4>Badan Pusat Statistik</h4>
              <p>Jalan Dr. Sutomo 68 Jakarta Pusat, Email: bpshg@bps.go.id </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;