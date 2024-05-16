import "./App.css";
import Header from "../src/components/AppBar";
import GenerateEditId from "../src/api/GenerateEditId";
function App() {
  return (
    <div>
      <Header />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <p>Hyperzod Play Console App Listing Automation</p>
      </div>

      <GenerateEditId />
    </div>
  );
}

export default App;
