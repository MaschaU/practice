import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Magic Masa"
        body="Is my chick"
        footer={(
          <strong>whatever you feel like</strong>
        )}
      />
    </div>
  );
}

export default App;
