import "./SearchMode.css";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
const SearchMode = ({ icon, text, isNew }) => {
  const [highlightedMode, setHighlightedMode] = useState(false);
  const handleClick = () => {
    setHighlightedMode(!highlightedMode);
  };
  useEffect(() => {
    if (text === "Hotels") {
      setHighlightedMode(true);
    }
  }, []);

  const HighlightNew = () => {
    return <span className="newItem">NEW</span>;
  };

  const modeIcon = (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      {icon}
    </IconContext.Provider>
  );

  return (
    <div className="modeContainer">
      <div
        className={
          highlightedMode
            ? "modeLogoTextContainer highlight"
            : "modeLogoTextContainer"
        }
        onClick={handleClick}
      >
        <span className="modeLogo">{modeIcon}</span>
        <span className="modeText">{text}</span>
        {isNew ? <HighlightNew /> : null}
      </div>
    </div>
  );
};

export default SearchMode;
