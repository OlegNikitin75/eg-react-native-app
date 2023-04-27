import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseInit'
import { useState } from 'react'

export const useAddUser = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [userId, setUserID] = useState('')

  const addUser = async (dataUser, role) => {
    try {
      setLoading(true)
      if (role === 'students') {
        const docRef = await addDoc(collection(db, 'students'), {
          firstName: dataUser.firstName,
          lastName: dataUser.lastName,
          group: dataUser.group,
          password: dataUser.password
        })
        setUserID(docRef.id)
      }
      if (role === 'teachers') {
        const docRef = await addDoc(collection(db, 'teachers'), {
          firstName: dataUser.firstName,
          lastName: dataUser.lastName,
          middleName: dataUser.middleName,
          password: dataUser.password
        })
      }
    } catch (e) {
      setError('Ошибка обновления данных')
    } finally {
      setLoading(false)
    }
  }
  return { addUser, userId, loading, error }
}
