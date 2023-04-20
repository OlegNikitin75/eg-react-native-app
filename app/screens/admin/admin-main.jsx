import React, { useContext } from 'react'
import { View } from 'react-native'
import { AppButtonOption } from '../../components/ui/app-button-option'
import AdminStudents from './admin-students'
import { AuthContext } from '../../modules/auth/context/auth-context'


const AdminMain = ({ navigation }) => {
  const { logout } = useContext(AuthContext)

  return (
    <View className='bg-bgColor flex-1 p-3'>
      <View className='flex-col justify-between gap-y-2'>
        <View>
          <AppButtonOption name='Студенты' onPress={() => navigation.navigate('AdminStudents')} />
        </View>
        <View>
          <AppButtonOption name='Преподаватели' onPress={() => navigation.navigate('AdminTeachers')} />
        </View>
        <View>
          <AppButtonOption name='Задания' />
        </View>
      </View>
      <View className='mt-auto'>
        <AppButtonOption name='Выйти' bg='bg-primary' color='text-black' height='h-16' onPress={logout} />
      </View>
    </View>
  )
}

export default AdminMain
