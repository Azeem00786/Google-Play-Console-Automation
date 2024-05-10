import "./App.css";
import Header from "../src/components/AppBar";
import GenerateEditId from "../src/api/GenerateEditId";
function App() {
  return (
    <div className="App">
      <Header />
      <p>Hyperzod Gogole Play Console App Listing Automation</p>
      <GenerateEditId />
    </div>
  );
}

export default App;
