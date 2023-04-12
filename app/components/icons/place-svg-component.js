import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const PlaceSvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m8.927 16.002-.5 4.001M20.432 8.999V5.425a2.429 2.429 0 0 0-2.43-2.429H5.426a2.429 2.429 0 0 0-2.429 2.43v8.147a2.429 2.429 0 0 0 2.43 2.429H13"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M21.504 21.004h-6.503a.5.5 0 0 1-.5-.5v-.407a2.1 2.1 0 0 1 2.095-2.095h3.314a2.1 2.1 0 0 1 2.094 2.095v.406a.5.5 0 0 1-.5.5ZM18.253 15.502a2 2 0 1 1 .008 0h-.008Z"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.926 20.003H11"
      stroke="#6C757D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
