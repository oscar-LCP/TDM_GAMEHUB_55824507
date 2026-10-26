import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Body from './components/Body/Body'
import Catalog from './components/Catalog/Catalog'
import { games } from './data/games'
import Favorites from './components/Favorites/Favorites'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = window.localStorage.getItem('darkMode')
      if (saved === null) return true

      const parsed = JSON.parse(saved)
      return typeof parsed === 'boolean' ? parsed : true
    } catch (error) {
      console.error('No se pudo leer el tema guardado.', error)
      return true
    }
  })
  const [favorites, setFavorites] = useState([])
  const [favoriteCategory, setFavoriteCategory] = useState('Todas')

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'

    try {
      window.localStorage.removeItem('gamehub-theme')
      window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
    } catch (error) {
      console.error('No se pudo actualizar el tema guardado.', error)
    }
  }, [darkMode])

  const favoriteGames = useMemo(
    () => games.filter((game) => favorites.includes(game.id)),
    [favorites],
  )
  const visibleFavorites = useMemo(
    () =>
      favoriteCategory === 'Todas'
        ? favoriteGames
        : favoriteGames.filter((game) => game.categories.includes(favoriteCategory)),
    [favoriteCategory, favoriteGames],
  )
  const favoriteCategories = [
    'Todas',
    ...new Set(games.flatMap((game) => game.categories)),
  ]

  function toggleFavorite(gameId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(gameId)
        ? currentFavorites.filter((id) => id !== gameId)
        : [...currentFavorites, gameId],
    )
  }

  function toggleDarkMode() {
    setDarkMode((currentDarkMode) => !currentDarkMode)
  }

  return (
    <div className="site-shell">
      <NavBar darkMode={darkMode} onToggleTheme={toggleDarkMode} />
      <main>
        <Body />
        <Catalog favorites={favorites} onToggleFavorite={toggleFavorite} />
        <Favorites
          favoriteGames={favoriteGames}
          visibleFavorites={visibleFavorites}
          favoriteCategories={favoriteCategories}
          favoriteCategory={favoriteCategory}
          onCategoryChange={setFavoriteCategory}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
