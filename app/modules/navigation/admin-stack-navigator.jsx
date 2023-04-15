import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { routesAdmin } from './routes'
import { AppHeading, FieldError } from '../../components'
import { AppButtonDelete } from '../../components/ui/app-button-delete'
import { useSetNameAdmin } from '../../hooks/use-set-name-admin'
import { Loader } from '../../components/loader/loader'
import { ButtonBackSvgComponent } from '../../components/icons'

const Stack = createStackNavigator()

export const AdminStackNavigator = () => {
  const { nameAdmin, setName, loading, error } = useSetNameAdmin()
  useEffect(() => {
    setName().then(res => {
    })
  }, [])

  return (
    <Stack.Navigator
      initialRouteName='AppAdmin'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#17191C',
          height: 70,
          shadowColor: 'transparent',
          elevation: 0


        },
        headerTintColor: '#CAFFBF',
        headerTitleAlign: 'center',
        headerBackTitle: 'Назад',

        headerBackTitleStyle: {
          fontSize: 12,
          color: 'red'
        }
      }}
    >
      {routesAdmin.map(route => (
        <Stack.Screen
          options={{
            headerBackImage: () => {
              return <ButtonBackSvgComponent />
            },
            headerTitle: () => {
              if (route.title) {
                return <AppHeading title={route.title} />
              }
              if (route.name === 'AdminMain') {
                return (<View className='relative'>
                  {loading && <Loader />}
                  {error && <FieldError>{error}</FieldError>}
                  <Text style={{ fontFamily: 'Play-Bold' }} className='text-lg text-whiteColor'>{nameAdmin}</Text>
                  <Text style={{ fontFamily: 'Play-Regular' }}
                        className='text-mediumGreyColor text-base'>Администратор</Text>
                </View>)
              }
            },
            headerRight: () => {
              if (route.isDelete) {
                return <AppButtonDelete />
              }
            }
          }}
          name={route.name}
          component={route.component}
          key={route.name}
        />
      ))}
    </Stack.Navigator>
  )
}
