import Button from "./components/Button";

function App() {
  return (
    <>
      <Button>
        buton-children
      </Button>
      <Button text="buton" variant="success" />
      <Button text="buton" variant="danger" />
      <Button text="buton" variant="warning" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
