import React, { useState, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane,
  IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* imports for links */
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Create from './pages/Create';
import CurrentSurveys from './pages/CurrentSurveys';
import { UserContext } from '.';
import { brushSharp, fileTrayFull, personOutline } from 'ionicons/icons';


const IonicApp: React.FC = () => {
  return (
    <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route path="/Profile" component={Profile} exact />
              <Route path="/Create" component={Create} exact />
              <Route path="/CurrentSurveys" component={CurrentSurveys} exact />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" id="main-tabs" class="show-tabs">
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
          </IonTabs>
        </IonReactRouter>
    </IonApp>
  );
};

const App: React.FC = () => {
  return (
    <IonicApp />
  );
};

export default App;
