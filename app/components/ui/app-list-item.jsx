import React from 'react'
import { View } from 'react-native'

export const AppListItem = ({ children }) => {
  return (
    <View className='flex-row items-center justify-between bg-blackColor py-2 px-3 mb-3 rounded-2xl'>
      {children}
    </View>
  )
}

