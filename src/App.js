import './App.css';
import React from 'react';
import NewPostHeader from './NewPostHeader';
import PostTypeSelector from './PostTypeSelector';

function App() {
  return (
    <div className="App">
      <NewPostHeader />
      <PostTypeSelector />
    </div>
  );
}

export default App;
