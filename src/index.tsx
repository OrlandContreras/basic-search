import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Search from './components/Search/Search';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Search />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
