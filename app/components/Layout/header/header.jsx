import React from 'react'
import { View } from 'react-native'
import { AppLink } from '../../ui/app-link'
import { AppHeading } from '../../ui/app-heading'
import { AppButtonDelete } from '../../ui/app-button-delete'


export const Header = ({ title }) => {


  return <View className='flex-row items-center justify-between'>
    <AppLink />
    <AppHeading title={title} />
    <AppButtonDelete />
  </View>
}
