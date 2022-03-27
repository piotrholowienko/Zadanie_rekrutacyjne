import React, { useState, useEffect } from 'react'
import './App.css';
import Item from './components/Item';

function App() {

  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/albums/')
        .then(response => response.json())
        .then(data => {
          setData(data.slice(0, 10));
        });
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <div className='main-container'>
        <input type="checkbox" onChange={() => setChecked(!checked)} />
        <h1>Albums</h1>
        <div className={`items-container ${checked ? 'active' : null}`}>
          {data.map((item) => {
            // console.log(item);
            return <Item id={item.id} title={item.title} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
