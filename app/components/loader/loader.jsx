import React from 'react'
import { Image, View } from 'react-native'

const Loader = () => {
  return (
    <View className='absolute inset-0 bg-blackColor/60 items-center justify-center'>
      <View className='w-16 h-16'>
        <Image className='w-full h-full object-cover animate-spin'
               source={require('../../assets/images/load-icon.png')}
        />
      </View>

    </View>

  )
}


export default Loader
