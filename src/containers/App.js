import { useEffect, useState } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import robots from '../robots'
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const [searchfield, setSearchfield] = useState('')
  const [fetchedRobots, setFetchedRobots] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchfield(e.target.value)
  }

  const filteredRobots = fetchedRobots.filter( robot => (
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  ))

  useEffect(() => {
    const fetchRobots = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      setFetchedRobots(data)
    }
    fetchRobots()
  
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
    
    {
      (fetchedRobots.length === 0 )
        ? 
        <div>
          <h1>Loading...</h1>
          </div>
        :
        <div>
          <SearchBox handleSearch={handleSearch} />
          <ErrorBoundary>
            <CardList robot_list={filteredRobots} />
          </ErrorBoundary>
        </div>
    }

    </div>
  );
}

export default App;
