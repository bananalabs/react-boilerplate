/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// tslint:disable-next-line
import * as React from 'react';
import * as styles from './style.css';

function App() {
  return (
    <div>
      <p className={styles.title}>Hello World</p>
    </div>
  );
}

export default App;
