import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import App from 'containers/App/App';

describe('<App />', () => {
  it('should render hello world', () => {
    const text = 'Hello World';
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.contains(text)).toEqual(true);
  });
});
