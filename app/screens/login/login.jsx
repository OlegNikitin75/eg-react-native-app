import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { AppButton, AppField, FieldError } from '../../components'
import {
  LockSvgComponent,
  UserSvgComponent
} from '../../components/icons'
import { useAuth } from '../../hooks/use-auth'
import { Loader } from '../../components/loader/loader'

const Login = () => {

  const { handleLogin, error, name, setName, password, setPassword, loading } = useAuth()
  return (

    <View className='relative bg-secondary flex-1'>
      {loading && <Loader />}
      {error && <FieldError>{error}</FieldError>}

      <ImageBackground
        source={require('../../assets/images/bg-login.jpg')}
        className='w-full h-full object-cover'
      >
        <KeyboardAvoidingView className='mt-auto mb-0 px-3 pb-8' enabled
                              behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <Text
            style={{ fontFamily: 'Play-Bold' }}
            className='text-blackColor tracking-wider text-2xl mb-2'
          >
            Рады видеть Вас
          </Text>

          <Text className='text-base tracking-wider mb-3'>
            Для входа в приложение введите Ваше имя и фамилию и пароль. Если Вы
            забыли пароль, обратитесь к преподавателю.
          </Text>
          <AppField
            label='Введите имя и фамилию'
            placeholder='Имя Фамилия'
            value={name}
            onChangeText={setName}
          >
            <View className='absolute left-3 top-3.5 z-10'>
              <UserSvgComponent />
            </View>

          </AppField>
          <AppField
            label='Введите пароль'
            placeholder='Пароль'
            value={password}
            onChangeText={setPassword}
          >
            <View className='absolute left-3 top-3.5 z-10'>
              <LockSvgComponent />
            </View>
          </AppField>
          <AppButton
            title='Войти'
            onPress={handleLogin}
            bg='bg-white'
            border={true}
            activeBgColor='#292E33'
            activeColor='text-whiteColor'
            color='text-blackColor'
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>

  )
}
export default Login
