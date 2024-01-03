import Button from "./components/Button";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Tab activeTab={1}>
          <Tab.Panel title="ayarlar">1. tab</Tab.Panel>
          <Tab.Panel title="hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="components">3. tab</Tab.Panel>
        </Tab>
      </div>
      <Button>buton-children</Button>
      <Button text="buton" variant="success" />
      <Button text="buton" variant="danger" />
      <Button text="buton" variant="warning" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
