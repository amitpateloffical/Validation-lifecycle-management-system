import React, { useState } from "react";
import styles from "./Tabs.module.css"; // Make sure to import your CSS module

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className={styles.toggleheadingDiv}>
        {tabs.map((tab) => (
          <p
            key={tab.label}
            className={`${
              activeTab === tab.label ? styles.toggleActive : styles.inactiveTab
            } `}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div>
        {tabs.map((tab) =>
          activeTab === tab.label ? <div key={tab.label}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tab;
