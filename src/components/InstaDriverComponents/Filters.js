import React, { useState } from "react";
import FilterIcon from "../shared/icons/FilterIcon";
import Search from "../shared/icons/Search";
import FilterPopup from "./FilterPopup";
import MessageStatusPopup from "./MessageStatusPopup";
import MessageTimesPopup from "./messageTimesPopup";

const Filters = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [statusToggle, setStatusToggle] = useState(false);
  const [messTimesToggle, setMessageTimesToggle] = useState(false);

  const onStatusToggle = () => setStatusToggle(!statusToggle);
  const onMessTimesToggle = () => setMessageTimesToggle(!messTimesToggle);
  const onFilterToggle = () => setFilterToggle(!filterToggle);

  return (
    <div className="major__filterMain">
      <div className="major__filterInput">
        <input
          className="form__input-1"
          placeholder="Search users, messages or chat id's"
        />
        <div className="major__inputSearch">
          <Search />
        </div>
      </div>
      <div className="major__filterSelections">
        <div onClick={onFilterToggle}>
          <FilterIcon />
        </div>
        {filterToggle && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "-30rem",
              zIndex: "1",
            }}
          >
            <FilterPopup
              onMessTimesToggle={onMessTimesToggle}
              onStatusToggle={onStatusToggle}
            />
            {statusToggle && <MessageStatusPopup />}
            {messTimesToggle && <MessageTimesPopup />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
