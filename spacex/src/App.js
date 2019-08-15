import React from 'react';
import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { createStore } from 'Redux';
import LaunchList from './components/LaunchList';
import { reducer } from './reducers';

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <LaunchList />
    </div>
  );
}

export default App;
