import React, { useCallback, useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-gesture-handler'
import { AppNavigator } from './app/modules/navigation/app-navigator'
import { AuthProvider } from './app/modules/auth'

let ignore = SplashScreen.preventAutoHideAsync()

function App() {

  const [fontsLoaded] = useFonts({
    'Play-Regular': require('./app/assets/fonts/Play-Regular.ttf'),
    'Play-Bold': require('./app/assets/fonts/Play-Bold.ttf')
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }

  return (
    <AuthProvider>
      <StatusBar
        translucent
        barStyle='light-content'
      ></StatusBar>
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight
        }}
      >
        <AppNavigator />
      </SafeAreaView>
    </AuthProvider>
  )
}

export default App
