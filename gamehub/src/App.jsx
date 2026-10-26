import { useMemo, useState } from 'react'
import './App.css'
import Body from './components/Body/Body'
import Catalog from './components/Catalog/Catalog'
import { games } from './data/games'
import Favorites from './components/Favorites/Favorites'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [favorites, setFavorites] = useState([])
  const [favoriteCategory, setFavoriteCategory] = useState('Todas')

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

  return (
    <div className="site-shell">
      <NavBar />
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
