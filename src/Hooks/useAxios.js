import { default as axios } from 'axios'

export const useAxios = () => {
  const BASE_URL = process.env.REACT_APP_API_URL

  const get = (path, token) => {
    return axios.get(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    )
  }

  const post = (path, data, token) => {
    return axios.post(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    )
  }

  const put = (path, data, token) => {
    return axios.put(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    )
  }

  const remove = (path, token) => {
    return axios.delete(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    )
  }

  return {
    get,
    post,
    put,
    remove,
  }
}
