import "./App.css";
import Header from "../src/components/AppBar";
import GenerateEditId from "../src/api/GenerateEditId";
function App() {
  return (
    <div>
      <Header />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h2>Hyperzod Play Console App Listing Automation</h2>
      </div>

      <GenerateEditId />
    </div>
  );
}

export default App;
