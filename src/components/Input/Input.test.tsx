import { fireEvent, render } from '@testing-library/react-native';
import { Input } from '.';

describe('<Input />', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<Input label="E-mail" />);
    const label = getByText('E-mail');
    expect(label).toBeTruthy();
  });

  it('should render placeholder correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Digite seu e-mail" />);
    const input = getByPlaceholderText('Digite seu e-mail');
    expect(input).toBeTruthy();
  });

  it('should display error message when provided', () => {
    const { getByText } = render(<Input errorMessage="Campo obrigatório" />);
    const error = getByText('Campo obrigatório');
    expect(error).toBeTruthy();
  });

  it('should call onChangeText correctly', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(
      <Input placeholder="Digite algo" onChangeText={onChangeTextMock} />
    );

    const input = getByPlaceholderText('Digite algo');

    fireEvent.changeText(input, 'Testando');

    expect(onChangeTextMock).toHaveBeenCalledWith('Testando');
  });

  it('should match snapshot without error', () => {
    const tree = render(<Input label="Senha" placeholder="Digite sua senha" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with error', () => {
    const tree = render(
      <Input label="Senha" placeholder="Digite sua senha" errorMessage="Senha inválida" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
