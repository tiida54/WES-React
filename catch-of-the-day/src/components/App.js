import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFish from "../sample-fishes";
import Fish from "./Fish";


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    console.log("addFish");
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    console.log("loadSampleFishes");
    this.setState({ fishes: sampleFish });
  }
  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" age={500} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
