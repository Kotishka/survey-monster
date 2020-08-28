import React, { useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { UserContext } from './App';

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const user = useContext(UserContext);

    const loginClick = () => {
        //Login Function
        if (email === "a" && password === "a") {
            user.setIsLoggedIn(true);
        } else {
        }
    };

    return (
		<IonPage>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Profile</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Login / Sign Up</IonCardTitle>
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
						<IonButton routerLink="/profile" onClick={loginClick}>Login / Sign Up</IonButton>
					</IonCardContent>
				</IonCard>
		</IonContent>
		</IonPage>
	);
};

export default Login;
