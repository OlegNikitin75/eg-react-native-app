import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

export const Loader = () => {
  const COLORS = ['#BDB2FF', '#A0C4FF']
  const [color, setColor] = useState(COLORS[0])

  useEffect(() => {
    const id = setInterval(() => {
      setColor(color => (color === COLORS[0] ? COLORS[1] : COLORS[0]))
    }, 500)
    return () => clearInterval(id)
  }, [])

  return (
    <View className="absolute z-50 inset-0 flex items-center justify-center bg-bgColor/80">
      <ActivityIndicator size="large" color={color} />
    </View>
  )
}

