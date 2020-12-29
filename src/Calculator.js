import React from 'react';
import './calculator.sass';
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';

// Match a string that *ends* with one of the four operators
const endsWidthOpRegex = /[+|*|\-/]+$/;
// Match a string that *ends* with 'plus' or 'minus' signs
const endsWidthSelOpRegex = /[+|-]$/;

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
    const { currentValue, accValue } = this.state;
    const zeroControl = keyValue === '0' && currentValue === '0';
    const dotControl = keyValue === '.' && currentValue.includes('.');
    const endsWithDotControl = keyValue === '.' && endsWidthOpRegex.test(currentValue);
    const lengthControl = currentValue.length >= 15;

    switch(keyValue) {
      case "A/C": {
        this.clearFormula();
        return;
      }
      case "=": {
        if(accValue === '' || accValue.includes('=')) {
          return;
        }
        this.handleFormulaEvaluation();
        return;
      }
      case '/':
      case '*':
      case '-':
      case '+': {
        if (accValue.endsWith('.') || currentValue === '0') {
          return;
        } else this.handleOperatorClick(keyValue);
        return;
      } 
      default: {
        if ((zeroControl) || (dotControl) || (lengthControl) || (endsWithDotControl)) {
          return;
        } else this.handleNumberClick(keyValue);
        return;
      }
    }
  }

  clearFormula = () => {
    this.setState({
      currentValue: '0',
      formula: '',
      accValue: '',
    });
  }

  handleNumberClick = (numberClicked) => {
    const { currentValue, accValue } = this.state;
    
    if ((currentValue === '0') || (accValue.includes('='))) {
      this.setState ({
        currentValue: numberClicked,
        accValue: numberClicked
      }); return;
    } 
      
    this.setState ( state => ({
      currentValue: state.currentValue += numberClicked,
      accValue: state.accValue += numberClicked
    }));
  }

  handleOperatorClick = (operatorClicked) => { 
    const { accValue } = this.state;
    const accValueOne = accValue.replace(endsWidthOpRegex, '');
    const accValueTwo = accValue.replace(endsWidthSelOpRegex, '')
    const equalsIdx = accValue.indexOf('=');
    const resultValue = accValue.slice(equalsIdx + 1);
    
    if (accValue.includes('=')) {
      this.setState({
        currentValue: operatorClicked,
        accValue: resultValue + operatorClicked
      });
    } else if (operatorClicked !== '-') {
      this.setState({
        currentValue: operatorClicked,
        accValue: accValueOne + operatorClicked 
      });
    } else {
      this.setState({
        currentValue: operatorClicked,
        accValue: accValueTwo + operatorClicked
      });
    }
  }

  handleFormulaEvaluation = () => {
    const { accValue } = this.state;
    const accValueOne = accValue.replace(endsWidthOpRegex, '');
    const result = eval(accValueOne);
    const resultRounded = Math.floor(result);
    
    this.setState ({
      currentValue: resultRounded,
      accValue: accValue + '=' + resultRounded
    })
  }

  render () {
    const {currentValue, accValue} = this.state
    return (
      <div className="calculator__wrp">
        <Display accValue={accValue} currentValue={currentValue} />
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
