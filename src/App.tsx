import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak'

import { IAppState } from './store/store'

import { IonApp, IonSplitPane } from '@ionic/react'
import Menu from './containers/Menu'
import PageRoutes from './routes/pageRoutes'

const keycloak = Keycloak();

interface IProps {
  store: Store<IAppState>
}

class App extends React.PureComponent<IProps> {
  tokens: any;
  constructor(props: IProps) {
    super(props);

    this.tokens = JSON.parse(localStorage.getItem('kcTokens') || '{}');
  }
  
  onKeycloakEvent = (event:any, error:any) => {
    console.log('onKeycloakEvent', event, error);
    if (event === 'onAuthLogout') {
      localStorage.removeItem('kcTokens');
    }
  }

  onKeycloakTokens = (tokens:any) => {
    console.log({ tokens });
    localStorage.setItem('kcTokens', JSON.stringify(tokens));
  }
  
  render() {
    return (
      <KeycloakProvider
        keycloak={keycloak}
        initConfig={{
          onLoad: 'login-required',
          ...this.tokens,
        }}
        onEvent={this.onKeycloakEvent}
        onTokens={this.onKeycloakTokens}
      >
        <Provider store={this.props.store}>
          <Router>
            <div id="app">
              <IonApp>
                <IonSplitPane contentId="main">
                  <Menu/>
                  <div id="main" className="ion-page">
                    <PageRoutes/>
                  </div>
                </IonSplitPane>
              </IonApp>
            </div>
          </Router>
        </Provider>
      </KeycloakProvider>
    )
  }
}

export default App;
