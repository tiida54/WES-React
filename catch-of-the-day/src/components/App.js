import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" age={500} cool={true}/>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
