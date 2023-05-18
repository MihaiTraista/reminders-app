import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/Reminder';
import Reminder from './interfaces/Reminder';

// const reminders: Reminder[] = [{
//   id: 1, title: "Reminder One"
// }];

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
      const resonse = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await resonse.json();
      // console.log("todso", todos[0]);

      setReminders(todos);
    }

    runAsync();
  }, []);

  return (
    <div className="App">
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
