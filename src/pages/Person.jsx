import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UserItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userObj, setUserObj] = useState({});
  const { personId, loggedInAs } = useSelector(({ userAuth }) => userAuth);

  useEffect(() => {
    if (loggedInAs === "person") {
      navigate(`/persons/${id}`);
    } else {
      if (id !== personId) {
        navigate(`/persons/${personId}`);
      }
    }
  }, [id, personId, navigate, loggedInAs]);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUserObj(data);
    };
    getUser();
    setIsLoading(false);
  }, [id]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(userObj);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>UserItem {id}</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            defaultValue={userObj?.username}
            onChange={e => setUserObj({ ...userObj, username: e.target.value })}
          />
          <br />
          <input
            type="text"
            defaultValue={userObj?.name}
            onChange={e => setUserObj({ ...userObj, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            defaultValue={userObj?.email}
            onChange={e => setUserObj({ ...userObj, email: e.target.value })}
          />
          <br />
          <br />
          <input type="submit" value="Submit" className="bg-blue-500" />
        </form>
      </div>
    );
  }
};

export default UserItem;
