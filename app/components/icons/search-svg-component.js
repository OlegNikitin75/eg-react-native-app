import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const SearchSvgComponent = props => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M12.059 19.12a7.062 7.062 0 1 0 0-14.123 7.062 7.062 0 0 0 0 14.123Z"
      stroke="#6C757D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21.003 21.003-3.951-3.951"
      stroke="#6C757D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
