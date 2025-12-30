function Layout({ children }) {
// Contenedor para que las Card se alineen en el centro de la pantalla
  return (
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-linear-to-br items-center justify-center p-8 ">
        
        <section aria-labelledby="main-section-title">
          {children}
        </section>
      </main>
  )
}

export default Layout
