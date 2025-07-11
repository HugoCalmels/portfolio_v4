import SeoHead from '@/components/SeoHead'

const Home = () => {
  return (
    <>
      <SeoHead
        title="Hugo Calmels – Développeur Web Freelance à Toulouse"
        description="Portfolio, créations web, outils métier, et expertise technique – découvrez mon univers."
      />
      <main>
        <h1>Bienvenue 👋</h1>
        <p>Je suis Hugo, dev freelance à Toulouse. Sites web, outils personnalisés, code propre.</p>
        <ul>
          <li><a href="/creation-site-internet-toulouse">Créer un site internet</a></li>
          <li><a href="/portfolio">Voir mes projets</a></li>
          <li><a href="/interface-metier">Outils métier</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </main>
    </>
  )
}

export default Home
