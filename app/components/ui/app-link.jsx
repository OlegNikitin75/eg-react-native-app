import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ArrowBackSvgComponent } from '../icons/'


export const AppLink = () => {


  return (
    <TouchableOpacity className='flex-row items-center py-4'>
      <ArrowBackSvgComponent />
      <Text className='text-primary text-xs ml-2' style={{ fontFamily: 'Play-Regular' }}>Назад</Text>
    </TouchableOpacity>
  )
}
