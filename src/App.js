import './App.css';
import { Calendar } from './components/Calendar';
import { data } from './sample.json';
import { useState, useEffect } from 'react';
import { EventContent } from './components/EventContent';
function App() {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    if (data?.allAppointments) {
      const d = data.allAppointments.edges.map(({ node }) => ({
        id: node.id,
        title: `${node.patient.firstName} ${node.patient.lastName}`,
        start: `${node.bookingDate}T${node.timeslot.startTime}`,
        end: `${node.bookingDate}T${node.timeslot.endTime}`,
        extendedProps: node
      })
      )
      setEventData(d)

    }
  }, [])
  return (
    <div className="App">
      <h1 className="App-header">Calendar app</h1>
      <div style={{padding:10}}>
      <Calendar events={eventData} EventContentComponent={EventContent} height={800} />
      </div>
    </div>
  );
}

export default App;
