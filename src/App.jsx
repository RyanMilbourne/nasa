import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomeRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
