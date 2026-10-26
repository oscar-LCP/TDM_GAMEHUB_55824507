import { GameCard } from '../Catalog/Catalog'

export default function Favorites({
  favoriteGames,
  visibleFavorites,
  favoriteCategories,
  favoriteCategory,
  onCategoryChange,
  onToggleFavorite,
}) {
  return (
    <section className="favorites-section" id="favoritos">
      <div className="section-wrap">
        <div className="favorites-heading">
          <div>
            <span className="section-kicker">TU COLECCIÓN PERSONAL</span>
            <h2>Tu lista de <span>favoritos.</span></h2>
          </div>
          <div className="favorites-tools">
            <span className="favorite-count">
              <strong>{favoriteGames.length}</strong>
              {favoriteGames.length === 1 ? ' juego guardado' : ' juegos guardados'}
            </span>
            <label className="filter-label" htmlFor="favorite-category">Filtrar por categoría</label>
            <select
              id="favorite-category"
              value={favoriteCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
            >
              {favoriteCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        {visibleFavorites.length > 0 ? (
          <div className="game-grid favorites-grid">
            {visibleFavorites.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-favorites">
            <span className="empty-heart" aria-hidden="true">♡</span>
            <div>
              <h3>{favoriteGames.length ? 'No hay juegos en esta categoría' : 'Todavía no tienes juegos favoritos'}</h3>
              <p>{favoriteGames.length ? 'Prueba con otra categoría o explora el catálogo.' : 'Guarda los juegos que te llamen la atención y los encontrarás aquí.'}</p>
            </div>
            <a href="#catalogo">Explorar catálogo <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </div>
    </section>
  )
}