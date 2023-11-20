// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import Defi from '../components/defi'
import HomePage from '../components/homePage'
import Reussi from '../components/reussi'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})