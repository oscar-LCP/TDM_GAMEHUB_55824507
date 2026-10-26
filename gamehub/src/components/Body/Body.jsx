export default function Body() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> TU PRÓXIMA AVENTURA EMPIEZA AQUÍ</span>
        <h1>Hay todo un mundo<br />por <span>jugar.</span></h1>
        <p>Historias que te atrapan, mundos que te sorprenden.<br /> Encuentra el juego que no sabías que buscabas.</p>
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
  )
}