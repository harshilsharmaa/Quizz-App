import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleTabClose = (event) => {
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to exit?");
    };
    window.addEventListener("beforeunload", handleTabClose);
    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
