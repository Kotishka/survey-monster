import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const CreateSurveys: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Surveys</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton class="ion-padding" expand="block" >Create New Survey</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateSurveys;
