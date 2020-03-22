import React from 'react';
import { IonButton } from '@ionic/react'
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonButton shape="round">Wash Hands</IonButton>
    </div>
  );
};

export default ExploreContainer;
