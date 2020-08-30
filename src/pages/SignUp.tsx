import React, { useState, useContext, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonAlert } from '@ionic/react';

const SignUp: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [alertText, setAlertText] = useState('');

    const onSignup = useCallback(() => {
        if (!email.length) {
            setAlertText('Email is required!');
        } 

        if (password.length === 0) {
            setAlertText('Password is required');
        }

        if (confirmPassword.length === 0) {
            setAlertText('Password is required');
        }

        if (confirmPassword !== password) {
            setAlertText('Passwords do not match.');
        }
    }, [confirmPassword, password]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">SignUp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="fixed">Email</IonLabel>
                            <IonInput value={email} placeholder="example@example.com" type="email" onIonChange={(e: any) => setEmail(e.target.value)} required />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">Password</IonLabel>
                            <IonInput value={password} placeholder="Password" type="password" onIonChange={(e: any) => setPassword(e.target.value)} required />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">Confirm Password</IonLabel>
                            <IonInput value={confirmPassword} placeholder="Confirm Password" type="password" onIonChange={(e: any) => setConfirmPassword(e.target.value)} required />
                        </IonItem>
                        <IonButton expand="block" onClick={onSignup}>Sign Up</IonButton>
                        <IonButton expand="block" routerLink="/login">Login Instead</IonButton>
                        <IonButton color="secondary" expand="block" routerLink="/home">Back</IonButton>
                        <IonAlert
                            isOpen={alertText.length > 0}
                            onDidDismiss={() => setAlertText('')}
                            message={alertText}
                            buttons={['OK']}
                        />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default SignUp;
