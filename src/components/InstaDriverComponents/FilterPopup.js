import React from "react";

const FilterPopup = ({ onStatusToggle, onMessTimesToggle }) => {
  return (
    <div className="major__filterPopupMain">
      <div className="major__filterHeader">Filters</div>
      <div className="major__filterInputs">
        <div style={{ position: "relative" }}>
          <input
            className="form__input-2"
            placeholder="Message statuses"
            onClick={onStatusToggle}
          />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <input
            className="form__input-2"
            placeholder="Time of messages"
            onClick={onMessTimesToggle}
          />
        </div>
      </div>
      <div className="major__filterCTA">
        <button className="btn btn--secondary">Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPopup;
