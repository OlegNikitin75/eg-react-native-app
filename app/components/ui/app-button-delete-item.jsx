import React from 'react'
import { TouchableOpacity } from 'react-native'
import { DeleteSvgComponent } from '../icons'

export const AppButtonDeleteItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <DeleteSvgComponent />
    </TouchableOpacity>
  )
}
