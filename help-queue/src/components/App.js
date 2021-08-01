import React from "react";
import Header from "./Header";
import Ticket from "./Ticket";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <Ticket />
    </React.Fragment>
  );
}

export default App;
