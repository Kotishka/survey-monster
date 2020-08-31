import React, { useEffect } from 'react';
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
                <IonButton expand="block" routerLink="/login">Login</IonButton>
                <IonButton expand="block" routerLink="/signup">Sign Up</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Home;
