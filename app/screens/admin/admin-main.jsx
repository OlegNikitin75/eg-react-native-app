import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebaseInit'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { AuthContext } from '../../modules/auth'


const AdminMain = () => {
  const { logout } = useContext(AuthContext)

  const [nameAdmin, setNameAdmin] = useState('')
  const setName = async () => {
    const querySnapshot = await getDocs(collection(db, 'admin'))
    querySnapshot.forEach((doc) => {
      setNameAdmin(doc.data().name)
    })
  }

  useEffect(() => {
    setName().then(response => {
    })
  }, [])
  return (
    <View className='bg-bgColor flex-1 p-3'>
      <View className='pt-2.5 mb-4'>
        <Text style={{ fontFamily: 'Play-Bold' }} className='text-lg text-whiteColor'>{nameAdmin}</Text>
        <Text style={{ fontFamily: 'Play-Regular' }} className='text-mediumGreyColor text-base'>Администратор</Text>
      </View>
      <View className='flex-col justify-between gap-y-2'>
        <View>
          <AppButtonOption name='Студенты' />
        </View>
        <View>
          <AppButtonOption name='Преподаватели' />
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
