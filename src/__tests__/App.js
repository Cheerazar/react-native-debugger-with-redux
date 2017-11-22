import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON().type).toEqual('View');
});
