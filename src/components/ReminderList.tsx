import Reminder from "../interfaces/Reminder";

interface ReminderListProps {
  items: Reminder[];
  removeReminder: (id: number) => void;
}

class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number){
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // a private method is not static!
  private calculateTax(income: number): number{
    return income * 0.2;
  }

  deposit(amount: number) : void {
    if (amount <= 0) {
      throw new Error("can't deposit zero or negative numbers");
    } else {
      this._balance += amount;
    }
  }
}

let account = new Account(0, "Mihai", 100);
account.deposit(50);

class Person {
  constructor(public firstName: string, public lastName: string){}

  get fullName(): string{
    return this.firstName + ' ' + this.lastName;
  }
}


export default function ReminderList({ items, removeReminder }: ReminderListProps): JSX.Element {

  return (
    <ul className="list-group">
      {items.map(item => <li className="list-group-item text-bg-dark border-info" key={item.id}>
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