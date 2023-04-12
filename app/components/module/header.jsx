import React from 'react'
import { Text, View } from 'react-native'

export const Header = props => {
  console.log(props)
  return <View>{props.children}</View>
}
