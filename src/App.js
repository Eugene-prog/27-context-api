import { useState } from 'react';
import './App.css';
import User from './components/User';


function App() {
  const [user, setUser] = useState('User');
  return (
    <div className="App">
      <User user={user}/>
    </div>
  );
}

export default App;
