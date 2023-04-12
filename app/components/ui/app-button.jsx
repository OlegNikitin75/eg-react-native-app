import React, { useState } from 'react'
import { Text, TouchableHighlight } from 'react-native'

export const AppButton = ({
                            title,
                            width,
                            color,
                            activeColor,
                            bg,
                            activeBgColor,
                            border,
                            route,
                            onPress
                          }) => {
  const [BtnColor, setBtnColor] = useState(color)
  return (
    <TouchableHighlight onPressIn={() => setBtnColor(activeColor)} onPressOut={() => setBtnColor(color)}
                        underlayColor={activeBgColor}
                        onPress={() => onPress()}
                        className={`
      ${bg ? bg : ''}
      ${width ? width : 'w-full'} 
      ${border ? 'border-[1px] border-blackColor' : ''}
      rounded-xl py-3 flex justify-center items-center
      `}
    >
      <Text
        style={{ fontFamily: 'Play-Bold' }}
        className={`text-xl ${BtnColor}`}
      >
        {title}
      </Text>
    </TouchableHighlight>
  )
}
