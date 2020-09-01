import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonMenuButton, IonMenu, IonList, IonMenuToggle, IonButtons } from '@ionic/react';

const CurrentSurveys: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle size="large">Current Surveys</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Test Survey One</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Simple survey about information about you.</p>
            <IonButton routerLink="/FirstSurvey">Start Test Survey One</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Household Survey</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Survey about the people you live with</p>
            <IonButton>Start Household Survey</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Pet Survey</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Survey about the pets you live with</p>
            <IonButton>Start Pet Survey</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default CurrentSurveys;
