const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/creation-site-internet-toulouse">Création de site</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/interface-metier">Interface métier</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;