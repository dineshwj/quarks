import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = { date: new Date(), isToggle: false };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick = e => {
    console.log("eeeee", e);
    this.setState({
      isToggle: !this.state.isToggle
    });
  };

  render() {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    return (
      <div className="time-block">
        <div>
          <p>Current Time: {this.state.date.toLocaleTimeString()}</p>
        </div>
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggle ? "Hide Date" : "Show Date"}
          </button>
          {this.state.isToggle ? (
            <p>
              Current Date:
              {currentDate + "/" + currentMonth + "/" + currentYear}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
