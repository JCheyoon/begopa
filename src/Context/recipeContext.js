import { createContext, useContext, useEffect, useState } from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useContextAuth } from './authContext'

function createTags(recipes) {
  const tagsOccurrence = {}
  recipes.forEach(({ tags }) => {
    tags.forEach(tag => {
      if (!tagsOccurrence[tag]) {
        tagsOccurrence[tag] = 1
      } else {
        tagsOccurrence[tag]++
      }
    })
  })
  const tagsByFrequency = Object.entries(tagsOccurrence) // [[pork, 3], [tomato, 1], ...]
    .sort((a, b) => b[1] - a[1])
  return {
    frequents: [...tagsByFrequency.slice(0, 6).map(entry => entry[0])],
    others: [...tagsByFrequency.slice(6).map(entry => entry[0])],
  }
}

const RecipeContext = createContext({})

export const RecipeProvider = ({ children }) => {
  const { token, isLoggedIn } = useContextAuth()
  const { post, get, put, remove } = useAxios()
  const [allRecipes, setAllRecipes] = useState([])
  const [myRecipes, setMyRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [tags, setTags] = useState({ frequents: [], others: [] })

  useEffect(() => {
    if (!isLoggedIn) {
      setMyRecipes([])
    }
  }, [isLoggedIn])

  const fetchInitialRecipes = async () => {
    const response = await get('/recipe/list')
    if (!response?.data) return
    setAllRecipes([...response.data])
    setFilteredRecipes([...response.data.slice(0, 6)])
    setTags(createTags(response.data))
  }

  const fetchMyRecipes = async () => {
    const response = await get('/recipe/my-list', token)
    if (!response?.data) return
    setMyRecipes([...response.data])
  }

  const fetchAllRecipes = async () => {
    setFilteredRecipes([...allRecipes])
  }

  const saveNewRecipe = recipeData => {
    if (!token) return
    return post('/recipe', recipeData, token)
  }

  const updateRecipe = (recipeData, recipeId) => {
    if (!token) return
    return put(`/recipe/${recipeId}`, recipeData, token)
  }

  const deleteRecipe = id => {
    return remove(`/recipe/${id}`, token)
  }

  const filterByTag = tag => {
    // get the tag as the parameter
    // filter allRecipes array to those which recipe.tags include the selected tag
    const filtered = allRecipes.filter(recipe => {
      return recipe.tags.includes(tag)
    })
    // set the setFilteredRecipes to this filtered array
    setFilteredRecipes(filtered)
  }

  const filterByName = searchField => {
    const filtered = allRecipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchField)
    })
    setFilteredRecipes(filtered)
  }

  const getRelatedRecipes = (tags, id) => {
    const filtered = [...allRecipes, ...myRecipes].filter(recipe => {
      return tags.some(tag => recipe.tags.includes(tag)) && recipe.id !== id
    })
    const relatedMap = new Map()
    filtered.forEach(recipe => {
      relatedMap.set(recipe.id, recipe)
    })
    return Array.from(relatedMap.values()).slice(0, 3)
  }

  const value = {
    saveNewRecipe,
    updateRecipe,
    filteredRecipes,
    fetchInitialRecipes,
    fetchAllRecipes,
    fetchMyRecipes,
    allRecipes,
    myRecipes,
    deleteRecipe,
    tags,
    filterByTag,
    filterByName,
    getRelatedRecipes,
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}

export const useContextRecipe = () => {
  return useContext(RecipeContext)
}
