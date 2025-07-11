const Footer = () => {
  return (
    <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
      <p style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Hugo Calmels. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;