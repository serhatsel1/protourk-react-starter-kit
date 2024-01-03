const Tab = ({ children, activeTab }) => {
  console.log("props", children);

  return (
    <div>
      <nav>
        {children.map((child, index) => (
          <button className={activeTab === index ? "bg-blue-200": "bg-gray-300"} key={index}>{child.props.title} </button>
        ))}
      </nav>
      {children}{" "}
    </div>
  );
};

Tab.Panel = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
