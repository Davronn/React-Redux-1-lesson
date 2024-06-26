import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { Table, Input } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/userActions";

const { Search } = Input;

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 

 

  

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredStudents = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      render: (text, record, index) => index + 1,
      key:"firstName",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
  ];

  return (
    <div className="d-flex">
      <Dashboard />
      <div className="container">
        <h2 className="my-3">Students app</h2>
        <div className="search mb-3" style={{ width: "260px" }}>
          <Search
            placeholder="input search text"
            onSearch={handleSearch}
            enterButton
          />
        </div>
        <div>
          <Table
            size="middle"
            dataSource={filteredStudents}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default Students;
