import "./custom-popup.css";
// icon
import { CloseIcon } from "../../constants/icons";
import { useState } from "react";

const CustomPopup = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="custom-popup-container">
      <button
        className="popup-btn absolute-center p-1 br-10 subheading"
        onClick={() => setToggle(true)}
      >
        Open Model
      </button>
      <div className={`popup ${toggle ? "active" : ""}`}>
        <div className="popup-header flex-between gap-4 subheading">
          <p>This is Popup Header</p>
          <CloseIcon className="pointer" onClick={() => setToggle(false)} />
        </div>
        <div className="popup-body text-2">This is Popup Body</div>
        <div className="popup-footer subheading">This is Popup Footer</div>
      </div>
      <div className={`overlay ${toggle ? "" : "hidden"}`}></div>
    </div>
  );
};

export default CustomPopup;
