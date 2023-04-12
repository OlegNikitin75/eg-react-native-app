import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CalendarSvgComponentFocused = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 2v4M8 2v4M3 9h18"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M19 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M12.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M17.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M7.013 16.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M12.013 16.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
