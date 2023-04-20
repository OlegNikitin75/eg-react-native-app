import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { AppListItem, FieldError } from '../../components'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { useDeleteStore } from '../../data/stores/useDeleteStore'
import { AppButtonDeleteItem } from '../../components/ui/app-button-delete-item'
import { useFetchData } from '../../hooks/use-fetch-data'
import { Loader } from '../../components/loader/loader'

const AdminTeachers = ({ navigation }) => {

  const {
    getData,
    userData,
    error,
    loading
  } = useFetchData()

  const isFocused = useIsFocused()
  useEffect(() => {
    getData('teachers').then(() => {
      console.log('Данные получены')
    })
  }, [isFocused])

  const [activeDeleteMode] = useDeleteStore(state => [state.activeDeleteMode])
  console.log(userData)
  return (
    <View className='relative bg-bgColor flex-1 p-3'>
      {loading && <Loader />}
      {error && <FieldError>{error}</FieldError>}
      <View className='py-3 flex-auto'>
        <FlatList
          data={userData}
          renderItem={({ item }) =>
            <AppListItem>
              <View>
                <Text style={{ fontFamily: 'Play-Bold' }}
                      className='text-whiteColor text-lg'>{`${item.lastName} ${item.firstName} ${item.middleName}`}</Text>
                <Text style={{ fontFamily: 'Play-Regular' }}
                      className='text-mediumGreyColor text-sm'>{item.password}</Text>
              </View>
              {activeDeleteMode && <AppButtonDeleteItem />}
            </AppListItem>}
          keyExtractor={item => item.password}
        />
      </View>
      <View className='mt-auto'>
        <AppButtonOption name='Добавить преподавателя' bg='bg-primary' color='text-black' height='h-16'
                         onPress={() => navigation.navigate('AdminAddTeacher')} />
      </View>
    </View>

  )
}

export default AdminTeachers
