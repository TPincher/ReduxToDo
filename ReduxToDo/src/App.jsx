import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
