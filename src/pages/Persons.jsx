import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    };
    getUsers();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        {users?.map((u, idx) => (
          <Link
            to={`/persons/${u.id}`}
            key={idx}
            className="border-2 border-blue-400 mb-3 p-3 rounded-lg"
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
