import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDeleteStore } from '../../data/stores/useDeleteStore'

export const AppButtonDelete = () => {
  const [setActiveMode] = useDeleteStore(state => [state.setActiveMode])

  return (
    <TouchableOpacity onPress={() => setActiveMode()}>
      <Text className='text-[#FFADAD] text-xs mr-3' style={{ fontFamily: 'Play-Regular' }}>Удалить</Text>
    </TouchableOpacity>
  )
}

