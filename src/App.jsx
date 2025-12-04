import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
