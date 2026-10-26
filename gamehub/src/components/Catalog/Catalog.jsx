import { games } from '../../data/games'

const cardColors = {
  red: '#ff00002b',
  blue: '#0073ff42',
  green: '#00ff2f48',
  black: '#00000931',
  purple: '#6703fd50',
  golden: '#ffcf4b6a',
}

export function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="game-card" style={{ backgroundColor: cardColors[game.tone] }}>
      <div className={`game-art game-art--${game.tone}${game.imageUrl ? ' game-art--has-image' : ''}`}>
        {game.imageUrl ? (
          <img className="game-art__image" src={game.imageUrl} alt={`Portada de ${game.title}`} />
        ) : (
          <>
            <span className="art-orbit art-orbit--one" aria-hidden="true" />
            <span className="art-orbit art-orbit--two" aria-hidden="true" />
            <span className="art-icon" aria-hidden="true">{game.icon}</span>
          </>
        )}
        <span className="art-tag">{game.tag}</span>
        <button
          type="button"
          className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
          onClick={() => onToggleFavorite(game.id)}
          aria-label={`${isFavorite ? 'Quitar' : 'Agregar'} ${game.title} ${isFavorite ? 'de' : 'a'} favoritos`}
          aria-pressed={isFavorite}
        >
          <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
        </button>
      </div>
      <div className="game-card__body">
        <div className="game-card__heading">
          <h3>{game.title}</h3>
        </div>
        <div className="category-list" aria-label="Categorías">
          {[...game.categories].sort((a, b) => a.localeCompare(b, 'es')).map((category) => (
            <span className="category-pill" key={category}>{category}</span>
          ))}
        </div>
        <p className="game-description">{game.description}</p>
        <div className="game-platforms">
          <span className="platform-icon" aria-hidden="true">▣</span>
          <span>{game.platforms}</span>
        </div>
      </div>
    </article>
  )
}

export default function Catalog({ favorites, onToggleFavorite }) {
  const categoriesCount = new Set(games.flatMap((game) => game.categories)).size

  return (
    <section className="catalog-section section-wrap" id="catalogo">
      <div className="section-heading">
        <div>
          <span className="section-kicker">SELECCIONADOS PARA TI</span>
          <h2>Encuentra tu <span>próximo favorito.</span></h2>
        </div>
        <p>Una selección para cada tipo de jugador.<br />¿Qué te apetece jugar hoy?</p>
      </div>
      <div className="catalog-meta">
        <span><span className="catalog-dot" /> CATÁLOGO DESTACADO</span>
        <span>{games.length} JUEGOS <span className="meta-divider">/</span> {categoriesCount} CATEGORÍAS</span>
      </div>
      <div className="game-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.includes(game.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}
