import React, { useEffect, constructor } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonTabs, IonTabBar, } from '@ionic/react';
import { analytics } from 'firebase';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Welcome to Survey Monster</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton expand="block" routerLink="/login">Login</IonButton>
                <IonButton expand="block" routerLink="/signup">Sign Up</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Home;
