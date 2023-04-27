import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const AppButtonOption = props => {
  const { name, width, height, bg, color, disabled, onPress } = props
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      className={`
      ${width ? width : 'w-full'} 
      ${disabled ? 'opacity-40' : 'opacity-100'} 
      ${height ? height : 'h-24'} 
      ${bg ? bg : 'bg-blackColor'} 
      rounded-xl py-3 flex justify-center items-center 
      `}
    >
      <Text
        style={{ fontFamily: 'Play-Bold' }}
        className={`
         ${color ? color : 'text-whiteColor'} 
         'text-lg 
         `}
      >
        {name}
      </Text>
      {props.children}
    </TouchableOpacity>
  )
}
