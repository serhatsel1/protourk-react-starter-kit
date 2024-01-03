import { useEffect, useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
import Test from "./components/Test";

function App() {
  // const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>

      {show ? <Test /> : ""}

      {/* <button onClick={() => setActiveTab(2)} className="bg-gray-500 border">
        Active tabı değiştir
      </button>
      <div style={{ padding: 20 }}>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="ayarlar">1. tab</Tab.Panel>
          <Tab.Panel title="hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="components">3. tab</Tab.Panel>
        </Tab>
      </div>
      <Button>buton-children</Button>
      <Button text="buton" variant="success" />
      <Button text="buton" variant="danger" />
      <Button text="buton" variant="warning" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
