import React from 'react';
import ReactDOM from 'react-dom';
import Child from './children';

function App() {
  return (
    <>
      hello, Webpack11
      <Child />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
