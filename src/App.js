import { Route, Routes } from 'react-router-dom'

import Home from './Routes/Home/Home'
import Authentication from './Routes/Authentication/Authentication'
import Recipe from './Routes/Recipe/Recipe'
import SubmitRecipe from '../src/Routes/SubmitRecipe/SubmitRecipe'
import Navigation from './Components/Navigation/Navigation.component'
import MyRecipes from './Routes/MyRecipes/MyRecipes'
import { AuthProvider } from './Context/authContext'

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="submit" element={<SubmitRecipe />} />
        <Route path="my-recipes" element={<MyRecipes />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
