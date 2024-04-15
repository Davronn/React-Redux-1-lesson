import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/userActions";

const Users = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName}. {user.group}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
