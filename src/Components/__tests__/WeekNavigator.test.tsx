import React from 'react';
import {WeekNavigator} from '@/Components';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<WeekNavigator />).toJSON();
  expect(tree).toMatchSnapshot();
});
