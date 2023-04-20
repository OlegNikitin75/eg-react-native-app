import React from 'react'
import { Image, Text, View } from 'react-native'
import { AppButtonOption } from '../../components/ui/app-button-option'

const AdminScreenMessage = ({ navigation, route }) => {
  const params = route.params

  return (
    <View className='relative bg-bgColor flex-1 p-3 justify-center items-center'>

      <View className='items-center flex-auto justify-center'>
        <Image style={{ width: 100, height: 100, marginBottom: 20 }}
               source={require('../../assets/images/check.png')}></Image>
        <Text style={{ fontFamily: 'Play-Bold' }}
              className='text-4xl text-whiteColor text-center'>{params.title} добавлен</Text>
      </View>
      <View className='mt-auto w-full'>
        <AppButtonOption name='Готово' bg='bg-primary' color='text-black' height='h-16'
                         onPress={() => {
                           navigation.goBack()
                         }} />
      </View>

    </View>
  )
}

export default AdminScreenMessage
