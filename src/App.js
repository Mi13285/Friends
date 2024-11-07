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
  const [friends, setFriend] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "закрыть" : "Добавить друга"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FriendsList({ friends }) {
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
  console.log(friend);
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
      <Button>select1</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Имя друга</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        Ссылка на картинку
        {}
      </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Добавить</Button>
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
