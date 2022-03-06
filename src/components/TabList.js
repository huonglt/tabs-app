import React from "react";

const TabList = (props) => {
  const { items } = props;
  return <div>{items && items.map((item) => <div>{item}</div>)}</div>;
};

export default TabList;
