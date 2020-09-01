import React, { useState, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router';
import { auth } from '../';

const SignUp: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [alertText, setAlertText] = useState('');
    const history = useHistory();

    const onSignup = useCallback(() => {
        if (!email.length) {
            setAlertText('Email is required.');
        } else if (!password.length) {
            setAlertText('Password is required.');
        } else if (password.length < 6) {
            setAlertText('Password must be at least 6 characters.');
        } else if (!confirmPassword.length) {
            setAlertText('Password is required.');
        } else if (confirmPassword !== password) {
            setAlertText('Passwords do not match.');
        } else {
            auth.createUserWithEmailAndPassword(email, password).then((response) => history.push('/currentsurveys'));
        }
    }, [email, confirmPassword, password, history]);

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
                            <IonLabel position="fixed">Confirm</IonLabel>
                            <IonInput value={confirmPassword} placeholder="Confirm Password" type="password" onIonChange={(e: any) => setConfirmPassword(e.target.value)} required />
                        </IonItem>
                        <IonButton expand="block" onClick={onSignup} class="ion-padding">Sign Up</IonButton>
                        <IonButton expand="block" routerLink="/login" class="ion-padding">Login Instead</IonButton>
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
