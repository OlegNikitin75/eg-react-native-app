import React, { useState } from 'react'
import { View } from 'react-native'
import { AppField, FieldError } from '../../components'
import {
  LockLightSvgComponent,
  UserLightSvgComponent
} from '../../components/icons'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { useGeneratedPassword } from '../../hooks/use-generated-password'
import { useAddUser } from '../../hooks/use-add-user'
import AdminScreenMessage from './admin-screen-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Loader } from '../../components/loader/loader'

const AdminAddStudent = ({ navigation }) => {
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [firstName, setFirstName] = useState('')

  const { getRandomNumber, userPassword, setUserPassword } =
    useGeneratedPassword()
  const { addUser, error, loading } = useAddUser()

  const createUser = () => {
    if (lastName && firstName && middleName && userPassword) {
      const newUser = {
        lastName,
        firstName,
        middleName,
        password: userPassword
      }
      addUser(newUser, 'teachers').then(() =>
        navigation.navigate('AdminScreenMessage', {
          title: 'Преподаватель'
        })
      )
      setLastName('')
      setMiddleName('')
      setFirstName('')
      setUserPassword('')
    }
  }

  return (
    <View className="relative bg-bgColor flex-1 p-3">
      {loading && <Loader />}
      {error && <FieldError>{error}</FieldError>}
      <KeyboardAwareScrollView className="flex-grow-0">
        <View className="mb-3">
          <AppField
            bg="bg-blackColor"
            labelColor="text-whiteColor"
            label="Фамилия преподавателя"
            placeholder="Введите фамилию"
            value={lastName}
            onChangeText={text => setLastName(text)}
          >
            <View className="absolute left-3 top-3.5 z-10">
              <UserLightSvgComponent />
            </View>
          </AppField>
        </View>
        <View className="mb-3">
          <AppField
            bg="bg-blackColor"
            labelColor="text-whiteColor"
            label="Имя преподавателя"
            placeholder="Введите имя"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          >
            <View className="absolute left-3 top-3.5 z-10">
              <UserLightSvgComponent />
            </View>
          </AppField>
        </View>
        <View className="mb-3">
          <AppField
            bg="bg-blackColor"
            labelColor="text-whiteColor"
            label="Отчество преподавателя"
            placeholder="Введите отчество"
            value={middleName}
            onChangeText={text => setMiddleName(text)}
          >
            <View className="absolute left-3 top-3.5 z-10">
              <UserLightSvgComponent />
            </View>
          </AppField>
        </View>
        <View className="mb-3">
          <AppField
            bg="bg-blackColor"
            labelColor="text-whiteColor"
            label="Пароль"
            placeholder="Пароль"
            value={userPassword}
            editable={false}
          >
            <View className="absolute left-3 top-3.5 z-10">
              <LockLightSvgComponent />
            </View>
          </AppField>
        </View>
      </KeyboardAwareScrollView>
      <View className="mb-3">
        <AppButtonOption
          onPress={() => getRandomNumber('teachers')}
          name="Сгенерировать пароль"
          bg="bg-primary"
          color="text-blackColor"
          height="h-12"
        />
      </View>
      <View className="mt-auto">
        <AppButtonOption
          onPress={() => createUser()}
          name="Готово"
          bg="bg-primary"
          color="text-blackColor"
          height="h-16"
          disabled={!firstName || !lastName || !middleName || !userPassword}
        />
      </View>
    </View>
  )
}

export default AdminAddStudent
