import scrollArrow from "../assets/photos/down-arrow.png";

export const ScrollButton = ({targetID}) => {
  const ScrollDown = () => {
    const el = document.getElementById(targetID);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="scroll-down-arrow " type="button">
      <img
        onClick={() => ScrollDown()}
        className="scroll-img"
        src={scrollArrow}
        alt="Scroll"
      />
    </button>
  );
};
