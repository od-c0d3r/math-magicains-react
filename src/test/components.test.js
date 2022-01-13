import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app/App';
import HomePage from '../components/homePage/HomePage';
import CalculatorPage from '../components/calculatorPage/CalculatorPage'
import QuotePage from '../components/quotePage/QuotePage';
import CalContent from '../components/calContent/calContent';

describe('Components Snapshots', () => {
  test('renders correctly App', () => {
    const tree = TestRenderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly CalContent', () => {
    const tree = TestRenderer.create(<CalContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly HomePage', () => {
    const tree = TestRenderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly CalculatorPage', () => {
    const tree = TestRenderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly QuotePage', () => {
    const tree = TestRenderer.create(<QuotePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
