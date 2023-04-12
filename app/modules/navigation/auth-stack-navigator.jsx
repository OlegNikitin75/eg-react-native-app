import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Start } from '../../screens'
const Stack = createStackNavigator()
export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
