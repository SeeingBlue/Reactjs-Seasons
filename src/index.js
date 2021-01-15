import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

  state = { lat: null, long: null, errorMessage: ''}

  renderContent() {
    if (this.state.lat === null && this.state.errorMessage !== "") {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat === null && this.state.errorMessage === "") {
      return <Spinner message="Retrieving location..."/>;
    }

    if (this.state.lat !== null && this.state.errorMessage === "") {
      return (
        <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
      );
    }
  }

  render() {
      return (
          <div>{this.renderContent()}</div>
      )
  }

  componentDidMount() {
    console.log("Component Rendered, Getting location...");
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
        (err) => this.setState({ errorMessage: err.message })
      );
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentDidUnMount() {
    console.log("Component Unmounted");
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
