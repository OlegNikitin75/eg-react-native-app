import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const AppField = props => {
  const { label, labelColor, value, onChangeText, placeholder, bg } = props
  return (
    <View className='mb-1.5'>
      {label &&
        <Text style={{ fontFamily: 'Play-Bold' }}
              className={`
              ${labelColor ? labelColor : null}
               text-base mb-2 pl-5`}>
          {label}
        </Text>
      }
      <View className='relative'>
        <View className='z-10 absolute left-2 top-3.5'>{props.children}</View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={`${bg ? '#6C757D' : null}`}
          style={{ fontFamily: 'Play-Regular' }}
          className={`
          ${bg ? bg : 'bg-white'} 
          ${bg ? null : 'focus:border-2 focus:bg-whiteColor'}
          ${bg ? 'placeholder-mediumGreyColor' : ''}
          text-base  placeholder:text-lg border-[1px] border-blackColor rounded-xl py-3 pl-10 pr-3 `}
        />
      </View>
    </View>
  )
}
