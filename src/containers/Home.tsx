import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonText } from '@ionic/react'

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Home</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonText color="primary">
						<h1>The quick brown fox jumps over the lazy dog</h1>
					</IonText>
				</IonContent>
			</React.Fragment>
		)
	}
}

export default Home;