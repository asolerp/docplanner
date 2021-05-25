import React from 'react';
import {SlotItem} from '@/Components';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const slot = {
    Start: '2021-04-26T09:00:00',
    End: '2021-04-26T09:10:00',
  };

  const tree = renderer.create(<SlotItem slot={slot} />).toJSON();
  expect(tree).toMatchSnapshot();
});
