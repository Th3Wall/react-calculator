import React from 'react';
import './calculator.sass';
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentValue: '0',
      formula: '',
      accValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const keyValue = e.target.innerText;
    const { currentValue } = this.state;
    const zeroControl = keyValue === '0' && currentValue === '0';
    const dotControl = keyValue === '.' && currentValue.includes('.');
    const lengthControl = currentValue.length >= 20;

    switch(keyValue) {
      case "A/C":
        this.clearFormula();
        return;
      case "=":
        this.handleFormulaEvaluation();
        return;
      case ".":
        this.handleDecimalClick();
        return;
      case "+":
      case "-":
      case "x":
      case "÷":
        this.handleOperatorClick(keyValue);
        return;
      default:
        if ((zeroControl) | (dotControl) | (lengthControl)) {
          return;
        } else {
          this.handleNumberClick(keyValue);
        }
        return;
    }
  }

  clearFormula = () => {
    this.setState({
      currentValue: '0',
      formula: '',
      accValue: '',
    });
  }

  handleFormulaEvaluation = () => {
    console.log("Equal sign clicked");
  }

  handleOperatorClick = () => {
    console.log("Operator sign clicked");
  }
  
  handleDecimalClick = () => {
    console.log("Decimal sign clicked");
  }

  handleNumberClick = (numberClicked) => {
    const { currentValue, accValue } = this.state;

    if ((currentValue === '0') || (accValue.includes('='))) {
      this.setState ({
        currentValue: numberClicked,
        accValue: numberClicked
      });
      return;
    } 
      
    this.setState ( state => ({
      currentValue: state.currentValue += numberClicked,
      accValue: state.accValue += numberClicked
    }));
  }

  render () {
    const {currentValue} = this.state
    return (
      <div className="calculator__wrp">
        <Display currentValue={currentValue} />
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
