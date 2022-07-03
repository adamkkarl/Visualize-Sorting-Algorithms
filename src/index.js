import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Board extends React.Component {
  render() {
    return (
      <div className="Board">
        Hello World
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Board />
  // <React.StrictMode>
  // </React.StrictMode>
);
