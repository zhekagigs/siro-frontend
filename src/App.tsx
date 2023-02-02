import React, { useEffect, useState } from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage'

type info = {
  accesibility: number,
  activity: string,
  key: string,
  link: string,
  participants: 1,
  price: number,
  type: string
}


function App() {
  const [cards, setCards] = useState<info[]> ([])

  useEffect(() => {
    pingAPI()
  }, [])

  const pingAPI = () => {
    fetch('http:/www.boredapi.com/api/activity')
    .then(response => response.json())
    .then((data:info) => {
      setCards([...cards, ...[data]])
    })
  }
  
  return (
    <div className="container">
        <ProjectsPage />
      </div>
  );
}

export default App;
