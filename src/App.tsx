import React, { useEffect, useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './interfaces/Reminder';
import SuspenseComp from './components/SuspenseComp';

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
      let todos = await resonse.json();
      todos = todos.slice(0, 20)

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

      <Suspense>
        <SuspenseComp />
      </Suspense>

      <ReminderList items={reminders} removeReminder={removeReminder}/>
    </div>
  );
}

export default App;
