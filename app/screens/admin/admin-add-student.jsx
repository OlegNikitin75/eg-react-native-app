import React, { useState } from 'react'
import { View } from 'react-native'
import { AppField } from '../../components'
import {
  LockLightSvgComponent,
  UserLightSvgComponent,
  UsersSvgComponent
} from '../../components/icons'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { useGeneratedPassword } from '../../hooks/useGeneratedPassword'

const AdminAddStudent = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [group, setGroup] = useState('')
  const { getRandomNumber, userPassword } = useGeneratedPassword()

  const createUser = () => {
    if (lastName && firstName && group && userPassword) {
      const newUser = {
        lastName,
        firstName,
        group,
        userPassword
      }
    }
  }

  return (
    <View className='relative bg-bgColor flex-1 p-3'>
      <View className='mb-3'>
        <AppField bg='bg-blackColor'
                  labelColor='text-whiteColor'
                  label='Фамилия студента'
                  placeholder='Введите фамилию'
                  onChangeText={(text) => setLastName(text)}
        >
          <View className='absolute left-3 top-3.5 z-10'>
            <UserLightSvgComponent />
          </View>
        </AppField>
      </View>
      <View className='mb-3'>
        <AppField bg='bg-blackColor'
                  labelColor='text-whiteColor'
                  label='Имя студента'
                  placeholder='Введите имя'
                  onChangeText={(text) => setFirstName(text)}>

          <View className='absolute left-3 top-3.5 z-10'>
            <UserLightSvgComponent />
          </View>

        </AppField>
      </View>
      <View className='mb-3'>
        <AppField bg='bg-blackColor'
                  labelColor='text-whiteColor'
                  label='Учебная группа'
                  placeholder='Введите группу'
                  onChangeText={(text) => setGroup(text)}>
          <View className='absolute left-3 top-3.5 z-10'>
            <UsersSvgComponent />
          </View>

        </AppField>
      </View>
      <View className='mb-3'>
        <AppField bg='bg-blackColor'
                  labelColor='text-whiteColor'
                  label='Пароль'
                  placeholder='Пароль'
                  value={userPassword}>
          <View className='absolute left-3 top-3.5 z-10'>
            <LockLightSvgComponent />
          </View>

        </AppField>
      </View>
      <View>
        <AppButtonOption onPress={() => getRandomNumber('students')} name='Сгенерировать пароль' bg='bg-primary'
                         color='text-blackColor' height='h-12' />
      </View>
      <View className='mt-auto'>
        <AppButtonOption onPress={() => createUser()} name='Готово' bg='bg-primary' color='text-blackColor'
                         height='h-16' />
      </View>
    </View>
  )
}

export default AdminAddStudent
