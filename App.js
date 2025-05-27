import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, { persist } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigation } from './Navigation/MainNavigation/RootNavigation';
import { AppState } from 'react-native';
import { checkToken } from './api/user';

function App() {

  const appState = useRef(AppState.currentState);
  useEffect(()=> {
    AppState.addEventListener('change' ,
    async (nextAppState) => {
        if(appState.current.match(/inactive | background/ && nextAppState === 'active')){
          console.log('Your Backkk');
          await checkToken();
        }
        appState.current = nextAppState;
      }
    );
    console.log('Welcomee');
    checkToken();
    console.log(checkToken);
  }, []);


  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      </PersistGate>
  </Provider>
  );
}

export default App;
