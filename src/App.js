import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(true);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        {/* <Button /> */}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FriendsList() {
  const friends = initialFriends;

  console.log(friends);
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
        // <Friend friend={friend.name} key={friend.id} />
      ))}
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3> {friend.name} </h3>
      {friend.balance < 0 && (
        <p className="red">
          Ты должен {friend.name}
          {friend.balance}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Ты должен {friend.name}
          {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>Ты и {friend.name} нечего не должны</p>}
      <button className="button">select </button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Имя друга</label>
      <input type="text" />
      <label>
        Ссылка на картинку
        {}
      </label>
      <input type="text" />
      <button className="button">add</button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Раздели счет с Х</h2>
      <label>Сумма счета</label>
      <input type="text" />
      <label>Твои расходы</label>
      <input type="text" />
      <label>Х расходы</label>
      <input type="text" disabled />
      <label>Кто оплачивает счет</label>
      <select>
        <option value="user">Ты</option>
        <option value="friend">Х</option>
      </select>
      <button className="button">Разделить счет</button>
    </form>
  );
}
