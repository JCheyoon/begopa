import { createContext, useContext, useState } from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useContextAuth } from './authContext'

const RecipeContext = createContext({})

export const RecipeProvider = ({ children }) => {
  const { token } = useContextAuth()
  const { post, get, remove } = useAxios()
  const [allRecipes, setAllRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const fetchRecentRecipes = async () => {
    const response = await get('/recipe/list-recent')
    if (!response?.data) return
    setFilteredRecipes([...response.data])
  }

  const fetchMyRecipes = async () => {
    const response = await get('/recipe/my-list', token)
    if (!response?.data) return
    setAllRecipes([...response.data])
  }

  const fetchAllRecipes = async () => {
    const response = await get('/recipe/list')
    if (!response?.data) return
    setAllRecipes([...response.data])
    setFilteredRecipes([...response.data])
  }

  const saveNewRecipe = recipeData => {
    if (!token) return
    return post('/recipe', recipeData, token)
  }

  const deleteRecipe = id => {
    return remove(`/recipe/${id}`, token)
  }

  const value = {
    saveNewRecipe,
    filteredRecipes,
    fetchRecentRecipes,
    fetchAllRecipes,
    fetchMyRecipes,
    allRecipes,
    deleteRecipe,
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}

export const useContextRecipe = () => {
  return useContext(RecipeContext)
}
