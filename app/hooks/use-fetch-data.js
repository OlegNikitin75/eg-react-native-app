import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useFetchData = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const getData = async (role) => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        const users = doc.data()[role]
        setData(users)
      })
    } catch (e) {
      setError('Ошибка получения данных')

    } finally {
      setLoading(false)
    }
  }
  return { getData, data, error, loading }
}
