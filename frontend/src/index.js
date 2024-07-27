
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <App />;
};

ReactDOM.render(<Main />, document.getElementById("root"));

