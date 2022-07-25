import { NavbarContainer, SearchContainer, NavLink, NavButton } from '../Navbar/Navbar.style'
import { useContextAuth } from '../../../Context/authContext'

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContextAuth()
  return (
    <NavbarContainer>
      <SearchContainer>
        Browse Recipes
        <input type="text" placeholder="Find a recipe..." />
        <button type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </SearchContainer>
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
