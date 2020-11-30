import React, { useState } from "react";
import EmployerProfile from "../shared/icons/EmployerProfile";
import Mail from "../shared/icons/Mail";
import Organizations from "../shared/icons/Organizations";
import Ratings from "../shared/icons/Ratings";
import Recruitment from "../shared/icons/Recruitment";
import Search from "../shared/icons/Search";
import Subscription from "../shared/icons/Subscription";
import VehicleOnboard from "../shared/icons/VehicleOnboard";

const Navbar = () => {
  const [selected, setSelected] = useState(4);

  const onSelect = (index) => setSelected(index);

  return (
    <div className="major__navbarMain">
      <ul>
        <li
          className={`${selected % 8 == 1 ? "major__selected" : ""}`}
          onClick={() => onSelect(1)}
        >
          <EmployerProfile />
          <span>Employer Profile</span>
        </li>
        <li
          className={`${selected % 8 == 2 ? "major__selected" : ""}`}
          onClick={() => onSelect(2)}
        >
          <VehicleOnboard />
          <span>Onboard Your Vehicles</span>
        </li>
        <li
          className={`${selected % 8 == 3 ? "major__selected" : ""}`}
          onClick={() => onSelect(3)}
        >
          <Search />
          <span>Search & Hire Drivers</span>
        </li>
        <li
          className={`${selected % 8 == 4 ? "major__selected" : ""}`}
          onClick={() => onSelect(4)}
        >
          <Mail />
          <span>Inbox</span>
        </li>
        <li
          className={`${selected % 8 == 5 ? "major__selected" : ""}`}
          onClick={() => onSelect(5)}
        >
          <Recruitment />
          <span>Recruitment</span>
        </li>
        <li
          className={`${selected % 8 == 6 ? "major__selected" : ""}`}
          onClick={() => onSelect(6)}
        >
          <Organizations />
          <span>My Organizations</span>
        </li>
        <li
          className={`${selected % 8 == 7 ? "major__selected" : ""}`}
          onClick={() => onSelect(7)}
        >
          <Ratings />
          <span>Rate a Driver</span>
        </li>
        <li
          className={`${selected % 8 == 0 ? "major__selected" : ""}`}
          onClick={() => onSelect(8)}
        >
          <Subscription />
          <span>My Subscription</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
