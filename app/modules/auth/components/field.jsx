import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const Field = props => {
  const { label, value, onChangeText, placeholder } = props
  return (
    <View className='mb-1.5'>
      <Text style={{ fontFamily: 'Play-Bold' }} className='text-base mb-2'>
        {label}
      </Text>
      <View className='relative'>
        <View className='z-10 absolute left-2 top-3.5'>{props.children}</View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          onBlur={event => {
          }}
          placeholder={placeholder}
          style={{ fontFamily: 'Play-Regular' }}
          className='text-base bg-white placeholder:text-lg border-[1px] border-blackColor rounded-xl py-3 pl-10 pr-3 focus:border-2 focus:bg-whiteColor'
        />
      </View>
    </View>
  )
}
