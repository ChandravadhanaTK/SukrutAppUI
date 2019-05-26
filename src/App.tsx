import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { IAppState } from './store/store'

import { IonApp, IonSplitPane } from '@ionic/react'
import Menu from './containers/Menu'
import PageRoutes from './routes/pageRoutes'

interface IProps {
  store: Store<IAppState>
}

const App: React.FC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
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
  );
}

export default App;
