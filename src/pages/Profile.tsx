import React, { useState, useCallback, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonRouterLink } from '@ionic/react';
import { auth } from 'firebase';
import { UserContext } from '..';
import firebase from 'firebase';

const Profile: React.FC = () => {

  const [text, setText] = useState<string>();
  const user = useContext(UserContext);

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const email = user.email;
  const name = user.displayName;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
          <IonItem>
              <IonLabel position="fixed">Name</IonLabel>
              { name }
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Email</IonLabel>
              { email }
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonButton class="ion-padding" expand="block" onClick={signOut} routerLink="/Home">Sign Out</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
