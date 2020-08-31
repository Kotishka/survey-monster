import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { auth } from '../';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
    const history = useHistory();

    //This function will force users who are not logged in to go to the login page.
    useEffect(() => {
        if (!auth.currentUser) {
            history.push('/login');
        }
    }, [history])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Home</IonTitle>
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
