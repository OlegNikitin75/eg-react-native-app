import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useSetNameAdmin = () => {
  const [nameAdmin, setNameAdmin] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setName = async () => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        const admin = doc.data().admin
        const adminFullName = `${admin[0].firstName} ${admin[0].lastName}`
        setNameAdmin(adminFullName)
      })
    } catch (e) {
      setError('Что-то пошло не так. Повторите попытку')
    } finally {
      setLoading(false)
    }


  }
  return { nameAdmin, loading, setName, error }
}
