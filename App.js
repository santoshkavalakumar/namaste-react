import React from "react";
import ReactDOM from "react-dom/client";

// Jsx (transpiled before it reaches the JS) - PARCEL - Babel - JS

const Header = () => <h1 className="header"> Namaste React 🚀 </h1>;

const HeaderComponent = () => (
  <div id="container">
    <Header />
    JSX component and function
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
