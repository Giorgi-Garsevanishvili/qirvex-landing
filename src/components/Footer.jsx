export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="branding-container">
      <h1 className="brand-name">
        Qirvex <span className="tm-logo">™</span>
      </h1>
      <p className="brand-slogan">Precision in Every Build.</p>
      <p className="name-link">
        by{" "}
        <a href="https://github.com/Giorgi-Garsevanishvili" target="_blank">
          Giorgi Garsevanishvili
        </a>
      </p>
      
    </footer>
  );
};
