import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Container>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Add an item to this chart!
          </h1>
          <ItemModal />
        </Container>
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
