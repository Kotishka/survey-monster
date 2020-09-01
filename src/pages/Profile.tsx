import React, { useCallback, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonLabel } from '@ionic/react';
import { UserContext } from '..';
import firebase from 'firebase';

const Profile: React.FC = () => {

  //const [text, setText] = useState<string>();
  const user = useContext(UserContext);
  var email, name;

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  if (user) {
    email = user.email;
    name = user.displayName;
  }

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
              <IonLabel>Name</IonLabel>
              { name }
            </IonItem>
            <IonItem>
              <IonLabel>Email</IonLabel>
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
