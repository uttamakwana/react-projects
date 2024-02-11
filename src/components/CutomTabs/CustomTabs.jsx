/* eslint-disable react/prop-types */
import { useState } from "react";
// css
import "./custom-tabs.css";

const RandomTab = () => {
  return <strong>Random Tab alert!!</strong>;
};

const Tab = () => {
  const tabs = [
    { label: "Tab 1", content: <div>This is a div1</div> },
    { label: "Tab 2", content: <div>This is a div2</div> },
    { label: "Tab 3", content: <div>This is a div3</div> },
    { label: "Tab 4", content: <RandomTab /> },
  ];

  return <CustomTabs tabs={tabs} />;
};

const CustomTabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  // handle change tab
  function changeTab(tab) {
    setCurrentTab(tab);
  }
  return (
    <div className="custom-tabs-container">
      <h1 className="heading text-center mb-1">Custom Tabs</h1>
      <div className="custom-tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => changeTab(tab)}
            className={`text-2 ${
              currentTab.label === tab.label ? "active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="custom-tabs mb-1 subheading text-center">
        {currentTab.content}
      </div>
    </div>
  );
};

export default Tab;
