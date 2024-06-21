import "./App.css";
import Header from "../src/components/AppBar";
import GenerateEditId from "../src/api/GenerateEditId";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h2>Hyperzod Play Console App Listing Automation</h2>
        </div>

        <GenerateEditId />
      </div>
    </Provider>
  );
}

export default App;
