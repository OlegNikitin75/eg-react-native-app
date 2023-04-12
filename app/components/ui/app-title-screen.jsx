import React from 'react'
import { Text } from 'react-native'

export const AppTitleScreen = ({ title }) => {
  return (
    <Text style={{ fontFamily: 'Play-Bold' }} className="text-2xl text-white">
      {title}
    </Text>
  )
}
