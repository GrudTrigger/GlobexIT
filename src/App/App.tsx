import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Users from "../components/Users/Users";
import "./App.css";

function App() {
  const [users, setUser] = useState(null);

  const [searchUser, setSearchUser] = useState<string>("");

  const handleUnput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUsers(searchUser);
        setUser(data);
      } catch (error) {
        console.error("Ошибка при загрузке данный: ", error);
      }
    }
    fetchData();
  }, [searchUser]);
  console.log(searchUser);
  return (
    <section>
      <div className="container">
        <Search handleUnput={handleUnput} searchUser={searchUser} />
        <div className="containerUsers">
          {users &&
            users.map((user, i: string) => (
              <Users
                key={i}
                name={user.name}
                phone={user.phone}
                email={user.email}
                position_name={user.position_name}
                department={user.department}
                hire_date={user.hire_date}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default App;

async function getUsers(searchUser: string) {
  const res = await fetch(`http://127.0.0.1:3000?term=${searchUser}`);
  const data = await res.json();
  return data;
}
