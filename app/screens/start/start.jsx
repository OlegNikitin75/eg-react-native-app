import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { AppButton } from '../../components'
import { useNavigation } from '@react-navigation/native'

const Start = ({ navigation }) => {
  return (
    <View className="bg-secondary flex-1">
      <ImageBackground
        source={require('../../assets/images/bg-start.jpg')}
        className="w-full h-full object-cover"
      >
        <View className="mt-auto mb-0 px-3.5 pb-8">
          <Text
            style={{ fontFamily: 'Play-Bold' }}
            className="
          text-blackColor tracking-wider text-5xl mb-4"
          >
            Смарт обучение в телефоне
          </Text>
          <Text className="text-base mb-12 tracking-wider">
            Удобный помощник в вашем телефоне
          </Text>
          <AppButton
            title="Давайте начнем"
            bg="bg-white"
						border={true}
						onPress={()=>{navigation.navigate('Login')}}
            activeBgColor="#292E33"
            activeColor="text-whiteColor"
            color="text-blackColor"
          />
        </View>
      </ImageBackground>
    </View>
  )
}
export default Start
