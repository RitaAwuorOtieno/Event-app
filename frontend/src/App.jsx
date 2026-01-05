import { useEffect, useState } from "react";
import { fetchEvents } from "./api";

function App() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Event Planner</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} — {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
