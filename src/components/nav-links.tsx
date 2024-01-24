import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AccountScreen, HomeScreen, FavoriteScreen } from '../screens';

const Tab = createBottomTabNavigator();

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

export const NavLinks = () => {
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
              )
            }}
          />
        ))
      }
    </Tab.Navigator>
  )
}