import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebaseInit'
import { useState } from 'react'

export const useRemoveUser = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const removeUser = async (role, userId) => {
    console.log(role)
    console.log(userId)
    try {
      const userRef = deleteDoc(doc(db, role, userId))
    } catch (e) {
      setError('Ошибка обновления данных')
    } finally {
      setLoading(false)
    }
  }
  return { removeUser, loading, error }
}
