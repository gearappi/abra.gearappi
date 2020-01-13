import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Drawers from './components/Drawers/Drawers';
import Login from './components/Login/Login';
import theme from './components/theme';

const client = new ApolloClient({
  uri: 'https://gearappi.com/graphql'
});

class App extends Component {
    render() {
        if (!localStorage.getItem('token_access')){
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
