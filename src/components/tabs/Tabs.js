import React, { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import "./tabs.css";

const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;
const ENTER_KEY = 13;
const SPACE_KEY = 32;

const Tabs = (props) => {
  const { children, label } = props;
  const tabListRef = useRef(null);
  const focusedTabRef = useRef(0); // ref to keep track which tab has focused. Originally tab at position 0

  const firstTabChild = children.filter(
    (child) => child.type.name === "Tab"
  )?.[0];
  const [activeTabId, setActiveTabId] = useState(firstTabChild.props.value);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  const ariaLabel = label ?? "A simple tab group";

  /**
   * Handle arrow key
   */
  const handleKeyUp = (event) => {
    const { keyCode } = event;
    if (keyCode === LEFT_ARROW_KEY || keyCode === RIGHT_ARROW_KEY) {
      if (tabListRef) {
        const len = tabListRef.current.children.length;

        if (event.keyCode === RIGHT_ARROW_KEY) {
          const nextIndex = focusedTabRef.current + 1;
          const focusedTabIndex = nextIndex < len ? nextIndex : 0;
          tabListRef.current.children[focusedTabIndex].focus();
          focusedTabRef.current = focusedTabIndex;
        } else if (event.keyCode === LEFT_ARROW_KEY) {
          const prevIndex = focusedTabRef.current - 1;
          const focusedTabIndex = prevIndex >= 0 ? prevIndex : len - 1;
          tabListRef.current.children[focusedTabIndex].focus();
          focusedTabRef.current = focusedTabIndex;
        }
      }
    } else if (keyCode === ENTER_KEY || keyCode === SPACE_KEY) {
      /**
       * When user press ENTER or SPACE key, select the focused tab
       */
      setActiveTabId(
        tabListRef.current.children[focusedTabRef.current].getAttribute("value")
      );
    }
  };

  /**
   * Register event hanlder when component mounted
   * Unregister event hander when component unmounted
   */
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="tabsGroup">
      <div
        className="tabs"
        role="tablist"
        aria-label={ariaLabel}
        ref={tabListRef}
      >
        {/* Render each Tab child */}
        {children.map((child, index) => {
          if (child.type.name === "Tab") {
            return (
              <Tab
                key={`tab-${index}`}
                value={child.props.value}
                label={child.props.label}
                onClick={handleTabClick}
                active={child.props.value === activeTabId}
              ></Tab>
            );
          }
          return null;
        })}
      </div>
      {/* Tab panel container. Show the TabPanel child whose value match with the active tab */}
      <div className="panelContainer">
        {children.map((child, index) => {
          if (
            child.type.name === "TabPanel" &&
            child.props.value === activeTabId
          ) {
            return child;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Tabs;
