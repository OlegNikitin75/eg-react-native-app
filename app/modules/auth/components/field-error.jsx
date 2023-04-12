import React from 'react'
import { Text, View } from 'react-native'

export const FieldError = props => {
  return (
    <View>
      <Text
        style={{ fontFamily: 'Play-Regular' }}
        className="text-red-600 text-xs"
      >
        {props.children}
      </Text>
    </View>
  )
}
