import React, { useState } from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import { fileTrayFull, brushSharp, personOutline } from "ionicons/icons";
import CurrentSurveys from "./pages/CurrentSurveys";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
    <IonRouterOutlet>
      <Route path="/CurrentSurveys" component={CurrentSurveys} exact={true} />
      <Route path="/CreateSurveys" component={Create} exact={true} />
      <Route path="/Profile" component={Profile} />
      <Route path="/" render={() => <Redirect to="/CurrentSurveys" />} exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="CurrentSurveys" href="/CurrentSurveys">
        <IonIcon icon={fileTrayFull} />
        <IonLabel>Surveys</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Create" href="/CreateSurveys">
        <IonIcon icon={brushSharp} />
        <IonLabel>Create</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Profile" href="/Profile">
        <IonIcon icon={personOutline} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>  );
};

    export default MainTabs;