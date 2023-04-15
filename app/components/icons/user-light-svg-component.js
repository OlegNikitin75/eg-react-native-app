import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const UserLightSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M14.475 4.525a3.5 3.5 0 1 1-4.95 4.95 3.5 3.5 0 0 1 4.95-4.95'
      stroke='#6C757D'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      clipRule='evenodd'
      d='M4 18.5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-3.026-3.952-4.992-8-4.992S4 15.474 4 18.5Z'
      stroke='#6C757D'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
