import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app/App';
import HomePage from '../components/homePage/HomePage';
import CalculatorPage from '../components/calculatorPage/CalculatorPage'
import QuotePage from '../components/quotePage/QuotePage';
import CalContent from '../components/calContent/calContent';
import Header from '../components/header/Header.js';
import Navbar from '../components/navbar/Navbar.js';
import Keyboard from '../components/keyboard/Keyboard';
import Screen from '../components/screen/Screen.js';
import Key from '../components/key/Key';
import Calculator from '../components/calculator/Calculator';

describe('Components Snapshots', () => {
  test('renders correctly App', () => {
    const tree = TestRenderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly Navbar', () => {
    const tree = TestRenderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly Keyboard', () => {
    const tree = TestRenderer.create(<BrowserRouter><Calculator><Keyboard /></Calculator></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly Screen', () => {
    const tree = TestRenderer.create(<BrowserRouter><Screen /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly Key', () => {
    const tree = TestRenderer.create(<BrowserRouter><Key /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly CalContent', () => {
    const tree = TestRenderer.create(<CalContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly Header', () => {
    const tree = TestRenderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
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
