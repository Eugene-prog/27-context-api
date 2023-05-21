import { useState } from 'react';
import './App.css';
import User from './components/User';
import UserContext from './context/UserContext';


function App() {
  const [user, setUser] = useState('Mike');
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
