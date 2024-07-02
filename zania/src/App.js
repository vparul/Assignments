import React from 'react';
import './App.css';
import DocumentList from './components/DocumentList.js';

function App() {
  return (
    <div className="App">
      <h1>Document Viewer</h1>
      <DocumentList />
    </div>
  );
}

export default App;
