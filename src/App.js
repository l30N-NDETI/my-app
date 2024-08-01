import React, { Component } from 'react';

class App extends Component {
  // Step 3: Implement state
  state = {
    person: {
      fullName: 'Leon Ndeti',
      bio: 'A passionate developer.',
      imgSrc: 'https://hoopshype.com/wp-content/uploads/sites/92/2024/02/i_54_cf_2e_lebron-james.png?w=1000&h=600&crop=1',
      profession: 'Software Engineer'
    },
    shows: false,
    intervalId: null,
    timeElapsed: 0
  };

  // Step 4: Add a method to toggle the show state
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  // Step 5: Lifecycle method to handle time interval
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        
        <p>Time elapsed since component mounted: {this.state.timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
