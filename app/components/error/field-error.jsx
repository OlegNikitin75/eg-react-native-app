import React from 'react'
import { Text, View } from 'react-native'

export const FieldError = ({ children }) => {
  return (
    <View className={`${children ? 'top-0' : '-top-full'} 
                      absolute w-full bg-red-500 z-40 `}>
      <Text style={{ fontFamily: 'Play-Bold' }}
            className='text-whiteColor text-center px-3 py-4 text-base'>{children}</Text>
    </View>
  )
}
