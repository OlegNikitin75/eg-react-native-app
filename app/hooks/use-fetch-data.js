import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useFetchData = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [userData, setUserData] = useState([])
  const [fullData, setFullData] = useState([])

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
  useEffect(() => {
    setUserData(data)
    setFullData(data)
  }, [data])

  const handleSearch = (text) => {
    const filteredData = fullData.filter(item => {
      return (item.firstName.toLowerCase().includes(text.toLowerCase()) ||
        item.lastName.toLowerCase().includes(text.toLowerCase()) ||
        item.group.toLowerCase().includes(text.toLowerCase()))
    })
    setUserData(filteredData)
  }
  return { getData, handleSearch, data, userData, error, loading, setUserData, setFullData }
}
