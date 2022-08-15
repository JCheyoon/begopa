import {
  NavbarContainer,
  SearchContainer,
  NavLink,
  NavButton,
  EmptyDiv,
} from '../Navbar/Navbar.style'
import { useContextAuth } from '../../../Context/authContext'
import { useState } from 'react'
import { useContextRecipe } from '../../../Context/recipeContext'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContextAuth()
  const [searchField, setSearchField] = useState('')
  const { filterByName } = useContextRecipe()
  const location = useLocation()

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      filterByName(searchField)
    }
  }

  return (
    <NavbarContainer>
      {location.pathname === '/' ? (
        <SearchContainer>
          Browse Recipes
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={onSearchChange}
            onKeyUp={handleKeyPress}
          />
          <button type="submit" onClick={() => filterByName(searchField)}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </SearchContainer>
      ) : (
        <EmptyDiv />
      )}

      {isLoggedIn ? (
        <>
          <NavLink to="/submit">
            <span className="material-symbols-outlined">description</span>
            <span>Submit Recipe</span>
          </NavLink>
          <NavLink to="/my-recipes">
            <span className="material-symbols-outlined">favorite</span>
            <span>My Recipes</span>
          </NavLink>
          <NavButton onClick={handleLogout}>
            <span className="material-symbols-outlined">lock</span>
            <span>Logout</span>
          </NavButton>
        </>
      ) : (
        <NavLink to="/auth">
          <span className="material-symbols-outlined">lock</span>
          <span>Login</span>
        </NavLink>
      )}
    </NavbarContainer>
  )
}

export default Navbar
