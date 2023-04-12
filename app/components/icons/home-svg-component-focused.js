import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const HomeSvgComponentFocused = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M9.5 20.5V16a2.5 2.5 0 0 1 2.5-2.5v0a2.5 2.5 0 0 1 2.5 2.5v4.5H20v-8.586a2 2 0 0 0-.586-1.414l-6.707-6.707a.999.999 0 0 0-1.414 0L4.586 10.5A2 2 0 0 0 4 11.914V20.5h5.5Z"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
