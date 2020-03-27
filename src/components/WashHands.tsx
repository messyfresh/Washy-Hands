import React from 'react';
import { IonButton } from '@ionic/react'
import './WashHands.css';

interface ContainerProps {
  name: string;
}

const WashHands: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonButton shape="round">Wash Hands</IonButton>
    </div>
  );
};

export default WashHands;
