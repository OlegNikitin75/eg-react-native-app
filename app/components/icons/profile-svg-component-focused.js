import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ProfileSvgComponentFocused = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.364 5.636a9 9 0 0 1 0 12.728 9 9 0 1 1 0-12.728"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.99 8.324a2.813 2.813 0 1 1-3.98 3.978 2.813 2.813 0 0 1 3.98-3.978M17.707 18.958A7.848 7.848 0 0 0 12 16.5a7.845 7.845 0 0 0-5.707 2.459"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
