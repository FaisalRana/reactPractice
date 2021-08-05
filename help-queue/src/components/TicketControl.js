import React from 'react';
import NewTicketForm  from './NewTicketForm'
import TicketList from './TicketList';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      counter: 0
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        counter: prevState.counter += 1,
      }));
      console.log(this);
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let counter = this.state.counter;
    if (this.state.counter === 0) {
      currentlyVisibleState = "Have you gone through all the steps on the Learn How to Program debugging lesson?"
      buttonText = "Yes";
    } else if (this.state.counter === 1) {
      currentlyVisibleState = "Have you asked another pair for help?"
      buttonText = "Yes";
    } else if (this.state.counter === 2) {
      currentlyVisibleState = "Have you spent 15 minutes going through through the problem documenting every step?"
      buttonText = "Yes";
    } else if (this.state.counter === 3) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
      this.state.counter -= 2;
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
