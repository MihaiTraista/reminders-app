import Reminder from "../interfaces/Reminder";

interface ReminderListProps {
  items: Reminder[];
  removeReminder: (id: number) => void;
}

export default function ReminderList({ items, removeReminder }: ReminderListProps): JSX.Element {
  return (
    <ul className="list-group">
      {items.map(item => <li className="list-group-item" key={item.id}>
        {item.title}
        <button 
          className="btn btn-danger mx-2"
          onClick={(e) => { removeReminder(item.id) }}
          >Delete
        </button>
      </li>)}
    </ul>
  )
}