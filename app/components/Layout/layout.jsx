import React from 'react'
import { Header } from './header/header'
import { View } from 'react-native'

const Layout = ({ children, title }) => {
  return (
    <View className='bg-bgColor p-3 flex-1'>
      <Header title={title} />
      {children}
    </View>
  )
}

export default Layout
