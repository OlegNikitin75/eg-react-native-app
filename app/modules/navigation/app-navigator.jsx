import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './main-stack-navigator'
import { AuthContext } from '../auth'
import { AuthStackNavigator } from './auth-stack-navigator'
import { AdminStackNavigator } from './admin-stack-navigator'

export const AppNavigator = () => {
  const { userRole } = useContext(AuthContext)
  console.log(userRole)

  return (
    <NavigationContainer>
      {userRole !== null && userRole === 'admin' ?
        <AdminStackNavigator /> : userRole !== null && userRole === 'user' ?
          <MainStackNavigator /> : <AuthStackNavigator />}
      {/*<AdminStackNavigator />*/}
    </NavigationContainer>
  )
}
