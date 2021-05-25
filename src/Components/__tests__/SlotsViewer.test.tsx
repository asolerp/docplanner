import React from 'react';
import {SlotsViewer} from '@/Components';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SlotsViewer />).toJSON();
  expect(tree).toMatchSnapshot();
});
