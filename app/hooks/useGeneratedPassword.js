import { useState } from 'react'

export const useGeneratedPassword = () => {
  const [userPassword, setUserPassword] = useState('')

  let password = ''

  const genPassword = (min, max, role) => {

    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const randomNum = Math.floor(Math.random() * (max - min)) + min

    if (max === 10) {
      password = password + number[randomNum]
    }
    if (max === 26) {
      password = password + letter[randomNum]
    }
    if (password.length === 7) setUserPassword(`${role[0]}`.concat(password))

  }

  const getRandomNumber = (role) => {
    const lengthPassword = 7
    for (let index = 0; index < lengthPassword; index++) {
      const randomNumber = Math.random()
      randomNumber < 0.5 ? genPassword(0, 10, role) : genPassword(0, 26, role)
    }
  }
  return { getRandomNumber, userPassword }
}



