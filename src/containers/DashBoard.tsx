import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import "../styles/DashBoard.css";
import {
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonFooter,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon,
  IonLabel,
  IonHeader,
  IonContent,
  IonText,
  IonGrid,
  IonCol,
  IonRow
} from "@ionic/react";

type Props = {};
type State = {
  showModal: boolean;
};

class DashBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <IonHeader mode="md" no-border>
          <IonToolbar class="toolbar" mode="md">
            <IonTitle class="cardtext" color="light">
              SUKRUT
            </IonTitle>
            <IonButtons slot="end">
              <IonButton class="cardtext" color="light">
                LOGOUT
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent class="background" fullscreen>
          <IonGrid id="flex" fixed>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonItem href="#" class="cardtext" color="primary">
                    <IonIcon name="people" slot="start" />
                    <IonLabel>USER DASHBOARD</IonLabel>
                  </IonItem>

                  <IonItem href="#" class="cardtext" color="dark">
                    <IonIcon name="Contact" slot="start" />
                    <IonLabel>ADMIN DASHBOARD</IonLabel>
                  </IonItem>

                  <IonItem href="#" class="cardtext" color="danger">
                    <IonIcon name="person-add" slot="start" />
                    <IonLabel>VENDOR DASHBOARD</IonLabel>
                  </IonItem>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter mode="md" no-border>
          <IonToolbar class="toolbar" mode="md">
            <IonLabel color="light" slot="end">
              @2019,made with love for the better world
            </IonLabel>
          </IonToolbar>
        </IonFooter>
      </React.Fragment>
    );
  }
}

export default DashBoard;
