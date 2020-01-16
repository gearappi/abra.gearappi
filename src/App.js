import React, {Component} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import axios from 'axios';

import Drawers from './components/Drawers/Drawers';
import Login from './components/Login/Login';
import theme from './components/theme';

const client = new ApolloClient({
  uri: 'https://api.gearappi.com/graphql'
});

class App extends Component {
    constructor() {
        super()
        this.checking_token();
    }
    state = {
        access: false
    }

    checking_token() {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token_access'));
        axios.get('https://auth.gearappi.com/profile', 
            { headers: { Authorization: AuthStr } 
        }).then(response => {
            this.setState({access: true})
          })
          .catch((error) => {
            this.setState({access: false})
          });
    }

    render() {
        if (!this.state.access){
            return (
                <ApolloProvider client={client}>
                    <MuiThemeProvider theme={theme}>
                        <Login/>
                    </MuiThemeProvider>
                </ApolloProvider>
            );
        }else{
            return (
                <ApolloProvider client={client}>
                    <MuiThemeProvider theme={theme}>
                        <Drawers />
                    </MuiThemeProvider>
                </ApolloProvider>
            );
        }
    }
}
export default App;
