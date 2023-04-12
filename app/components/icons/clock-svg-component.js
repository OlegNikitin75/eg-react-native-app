import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ClockSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.557 3.687a8.998 8.998 0 0 1 11.756 4.87 8.998 8.998 0 0 1-4.87 11.756A8.998 8.998 0 1 1 8.557 3.687"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.718 7.985v4.651l3.656 2.229"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
