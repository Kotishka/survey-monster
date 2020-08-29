import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';

const Profile: React.FC = () => {

  const [text, setText] = useState<string>();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <p>Add stats here:
          Email<br />
          Profile Pic?<br />
          How many Surveys finished<br />
          How many Surveys Completed?<br />
          Etc<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
