import TestRenderer from 'react-test-renderer';
import App from '../components/app/App.js';
import Keyboard from '../components/keyboard/Keyboard';
import Navbar from '../components/navbar/Navbar.js';

describe('test screenshots for all components', () => {
test('renders correctly App', () => {
    const tree = TestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly the keyboard', () => {
    const tree = TestRenderer.create(<Keyboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly the Navbar', () => {
    const tree = TestRenderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
