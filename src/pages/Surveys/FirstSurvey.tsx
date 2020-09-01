import React, { useState, useCallback, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonItem, IonCard, IonCardContent } from '@ionic/react';
import { userInfo } from 'os';
import firebase from 'firebase';

const CreateSurveys: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    // const user = useContext(useContext);

    // const onComplete = useCallback(() => {
    //     if (firebase.auth().currentUser) {
    //         firebase.auth().currentUser.displayName = firstName + " " + lastName;
    //     }
    // }, [user.name, firstName, lastName]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>First Survey</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="fixed">First Name</IonLabel>
                            <IonInput value={firstName} placeholder="First Name" type="text" onIonChange={(e: any) => setFirstName(e.target.value)} required />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">Last Name</IonLabel>
                            <IonInput value={lastName} placeholder="Last Name" type="text" onIonChange={(e: any) => setLastName(e.target.value)} required />
                        </IonItem>
                        <IonButton expand="block" class="ion-padding" routerLink="/currentsurveys">Complete</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CreateSurveys;
