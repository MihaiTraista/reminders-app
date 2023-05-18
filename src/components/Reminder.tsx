import Reminder from "../interfaces/Reminder";

interface ReminderListProps {
  items: Reminder[];
}

export default function ReminderList({ items }: ReminderListProps): JSX.Element {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}