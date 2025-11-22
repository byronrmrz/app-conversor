import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../assets/logo.png';
import './Tab1.css';
import InsertNumber from '../components/InsertNumber';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="my-header">
        <IonToolbar className="my-toolbar">
          <img src={logo} alt="logo" className="logo" />
        </IonToolbar>
      </IonHeader>

        <IonContent fullscreen className="content-center">
          <h1>DivisApp 13005169</h1>
          <InsertNumber />
        </IonContent>
    </IonPage>
  );
};

export default Tab1;