import { createContext, useContext, useEffect, useState } from 'react'
import { useAxios } from '../Hooks/useAxios'

const STORAGE_KEY = 'begopa-user'
const ONE_DAY_IN_MILLIS = 1000 * 60 * 60 * 24

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const { post } = useAxios()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY)
    if (!storedData) return

    const userData = JSON.parse(storedData)
    const { token, expiresAt } = userData
    const expires = Number(expiresAt)
    const now = new Date().getTime()

    const expired = expires < now

    if (expired) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }

    const timeToExpiry = expires - now

    if (timeToExpiry < ONE_DAY_IN_MILLIS) {
      refreshToken(userData, token)
    } else {
      setTimeout(() => {
        refreshToken(userData, token)
      }, timeToExpiry - ONE_DAY_IN_MILLIS)
    }

    setToken(token)
    setIsLoggedIn(true)
  }, [])

  const handleLogin = loginResponse => {
    const { token } = loginResponse
    setIsLoggedIn(true)
    setToken(token)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loginResponse))
  }

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setIsLoggedIn(false)
    setToken(undefined)
  }

  const refreshToken = async (userInfo, token) => {
    try {
      const { token: newToken, expiresAt: newExpiry } = await post(
        '/user/token-refresh',
        undefined,
        token
      )
      setToken(newToken)
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...userInfo,
          token: newToken,
          expiresAt: newExpiry,
        })
      )
    } catch (e) {
      console.log('Could not refresh token', e)
    }
  }

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    handleLogin,
    handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useContextAuth = () => {
  return useContext(AuthContext)
}
