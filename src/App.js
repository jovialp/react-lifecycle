import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.mountComponent = this.mountComponent.bind(this);
    this.unMountComponent = this.unMountComponent.bind(this);
  }
  mountComponent() {
    console.log("component mounting event triggered");
    ReactDOM.render(
      <Counter likes={this.state.num} />,
      document.getElementById('renderHere')
    );
  }
  unMountComponent() {
    console.log('Component unmounting event is triggered..');
    ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 jumbotron">
            <h3 className="text-center">React Lifecycle</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.mountComponent}>
              Mount Component
            </button>
            <button className="btn btn-warning" onClick={this.unMountComponent}>
              unMount Component
            </button>
          </div>
        </div>
        <div className="row" id="renderHere">

        </div>
      </div>
    );
  }
  componentWillUnmount() {
    console.log('component is succesfully unmounted');

  }
}

export default App;
