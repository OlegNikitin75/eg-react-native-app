import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ArrowSvgComponent } from '../icons/'

export const AppLink = () => {
  return (
    <TouchableOpacity>
      <ArrowSvgComponent />
      <Text className="text-primary text-xs">Назад</Text>
    </TouchableOpacity>
  )
}
