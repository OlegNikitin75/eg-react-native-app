import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { AppField } from '../../components'
import {
  LockLightSvgComponent,
  UserLightSvgComponent
} from '../../components/icons'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { useGeneratedPassword } from '../../hooks/useGeneratedPassword'
import { Picker } from '@react-native-picker/picker'


const AdminAddStudent = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const { getRandomNumber, userPassword } = useGeneratedPassword('')
  const [selectedGroup, setSelectedGroup] = useState('ЭТ-11')

  const createUser = () => {
    if (lastName && firstName && selectedGroup && userPassword) {
      const newUser = {
        lastName,
        firstName,
        selectedGroup,
        userPassword
      }
      console.log(newUser)
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
      <View>
        <Text style={{ fontFamily: 'Play-Bold' }} className='text-whiteColor text-base pl-5 mb-2.5'>Группа</Text>
        <View className='rounded-xl overflow-hidden mb-4'>
          <Picker
            style={{
              width: '100%',
              borderRadius: 20,
              color: '#6C757D',
              backgroundColor: '#292E33'
            }}
            mode='dropdown'
            dropdownIconColor='#6C757D'
            selectedValue={selectedGroup}
            onValueChange={(itemValue) =>
              setSelectedGroup(itemValue)
            }>
            <Picker.Item label='ЭТ-11' value='ЭТ-11' style={{
              backgroundColor: '#292E33', color: '#6C757D', width: '100%'
            }}
            />
            <Picker.Item label='ЭМ-11' value='ЭМ-11' style={{
              backgroundColor: '#292E33', color: '#6C757D'
            }}
            />
            <Picker.Item label='ЭС-11' value='ЭС-11' style={{
              backgroundColor: '#292E33', color: '#6C757D'
            }}
            />
            <Picker.Item label='МЭС-11' value='МЭС-11' style={{
              backgroundColor: '#292E33', color: '#6C757D'
            }}
            />

          </Picker>
        </View>

      </View>
      <View className='mb-3'>
        <AppField bg='bg-blackColor'
                  labelColor='text-whiteColor'
                  label='Пароль'
                  placeholder='Пароль'
                  value={userPassword}
                  editable={false}>

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
