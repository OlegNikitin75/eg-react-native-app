import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CoursesSvgComponentFocused = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="m9.703 4.095-6.174 3.43c-1.298.721-1.298 2.587 0 3.308l6.174 3.43a4.733 4.733 0 0 0 4.594 0l6.174-3.43c1.298-.721 1.298-2.587 0-3.308l-6.174-3.43a4.733 4.733 0 0 0-4.594 0Z"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.991 12.2v3.924c0 .949.475 1.834 1.264 2.359l1.607 1.069a5.666 5.666 0 0 0 6.275 0l1.607-1.069a2.832 2.832 0 0 0 1.264-2.359V12.2"
      stroke="#292E33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
