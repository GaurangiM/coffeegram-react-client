import React, {useState, useEffect} from 'react'
import axios from 'axios'

const LandingPage = ()=> {
  const [cafeList, setCafeList] = useState([]);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get("http://localhost:4000/cafes")
      console.log(response.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Welcome to coffee community !</h1>
      <button>Explre Cafes</button>
    </div>
  )
}

export default LandingPage