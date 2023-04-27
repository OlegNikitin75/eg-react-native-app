import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseInit'

export const useFetchData = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [userData, setUserData] = useState([])
  const [data, setData] = useState([])
  const [fullData, setFullData] = useState([])
  let dataTemp = []

  const getData = async role => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, role))
      querySnapshot.forEach(doc => {
        const user = doc.data()
        dataTemp.push(user)
      })
      setData(dataTemp)
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

  const handleSearch = text => {
    const filteredData = fullData.filter(item => {
      return (
        item.firstName.toLowerCase().includes(text.toLowerCase()) ||
        item.lastName.toLowerCase().includes(text.toLowerCase()) ||
        item.group.toLowerCase().includes(text.toLowerCase())
      )
    })
    setUserData(filteredData)
  }
  return {
    getData,
    handleSearch,
    data,
    userData,
    error,
    loading,
    setUserData,
    setFullData
  }
}
