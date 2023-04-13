import { AuthContext } from '../modules/auth'
import { useContext, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useAuth = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)

  const closeError = () => {
    setTimeout(() => {
      setError('')
    }, 3000)
  }
  const getData = async (role, nameMod, passwordMod) => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        const users = doc.data()[role]
        users.forEach(user => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase().trim()
          if (fullName === nameMod && user.password === passwordMod) {
            if (role === 'teachers' || 'students') {
              login('user')
            }
            if (role === 'admin') {
              login('admin')
            }
            setName('')
            setPassword('')
          } else {
            setError('Вы ввели неправильное имя или пароль')
            closeError()
          }
        })
      })
    } catch (e) {
      setError('Что-то пошло не так. Повторите попытку')
    } finally {
      setLoading(false)
    }
  }


  const handleLogin = () => {
    if (name && password) {
      const nameMod = name.toLowerCase().trim()
      const passwordMod = password.toLowerCase().trim()

      const roleIndex = passwordMod[0]
      switch (roleIndex) {
        case 'a':
          getData('admin', nameMod, passwordMod).then(res => {
          })
          break
        case 't':
          getData('teachers', nameMod, passwordMod).then(res => {
          })
          break
        case 's':
          getData('students', nameMod, passwordMod).then(res => {
          })
          break
      }
    }
  }
  return { handleLogin, error, setError, name, setName, password, setPassword, loading }
}
