import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const FilterSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.121 4.879A3 3 0 1 1 3.88 9.12 3 3 0 0 1 8.12 4.88M20 7H9M20.121 14.879a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242M4 17h11"
      stroke="#6C757D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
