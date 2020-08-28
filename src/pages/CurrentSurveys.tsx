import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';

const CurrentSurveys: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Current Surveys</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Test Survey One</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Simple survey for information about you.
            <IonButton>Start</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CurrentSurveys;
