import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/Reminder';
import Reminder from './interfaces/Reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([{
    id: 1, title: "Reminder One"
  }]);

  useEffect(() => {
    const runAsync = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer <token>"
        }
      }
      const resonse = await fetch("https://jsonplaceholder.typicode.com/todos", options);
      const todos = await resonse.json();

      setReminders(todos);
    }

    runAsync();
  }, []);

  const removeReminder = (id: number) => {
    console.log("remove", id);
    setReminders(reminders.filter(rem => rem.id !== id));
  };

  return (
    <div className="App">
      <ReminderList items={reminders} removeReminder={removeReminder}/>
    </div>
  );
}

export default App;
