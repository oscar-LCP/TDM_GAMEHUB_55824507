export default function NavBar() {
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
      <a className="header-cta" href="#catalogo">
        Encuentra tu próximo juego <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}