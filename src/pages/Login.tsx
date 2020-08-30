import React, { useState, useContext, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonAlert } from '@ionic/react';

const Login: React.FC = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [alertText, setAlertText] = useState('');

	const onLoginin = useCallback(() => {
        if (!email.length) {
            setAlertText('Email is required!');
        } 

        if (!password.length) {
            setAlertText('Password is required');
        }
    }, []);

	return (
		<IonPage>
			<IonHeader collapse="condense">
				<IonToolbar>
					<IonTitle size="large">Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Login</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						<IonItem>
							<IonLabel position="fixed">Email</IonLabel>
							<IonInput value={email} placeholder="example@example.com" type="email" onIonChange={(e: any) => setEmail(e.target.value)} required />
						</IonItem>
						<IonItem>
							<IonLabel position="fixed">Password</IonLabel>
							<IonInput value={password} placeholder="password" type="password" onIonChange={(e: any) => setPassword(e.target.value)} required />
						</IonItem>
						<IonButton expand="block" onClick={onLoginin}>Login</IonButton>
						<IonButton expand="block" routerLink="/signup">Sign Up instead</IonButton>
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

export default Login;
