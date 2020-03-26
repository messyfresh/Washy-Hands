import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import WashHistory from '../components/WashHistory';
import './WashHistoryPage.css';

const WashHistoryPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Wash History</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wash History</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WashHistory name="Wash History"/>
      </IonContent>
    </IonPage>
  );
};

export default WashHistoryPage;
