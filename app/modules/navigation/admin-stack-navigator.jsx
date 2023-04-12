import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routesAdmin } from './routes'

const Stack = createStackNavigator()

export const AdminStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='AppAdmin'
      screenOptions={{ headerShown: false }}
    >
      {routesAdmin.map(route => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={route.name}
        />
      ))}
    </Stack.Navigator>
  )
}
