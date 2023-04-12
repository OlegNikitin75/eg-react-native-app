import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowBackSvgComponent = props => (
  <Svg
    width={12}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m10.5 1-9 9.002L10.495 19"
      stroke="#CAFFBF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
