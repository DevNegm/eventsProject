import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventDetails from "./Components/EventDetails";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/event/:eventSlug" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
