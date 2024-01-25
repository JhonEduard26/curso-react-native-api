import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AccountScreen, HomeScreen, FavoriteScreen, PokemonScreen } from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabLinks = [
  {
    name: 'Inicio',
    component: HomeScreen,
    icon: 'home'
  },
  {
    name: 'Cuenta',
    component: AccountScreen,
    icon: 'account-circle'
  },
  {
    name: 'Favoritos',
    component: FavoriteScreen,
    icon: 'heart'
  }
]

const Home = () => {
  return (
    <Tab.Navigator>
      {
        tabLinks.map((link) => (
          <Tab.Screen
            key={link.name}
            name={link.name}
            component={link.component}
            options={{
              tabBarLabel: link.name,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name={link.icon} color={color} size={size} />
              ),
            }}
          />
        ))
      }
    </Tab.Navigator>
  )
}

export const NavLinks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
      />
    </Stack.Navigator>
  )
}