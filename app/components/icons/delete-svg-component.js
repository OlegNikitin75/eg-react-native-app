import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const DeleteSvgComponent = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <Path
        stroke='#FFADAD'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.773 12.227l-7.546 7.546M19.773 19.773l-7.546-7.546'
      ></Path>
      <Path
        stroke='#FFADAD'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16 28v0C9.372 28 4 22.628 4 16v0C4 9.372 9.372 4 16 4v0c6.628 0 12 5.372 12 12v0c0 6.628-5.372 12-12 12z'
      ></Path>
    </Svg>
  )
}

