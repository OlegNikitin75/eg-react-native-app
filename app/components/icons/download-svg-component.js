import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const DownloadSvgComponent = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 17.5v-14M20.5 21.5h-16M17.5 12.5l-5.001 5.001-5-5.001"
      stroke="#CAFFBF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
