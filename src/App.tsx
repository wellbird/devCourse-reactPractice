import React from 'react';
import './App.css';

{
  /*
  작성자 : JW
  날짜 : 2025.01.14
  내용 : ~
  */
}

function App() {
  let name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px',
  };
  return (
    <div className="container">
      <h1 style={style}>Hello, {name}!!</h1>
      <p>반갑습니다.</p>
      <hr />
    </div>
  );
}

export default App;
