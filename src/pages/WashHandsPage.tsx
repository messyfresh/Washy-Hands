import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import WashHands from '../components/WashHands';
import './WashHandsPage.css';

const WashHandsPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Wash Hands</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wash Hands</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WashHands name="Wash Hands" />
      </IonContent>
    </IonPage>
  );
};

export default WashHandsPage;
