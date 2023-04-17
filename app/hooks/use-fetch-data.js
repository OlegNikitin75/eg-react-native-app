import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useFetchData = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [userData, setUserData] = useState([])
  const [fullData, setFullData] = useState([])
  const [query, setQuery] = useState('')

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
    setQuery(text)
    const filteredData = fullData.filter(item => {
      return (item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLowerCase()) ||
        item.group.toLowerCase().includes(query.toLowerCase()))
    })
    setUserData(filteredData)
  }
  return { getData, handleSearch, data, userData, error, loading, setQuery, query, setUserData }
}
