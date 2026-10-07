import React from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import Voiture from "../component/Voiture";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header /> <br /> <Presentation />
        <Voiture />
      </div>
    );
  }
}
export default App;
