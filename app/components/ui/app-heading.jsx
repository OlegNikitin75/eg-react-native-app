import React from 'react'
import { Text } from 'react-native'

export const AppHeading = ({ title }) => {
  return (
    <Text className='text-whiteColor text-lg' style={{ fontFamily: 'Play-Bold' }}>
      {title}
    </Text>
  )
}

