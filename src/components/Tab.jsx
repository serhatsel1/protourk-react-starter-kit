import { useEffect, useState } from "react";

const Tab = ({ children, activeTab, setActiveTab }) => {
  // console.log("props", children);

  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  return (
    <div>
      <nav>
        {children.map((child, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "bg-blue-200" : "bg-gray-300"}
            key={index}
          >
            {child.props.title}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  );
};

Tab.Panel = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
