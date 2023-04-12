import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './routes'
const Stack = createStackNavigator()

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false }}
    >
      {routes.map(route => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={route.name}
        />
      ))}
    </Stack.Navigator>
  )
}
