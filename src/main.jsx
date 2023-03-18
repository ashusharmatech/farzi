import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App';
import { AuthContext } from './context/AuthContext';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac'
	}
};

const theme = extendTheme({ colors });


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-n60fhqykzddl2zja.us.auth0.com"
			clientId="H21eH2fx6wJ8OL4PfLWRZQ7eF9DJesvc"
			authorizationParams={{
				redirect_uri: window.location.origin
			}}
		>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
		</Auth0Provider>
	</React.StrictMode>
);
