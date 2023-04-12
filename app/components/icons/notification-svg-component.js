import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const NotificationSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.509 18.003v.512A2.489 2.489 0 0 0 12 21.004v0a2.49 2.49 0 0 0 2.491-2.49v-.511"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M17.95 18.003c1.134 0 2.053-.92 2.053-2.054v0c0-.577-.229-1.13-.636-1.537l-1.364-1.364v-4.05A6.003 6.003 0 0 0 12 2.997v0A6.003 6.003 0 0 0 5.998 9v4.05l-1.365 1.363c-.407.408-.636.96-.636 1.537v0a2.054 2.054 0 0 0 2.054 2.054H17.95Z"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
