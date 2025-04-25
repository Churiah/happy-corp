import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, star, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import AssistantList from './pages/AssistantList';
import YachtList from './pages/YachtList';
import YachtBooking from './pages/YachtBooking';
import CarList from './pages/CarList';
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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import RoomConcept from './pages/RoomConcept';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/assistant-list">
            <AssistantList />
          </Route>
          <Route path="/yacht-list">
            <YachtList />
          </Route>
          <Route path="/yacht-booking">
            <YachtBooking />
          </Route>
          <Route path="/room-concept">
            <RoomConcept />
          </Route>
          <Route path="/car-list">
            <CarList />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/assistant-list">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>assistant</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/yacht-list">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>yacht</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/car-list">
            <IonIcon aria-hidden="true" icon={star} />
            <IonLabel>car</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
