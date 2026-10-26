import './NavBar.component.css'

export default function NavBar({ darkMode, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Gamehub, inicio">
        <span className="brand-mark" aria-hidden="true">G</span>
        <span>game<span className="brand-accent">hub</span></span>
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#catalogo">Explorar</a>
        <a href="#favoritos">Favoritos</a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Cambiar a modo ${darkMode ? 'claro' : 'oscuro'}`}
        aria-pressed={!darkMode}
      >
        <span aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
        <span className="theme-toggle__label">{darkMode ? 'Modo claro' : 'Modo oscuro'}</span>
      </button>
      <a className="header-cta" href="#catalogo">
        Encuentra tu próximo juego <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}