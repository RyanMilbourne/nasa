import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomeRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
