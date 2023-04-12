import * as React from 'react'
import Svg, { Rect } from 'react-native-svg'

export const CircleSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={24} height={24} rx={12} fill="#495057" />
  </Svg>
)
