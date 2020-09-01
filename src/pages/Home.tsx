import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Welcome to Survey Monster</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton expand="block" routerLink="/login" class="ion-padding">Login</IonButton>
                <IonButton expand="block" routerLink="/signup" class="ion-padding">Sign Up</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Home;
