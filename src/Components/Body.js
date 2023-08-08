import "./Body.css";
import SearchMode from "./SearchMode";
import { PiAirplaneTilt, PiBuildings, PiBusLight } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { IconContext } from "react-icons";
const Body = () => {
  const searchIcon = (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <CiTimer />
    </IconContext.Provider>
  );
  return (
    <div className="bodyContainer">
      <div className="searchModeBar">
        <SearchMode icon={<PiAirplaneTilt />} text="Flights" isNew={false} />
        <SearchMode icon={<PiBuildings />} text="Hotels" isNew={false} />
        <SearchMode icon={<PiBusLight />} text="Bus" isNew={true} />
      </div>
      <div className="searchFormContainer">
        <div className="cityLabelTextContainer">
          <label className="cityLabel">Search for city, area or hotel</label>
          <span className="cityText">Goa</span>
        </div>
        <div className="checkInOutContainer">
          <div className="checkinContainer">
            <label className="checkinLabel">Check-in</label>
            <span className="checkinText">Tue, 06 Jun</span>
          </div>
          <div className="checkoutContainer">
            <label className="checkoutLabel">Check-out</label>
            <span className="checkoutText">Wed, 07 Jun</span>
          </div>
        </div>
        <div className="travellerButtonContainer">
          <div className="travellerContainer">
            <label className="travellerLabel">Traveller</label>
            <span className="travellerText">1 room, 2 adults</span>
          </div>
        </div>
        <div className="buttonContainer">
          <span className="hey>">Search Hotels</span>
        </div>
        <div className="recentSearchContainer">
          <h4 className="containerHeading">Recently Searched</h4>
          <div className="lastSearchContainer">
            <span className="lastSearchText">{searchIcon} GOA, 2 Adults</span>
            <div className="searchDates">
              <div className="from">
                <span className="fromDay">Tue</span>
                <span className="fromDate">06 Jun</span>
              </div>
              <span className="separator">_</span>
              <div className="to">
                <span className="toDay">Wed</span>
                <span className="toDate">07 Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
