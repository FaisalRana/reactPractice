import React from "react";
import Header from "./Header";
// import Ticket from "./Ticket";
import TicketList from "./TicketList.js";

function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;
