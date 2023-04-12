import React, {createContext, useState} from 'react'

export const AuthContext = createContext(undefined, undefined)

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userRole, setUserRole] = useState(null)


  const login = (role) => {
    setUserRole(role)
    setIsLoading(false)
  }
  const logout = () => {
    setUserRole(null)
    setIsLoading(false)
  }
  return (
    <AuthContext.Provider value={{login, logout, isLoading, userRole}}>
      {children}
    </AuthContext.Provider>
  )
}
