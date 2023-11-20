// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Vous pouvez effectuer des opérations d'initialisation ici
    // Après quelques secondes, naviguez vers l'écran principal
    const timer = setTimeout(() => {
      navigation.replace('homePage'); // Remplacez 'Accueil' par le nom de votre écran principal
    }, 3000); // Le temps d'affichage de l'écran de démarrage en millisecondes

    // Assurez-vous de nettoyer le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, [navigation]);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
