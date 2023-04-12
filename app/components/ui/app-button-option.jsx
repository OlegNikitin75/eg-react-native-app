import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const AppButtonOption = ({
                                  name,
                                  width,
                                  height,
                                  bg,
                                  color,
                                  onPress
                                }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className={`
      ${width ? width : 'w-full'} 
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
    </TouchableOpacity>
  )
}
