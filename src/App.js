import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(['Jouni', 'Pekka', 'Ilkka']);
  }, [])


  return (
    <div>
      <h3>Names</h3>
      <table>
        {names.map((name, index) => (
          <tr key = {index}><td>{name}</td></tr>
        ))
        }
      </table>
    </div>
  );
}

export default App;
