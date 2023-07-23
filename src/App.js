import { useEffect, useState } from 'react';
import './App.css';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import { getEventData } from './Utils/Requests';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

function App() {
  const [eventData, setEventData] = useState([])
  
  useEffect(()=>{
    initializeIcons();
    
    getEventData().then( data =>{
      if(!data.hasOwnProperty("value")){
        alert("An error occured while fetching event data.")
      }
      else if( !data ){
        alert("No events found.")
      }
      else{
        setEventData(data.value)
      }
    })
  }, [])
  
  return (
    <div className="App">
      {
        eventData.length ? <UpcomingEvents eventsData={eventData} /> : "Loading..."
      }
    </div>
  );
}

export default App;
