import { render } from '@testing-library/react-native';
import Main from '.';

describe('Main', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Main />);
    const textElement = getByText('Hello World');
    expect(textElement).toBeTruthy();
  });

  it('should have accessibilityRole header', () => {
    const { getByAccessibilityHint } = render(<Main />);
    const header = getByAccessibilityHint('header');
    expect(header).toBeTruthy();
    expect(header.props.children).toBe('Hello World');
  });

  it('should match snapshot', () => {
    const tree = render(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
