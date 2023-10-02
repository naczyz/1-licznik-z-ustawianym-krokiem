import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React counter" classValue='red' />
        <Heading text="React counter" classValue='gray' />
      </header>
      <Counter counterInitValue={15} />
      <Counter counterInitValue={0} />
    </div>
  );
};

export default App;
