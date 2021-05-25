import React from 'react';
import {Button} from '@/Components';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

const mockPress = jest.fn();

test('renders correctly', () => {
  const tree = renderer
    .create(<Button title="Botón" onPress={mockPress} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('button with custom title emits onPress event', () => {
  const {getByText} = render(<Button title="Botón" onPress={mockPress} />);
  const button = getByText('Botón');

  fireEvent.press(button);

  expect(mockPress).toHaveBeenCalled();
});
