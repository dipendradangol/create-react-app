import React from 'react';
import logo from './logo.svg';
import './App.css';
import sayHello from './resources/utils';
import Keys from './components/Keys';

const style = {
  margin: '20px',
  backgroundColor: 'red',
  width: '100%',
	height: '100%',
	fontSize: '30px',
	color: 'white'
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: null,
      triggerCalc: false,
      output: ''
    }
    this.addInput = this.addInput.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  addInput(e) {
		this.setState({
			output: this.state.output + e.target.innerText
		});
}

  calculate() {
    this.setState({
      triggerCalc: true,
      output: this.state.output !== '' ? eval(this.state.output) : this.state.output
    });
  }

  reset() {
    this.setState({
      triggerCalc: false,
      output: ''
    })
  }


render() {
      return (
      <div className="App">
          <Keys addInput={this.addInput} calculate={this.calculate} reset={this.reset} />
        <div id="result" style={style}>
                {
                  this.state.output !== '' ?
                    this.state.output :
                    'The output goes here'
                }
        </div>
      </div>
    );
  }
}

export default App;
