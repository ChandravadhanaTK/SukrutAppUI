import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { IonApp, IonSplitPane } from '@ionic/react'
import Menu from './containers/Menu'
import PageRoutes from './routes/pageRoutes'

const App: React.FC = () => {
  return (
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
  );
}

export default App;
