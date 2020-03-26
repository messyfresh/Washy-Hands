import React from 'react';
import { IonButton } from '@ionic/react'
import './WashHistory.css';

interface ContainerProps {
  name: string;
}

const WashHistory: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonButton shape="round">{name}</IonButton>
    </div>
  );
};

export default WashHistory;
