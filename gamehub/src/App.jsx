import { useMemo, useState } from 'react'
import './App.css'

const cardColors = {
  red: '#ff00002b',
  blue: '#0073ff42',
  green: '#00ff2f48',
  black: '#00000931',
  purple: '#6703fd50',
  golden: '#ffcf4b6a',
}

const games = [
  {
    id: 'wolfenstein_tno',
    title: 'Wolfenstein: The New Order',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLJ-9sL5n4q0ruO4sA9PKPV5822EFCzlRt2lzipJWYxQJ0OJVzx1_xmTk&s=10',
    categories: ['Historia alternativa', 'Acción', 'FPS', 'Disparos', 'Un jugador'],
    description: 'Wolfenstein envía a los jugadores en una misión personal por toda Europa para derrocar a la maquinaria de guerra nazi. Con la ayuda de un pequeño grupo de miembros de la resistencia, podrás infiltrarte en instalaciones de máxima seguridad, enfrentarte a legiones nazis de alta tecnología y hacerte con el control de las superarmas que les han permitido conquistar la Tierra... y mucho más.',
    platforms: 'PC · PlayStation · Xbox',
    icon: '🪖',
    tone: 'red',
    tag: 'DESAFÍA A LOS NAZIS',
  },
  {
    id: 'eafc27',
    title: 'EA SPORTS FC™ 27',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBWUjgeXnZA1SP3JkaV_7LkSQQFC00K2NOe0PDcWMKVqezULDcCuD5zgZ&s=10',
    categories: ['Deportes', 'Fútbol', 'Multijugador', 'Un jugador', 'Mundo abierto'],
    description: 'Te damos la bienvenida a The Worlds Game en EA SPORTS FC™ 27. Adéntrate en The Grounds, un espacio de juego donde las calles se encuentran con el estadio, y siente un mayor control en cada modo, ya que las innovaciones impulsadas por la comunidad ofrecen una jugabilidad más fiel al fútbol.',
    platforms: 'PC · PlayStation · Xbox · Nintendo Switch ',
    icon: '⚽',
    tone: 'blue',
    tag: 'EL JUEGO DEL MUNDO',
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1759502961',
    categories: ['Mundo abierto', 'Buena trama', 'Vaqueros', 'Multijugador', 'FPS'],
    description: 'Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y cazarrecompensas pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio.',
    platforms: 'PC · PlayStation · Xbox · Google Stadia ',
    icon: '🤠',
    tone: 'red',
    tag: 'VIVE EL OESTE Y UNA HISTORIA DE REDENCIÓN',
  },
  {
    id: 'gta_v',
    title: 'Grand Theft Auto V',
    imageUrl: 'https://images.ctfassets.net/h1rqp7q66d54/3yVDlCOrJnXMrb0yS4ea0y/d93ed97030eb7c233384e5a551aeaea7/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg',
    categories: ['Mundo abierto', 'Contenido sexual', 'Acción', 'Multijugador'],
    description: 'Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.',
    platforms: 'PC · PlayStation · Xbox',
    icon: '🚔',
    tone: 'green',
    tag: 'LA BÚSQUEDA DEL TODOPODEROSO DÓLAR',
  },
  {
    id: 'hitman_woa',
    title: 'Hitman: World of Assassination',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5wQ2QngGgFg68HEUL4i7jjICZ0fO50-voIP0R0Bn-13DL3e3Zao9i-36&s=10',
    categories: ['Sandbox', 'Sigilo', 'Asesinos', 'Un jugador', 'RV', 'Acción'],
    description: 'Ponte en la piel del Agente 47 y viaja por el mundo para eliminar a tus objetivos. Conviértete en un asesino profesional y utiliza tu ingenio, habilidades y arsenal de armas para completar misiones de alto riesgo en entornos abiertos y detallados.',
    platforms: 'PC · PlayStation · Xbox · Nintendo Switch · iOS',
    icon: '🕵️‍♂️',
    tone: 'black',
    tag: 'EL ARTE DEL ASESINATO',
  },
  {
    id: 'fm26',
    title: 'Football Manager 2026',
    imageUrl: 'https://cdn.footballmanager.com/site/2025-09/1034x600_FM26%20Pre%20Order_News%20Story_Blog%20Header_3.png',
    categories: ['Deportes', 'Simulación', 'Estrategia', 'Fútbol', 'Gestión'],
    description: 'Toma las riendas del banquillo y vive el futuro de la gestión futbolística.',
    platforms: 'PC · PlayStation · Xbox · Android · iOS · Apple Arcade',
    icon: '⚽',
    tone: 'purple',
    tag: 'CONSTRUYE TU LEGADO Y LLEVA TU EQUIPO A LA GLORIA',
  },
  {
    id: 'jjba_asbr',
    title: 'Jojos Bizarre Adventure: All Star Battle R',
    imageUrl: 'https://static.bandainamcoent.eu/high/jojo/jojo-bizarre-adventure-all-star-battle-r/jojo-header-mobile.jpg',
    categories: ['Anime', 'Acción', 'Lucha', 'JcJ', 'Multijugador', 'Memes', '2D'],
    description: '¡La obra maestra de Hirohiko Araki cobra vida en este juego de lucha! ¡Combate contra 50 pintorescos luchadores usando Stands, Hamon y mucho más! ¡Descubre cómo interactúan personajes que no coinciden en la historia cuando se encuentran cara a cara!',
    platforms: 'PC · PlayStation · Xbox · Nintendo Switch',
    icon: '',
    tone: 'golden',
    tag: 'COMBATES FRENÉTICOS BASADOS EN UNA OBRA EXTRAVAGANTE',
  },
  {
    id: 'bully',
    title: 'Bully',
    imageUrl: 'https://store-images.s-microsoft.com/image/apps.22912.66873235889732843.685adf61-8959-427d-8c3e-e4a5ef4bf7f5.430d3a55-1a75-4b7a-8bd0-021b167285a1?q=90&w=480&h=270',
    categories: ['Mundo abierto', 'Acción', 'Aventura', 'Tercera persona', 'Sátira'],
    description: 'Bully narra la historia de Jimmy Hopkins, un chico travieso de 15 años, mientras vive las divertidas y a veces incómodas experiencias de la adolescencia. Vence a los deportistas en el balón prisionero, gástales bromas a los pijos, salva a los empollones, besa a la chica y desafía la jerarquía social en la peor escuela de la zona.',
    platforms: 'PC · PlayStation · Xbox · Nintendo Switch · Android · iOS',
    icon: '',
    tone: 'blue',
    tag: 'AQUÍ EN LA ESCUELA MANDAS TU',
  }
]

function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="game-card" style={{ backgroundColor: cardColors[game.tone] }}>
      <div
        className={`game-art game-art--${game.tone}${game.imageUrl ? ' game-art--has-image' : ''}`}
      >
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
    ...new Set(games.flatMap((game) => game.categories))
      .values(),
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
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Gamehub, inicio">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>game<span className="brand-accent">hub</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#catalogo">Explorar</a>
          <a href="#favoritos">Favoritos</a>
        </nav>
        <a className="header-cta" href="#catalogo">
          Encuentra tu próximo juego <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> TU PRÓXIMA AVENTURA EMPIEZA AQUÍ</span>
            <h1>Hay todo un mundo<br />por <span>jugar.</span></h1>
            <p>Historias que te atrapan, mundos que te sorprenden.<br className="desktop-break" /> Encuentra el juego que no sabías que buscabas.</p>
            <a className="primary-button" href="#catalogo">
              Explora ahora <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-note">
              <span className="avatar-stack" aria-hidden="true"><i>🎮</i><i>👾</i><i>🕹️</i></span>
              <span>Un universo de juegos, a tu manera</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Ilustración de mundos de videojuegos">
            <div className="hero-art__glow" />
            <div className="hero-planet hero-planet--back" />
            <div className="hero-planet hero-planet--front"><span>✦</span></div>
            <div className="hero-floating hero-floating--top">✦ <span>NEW WORLDS</span></div>
            <div className="hero-floating hero-floating--bottom"><span>✺</span> READY PLAYER?</div>
            <span className="hero-spark hero-spark--one">✦</span>
            <span className="hero-spark hero-spark--two">✧</span>
            <span className="hero-spark hero-spark--three">·</span>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span> / 06</div>
        </section>

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
            <span>{games.length} JUEGOS <span className="meta-divider">/</span> {new Set(games.flatMap((game) => game.categories)).size} CATEGORÍAS</span>
          </div>
          <div className="game-grid">
            {games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={favorites.includes(game.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>

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
                  onChange={(event) => setFavoriteCategory(event.target.value)}
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
                    onToggleFavorite={toggleFavorite}
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
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>game<span className="brand-accent">hub</span></span>
        </a>
        <p>Tu próxima aventura empieza aquí.</p>
        <span className="footer-credit">HECHO PARA QUIENES AMAN JUGAR <span aria-hidden="true">♥</span> · GAMEHUB © 2026</span>
      </footer>
    </div>
  )
}

export default App