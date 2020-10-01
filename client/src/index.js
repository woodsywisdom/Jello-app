import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <App/>
      </Provider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
