import './calculator.sass';
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';

const Calculator = () => {

  const handleKeyClick = (e) => {
    const keyValue = e.target.innerText;

    switch(keyValue) {
      case "A/C":
        return console.log("A/C");
      default:
        return console.log("number from 0 to 9");
    }
  }

  return (
    <div className="calculator__wrp">
      <Display />
      <Buttons handleKeyClick={handleKeyClick} />
    </div>
  );
}

export default Calculator;
