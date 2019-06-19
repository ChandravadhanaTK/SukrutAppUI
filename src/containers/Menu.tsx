import React from 'react';
import { useKeycloak  } from 'react-keycloak'
import { IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router';

const routes = {
  appPages: [
    { title: 'Home', path: '/', icon: 'calendar' },
    { title: 'Todos', path: '/todos', icon: 'information-circle' }
  ]
}

type Props = RouteComponentProps<{}>;

const Menu: React.FC<Props> = ({ history }) => {
  const { keycloak } = useKeycloak();

  function renderlistItems(list: any[]) {
    return list
      .filter(route => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button onClick={() => history.push(p.path)}>
            <IonIcon slot="start" name={p.icon}></IonIcon>
            <IonLabel>
              {p.title}
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonListHeader>
            Navigate
          </IonListHeader>
          { renderlistItems(routes.appPages) }
        </IonList>
        <IonList>
          <IonListHeader>
            Account
          </IonListHeader>
          <IonMenuToggle auto-hide="false">
            {keycloak.authenticated ? (
              <IonItem button onClick={() => keycloak.logout()}>
                <IonIcon slot="start" name="log-out"></IonIcon>
                <IonLabel>Logout</IonLabel>
              </IonItem>
            ) : (
              <IonItem button onClick={() => keycloak.login()}>
                <IonIcon slot="start" name="log-in"></IonIcon>
                <IonLabel>Login</IonLabel>
              </IonItem>
            )}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default withRouter(Menu);