import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { UserSvgComponent } from '../../components/icons'
import { AppField, AppListItem, FieldError } from '../../components'
import { AppButtonOption } from '../../components/ui/app-button-option'
import { useDeleteStore } from '../../data/stores/useDeleteStore'
import { AppButtonDeleteItem } from '../../components/ui/app-button-delete-item'
import AdminAddStudent from './admin-add-student'
import { useFetchData } from '../../hooks/use-fetch-data'
import { Loader } from '../../components/loader/loader'

const AdminStudents = ({ navigation }) => {

  const {
    getData,
    handleSearch,
    userData,
    error,
    loading,
    text
  } = useFetchData()

  const isFocused = useIsFocused()
  useEffect(() => {
    getData('students').then(() => {
      console.log('Данные получены')
    })
  }, [isFocused])

  const [activeDeleteMode] = useDeleteStore(state => [state.activeDeleteMode])

  return (
    <View className='relative bg-bgColor flex-1 p-3'>
      {loading && <Loader />}
      {error && <FieldError>{error}</FieldError>}
      <AppField
        placeholder='Найти студента'
        value={text}
        onChangeText={(text) =>
          handleSearch(text)
        }
      >
        <View className='absolute left-3 top-3.5 z-10'>
          <UserSvgComponent />
        </View>

      </AppField>
      <View className='py-3 flex-auto'>
        <FlatList
          data={userData}
          renderItem={({ item }) =>
            <AppListItem>
              <View>
                <Text style={{ fontFamily: 'Play-Bold' }}
                      className='text-whiteColor text-lg'>{`${item.lastName} ${item.firstName}`}</Text>
                <Text style={{ fontFamily: 'Play-Regular' }} className='text-whiteColor text-base'>({item.group})</Text>
                <Text style={{ fontFamily: 'Play-Regular' }}
                      className='text-mediumGreyColor text-sm'>{item.password}</Text>
              </View>
              {activeDeleteMode && <AppButtonDeleteItem />}
            </AppListItem>}
          keyExtractor={item => item.password}
        />
      </View>
      <View className='mt-auto'>
        <AppButtonOption name='Добавить студента' bg='bg-primary' color='text-black' height='h-16'
                         onPress={() => navigation.navigate(AdminAddStudent)} />
      </View>
    </View>

  )
}

export default AdminStudents
