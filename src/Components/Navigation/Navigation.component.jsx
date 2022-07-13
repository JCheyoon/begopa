import { NavigationContainer, LogoContainer, LogoWithTextSvg } from './Navigation.style'
import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar.component'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsSticky(window.scrollY > 190)
    })
  }, [])

  return (
    <NavigationContainer className={isSticky ? 'sticky' : ''}>
      {!isSticky && (
        <LogoContainer>
          <Link to="/">
            <LogoWithTextSvg />
          </Link>
        </LogoContainer>
      )}

      <Navbar />
    </NavigationContainer>
  )
}

export default Navigation
