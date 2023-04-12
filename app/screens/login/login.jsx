import React, { useContext, useState } from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { AppButton } from '../../components'
import { Field } from '../../modules/auth'
import {
  LockSvgComponent,
  UserSvgComponent
} from '../../components/icons'
import { useAuth } from '../../hooks/useauth'
import Loader from '../../components/loader/loader'

const Login = () => {

  const { handleLogin, error, setError, name, setName, password, setPassword, loading } = useAuth()

  return (<>
      {!loading && <Loader />}
      {/*<View className='relative bg-secondary flex-1'>*/}
      {/*  {error && <Text style={{ fontFamily: 'Play-Bold' }}*/}
      {/*                  className={`${error ? 'top-0' : '-top-full'} */}
      {/*                absolute w-full text-center text-lg z-20 p-3 bg-red-500 text-whiteColor`}>{error}</Text>}*/}
      {/*  <ImageBackground*/}
      {/*    source={require('../../assets/images/bg-login.jpg')}*/}
      {/*    className='w-full h-full object-cover'*/}
      {/*  >*/}
      {/*    <KeyboardAvoidingView className='mt-auto mb-0 px-3 pb-8' enabled*/}
      {/*                          behavior={Platform.OS === 'ios' ? 'padding' : null}>*/}
      {/*      <Text*/}
      {/*        style={{ fontFamily: 'Play-Bold' }}*/}
      {/*        className='text-blackColor tracking-wider text-2xl mb-2'*/}
      {/*      >*/}
      {/*        Рады видеть Вас*/}
      {/*      </Text>*/}

      {/*      <Text className='text-base tracking-wider mb-3'>*/}
      {/*        Для входа в приложение введите Ваше имя и фамилию и пароль. Если Вы*/}
      {/*        забыли пароль, обратитесь к преподавателю.*/}
      {/*      </Text>*/}
      {/*      <Field*/}
      {/*        label='Введите имя и фамилию'*/}
      {/*        placeholder='Имя Фамилия'*/}
      {/*        value={name}*/}
      {/*        onChangeText={setName}*/}
      {/*      >*/}
      {/*        <UserSvgComponent />*/}
      {/*      </Field>*/}
      {/*      <Field*/}
      {/*        label='Введите пароль'*/}
      {/*        placeholder='Пароль'*/}
      {/*        value={password}*/}
      {/*        onChangeText={setPassword}*/}
      {/*      >*/}
      {/*        <LockSvgComponent />*/}
      {/*      </Field>*/}
      {/*      <AppButton*/}
      {/*        title='Войти'*/}
      {/*        onPress={handleLogin}*/}
      {/*        bg='bg-white'*/}
      {/*        border={true}*/}
      {/*        activeBgColor='#292E33'*/}
      {/*        activeColor='text-whiteColor'*/}
      {/*        color='text-blackColor'*/}
      {/*      />*/}
      {/*    </KeyboardAvoidingView>*/}
      {/*  </ImageBackground>*/}
      {/*</View>*/}
    </>
  )
}
export default Login
