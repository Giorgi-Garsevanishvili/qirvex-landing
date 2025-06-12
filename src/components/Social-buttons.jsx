export const SocialButtons = ({ img, link, alt }) => {
  return (
    <button
      type="button"
      className="social-button img-zoom"
      onClick={() => window.open(`${link}`, "_blank")}
    >
      <img className="social-img" src={img} alt={alt} />
    </button>
  );
};
