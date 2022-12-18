import "./styles.css";
import {useState, useEffect} from 'react'
const url = 'https://www.boredapi.com/api/activity/'


export default function App() {
  const [data, setData] = useState({})

  const activityData = async ()=>{
    const response = await fetch(url);
    const apiData = await response.json();
    setData(apiData)
  }
  useEffect(()=>{
    activityData()
  }, [])


  const handleClick = () =>{
    activityData()
  }

  return (
    <div className="App">
      <ul style={{listStyle:'none', textAlign:'left'}}>
        <li>Activity : {data.activity}</li>
        <li>Type : {data.type}</li>
        <li>Participants : {data.participants}</li>
      </ul>
      <button onClick={handleClick}>New Activity</button>
    </div>
  );
}
