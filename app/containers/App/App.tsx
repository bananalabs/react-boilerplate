/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import { toggle } from './actions';

// tslint:disable-next-line
import * as React from 'react';
import * as styles from './style.css';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect';
import { getVisibility } from './selectors';

export interface AppProps {
  show: boolean;
  dispatch: any;
}

class App extends React.Component<AppProps, {}> {

  handleClick(): void {
    this.props.dispatch(toggle());
  }

  render() {
    const show = this.props.show ? 'visible' : 'hidden';
    return (
      <div>
        <p className={styles.title} style={{visibility:show}}>Hello World</p>
        <button className='btn btn-default'
          onClick={this.handleClick.bind(this)}>Click Me!</button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  show: getVisibility(),
});

export default connect(mapStateToProps)(App);
