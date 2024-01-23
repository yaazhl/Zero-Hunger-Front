import './App.css';

import { UserProvider } from './Usercontext';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
 


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    try {
      const res = await fetch(`http://localhost:3100/all`);
      const FoodData = await res.json();
     
      setData(FoodData.reverse());
    } catch (error) {
      console.log(error); 
    }
    finally {
      
    }
  };

  return (
    <UserProvider
      value={{ data, setData, fetchData}}
    >
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </UserProvider>
  );
}

export default App;
