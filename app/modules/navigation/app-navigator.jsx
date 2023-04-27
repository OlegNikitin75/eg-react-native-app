import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './main-stack-navigator'
import { AuthStackNavigator } from './auth-stack-navigator'
import { AdminStackNavigator } from './admin-stack-navigator'
import { AuthContext } from '../auth/context/auth-context'

export const AppNavigator = () => {
  const { userRole } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {/*{userRole !== null && userRole === 'admin' ? (*/}
      {/*  <AdminStackNavigator />*/}
      {/*) : userRole !== null && userRole === 'user' ? (*/}
      {/*  <MainStackNavigator />*/}
      {/*) : (*/}
      {/*  <AuthStackNavigator />*/}
      {/*)}*/}
      <AdminStackNavigator />
    </NavigationContainer>
  )
}
