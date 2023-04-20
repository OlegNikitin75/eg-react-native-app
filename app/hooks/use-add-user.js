import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../firebaseInit'
import { useState } from 'react'

export const useAddUser = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const addUser = async (dataUser, role) => {
    const userRef = doc(db, 'users', 'items')
    try {
      setLoading(true)
      await updateDoc(userRef, {
        [role]: arrayUnion(dataUser)
      })
    } catch (e) {
      setError('Ошибка обновления данных')

    } finally {
      setLoading(false)
    }

  }
  return { addUser, loading, error }
}
