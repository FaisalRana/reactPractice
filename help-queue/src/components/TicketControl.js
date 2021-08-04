import React from 'react';
import NewTicketForm  from './NewTicketForm'
import TicketList from './TicketList';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      counter: 0
    }
}

handleClick = () => {
  this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      counter: prevState.counter += 1
    })
  )
}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let counter = this.state.counter;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <p> Button Click Count: {counter} </p>
      </React.Fragment>
    );
  }
}
export default TicketControl;
