import './calculatorPage.scss';
import Calculator from '../calculator/Calculator';
import CalContent from '../calContent/calContent';



const CalculatorPage = (props) => {
  return (
    <div id="calPage">
      <CalContent />
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
