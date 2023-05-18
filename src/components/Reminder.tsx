import Reminder from "../interfaces/Reminder";

interface ReminderListProps {
  items: Reminder[];
}

export default function ReminderList({ items }: ReminderListProps): JSX.Element {
  return <div>
    <h1>reminder</h1>
  </div>
}