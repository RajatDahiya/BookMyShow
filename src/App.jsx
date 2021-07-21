import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import temp from "./components/temp";




function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={temp} />
    </>
  );
};

export default App;
