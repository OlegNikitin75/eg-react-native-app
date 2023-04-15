import React from 'react'
import { TouchableOpacity } from 'react-native'
import { DeleteSvgComponent } from '../icons'

export const AppButtonDeleteItem = () => {
  return (
    <TouchableOpacity>
      <DeleteSvgComponent />
    </TouchableOpacity>
  )
}
