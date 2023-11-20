// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/splashScreen'; // Assurez-vous d'importer correctement le chemin du fichier

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* Ajoutez d'autres écrans ici selon vos besoins */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
