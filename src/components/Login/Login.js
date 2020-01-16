import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import withHocs from './LoginHoc';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="https://gearappi.com/">
                GEARAPPI.COM
            </Link>
        </Typography>
    );
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: '',
            Password: '',
            error: '',
            login: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleJWT = this.handleJWT.bind(this);
    }

    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

    handleJWT = (event) => {
        event.preventDefault();

        axios.post('https://auth.gearappi.com/auth/login', {
            firstName: this.state.Login,
            lastName: this.state.Password
          })
          .then(function (response) {
            localStorage.setItem('token_access', response.access_token);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Typography component="h1" variant="h6" style={{color: 'red', align: 'center'}}>
                        {this.state.error}
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleJWT} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="Login"
                            autoComplete="Login"
                            autoFocus
                            onChange={e => this.handleChange(e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => this.handleChange(e)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Go
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Remember password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"You haven't abra account?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}
export default withHocs(Login);
