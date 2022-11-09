import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form, Input, Radio, Select } from "antd";
import axios from "axios";

function UsersPage() {
  const [users, setUsers] = useState("");
  console.log('Userss : ', users);
  const [flag, setFlag] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [data, setData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const showEditModel = (user) => {
    console.log("user", user);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmailId(user.emailId);
    setMobileNo(user.mobileNo);
    setData(user);
    setEditModal(true);
  };

  const handleCancle = () => {
    setEditModal(false);
  };

  const handleOk = () => {
    setEditModal(false);
  };

  const updateValue = {
    id: data.id,
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    password: data.password,
    mobileNo: data.mobileNo,
    address: data.address,
    gender: data.gender,
    state: data.state,
  };

  const updateFormIsComplete =
    !!firstName && !!lastName && !!emailId && !!mobileNo;

  const handleEdit = () => {
    console.log(updateValue);
    axios
      .put(
        `https://localhost:44364/api/UserRegistrations/update/${data.id}`,
        updateValue
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://localhost:44364/api/UserRegistrations")
      .then((res) => {
        setUsers(res.data);
        console.log("Get All User ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [flag]);

  const filteredUsers =
    users && users.filter((dd) => !!dd.firstName && !!dd.lastName);

  const handleDelete = (user) => {
    axios
      .delete(`https://localhost:44364/api/UserRegistrations/user/${user.id}`)
      .then((response) => {
        setFlag(true);
      });
  };

  const usersColumn = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "EmailId",
      dataIndex: "emailId",
      key: "emailId",
    },
    {
      title: "MobileNo",
      dataIndex: "mobileNo",
      key: "mobileNo",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (user) => (
        <div>
          <Button
            type="danger"
            value="Delete"
            onClick={() => handleDelete(user)}
          >
            Delete
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            type="primary"
            value="Edit"
            onClick={() => showEditModel(user)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1>This is User List Page Only</h1>
      <Table
        columns={usersColumn}
        dataSource={filteredUsers}
        pagination={true}
      />

      <Modal
        title="Edit Modal"
        open={editModal}
        onOk={handleOk}
        onCancel={handleCancle}
      >
        <Form onSubmit={handleEdit}>
          <Form.Item label="FirstName" name="firstName">
            <Input
              value={firstName}
              defaultValue={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Item>

          <Form.Item label="LastName" name="lastName">
            <Input
              value={lastName}
              defaultValue={lastName}
              onChange={(lname) => setLastName(lname.target.value)}
            />
          </Form.Item>

          <Form.Item label="Email Id" name="emailId">
            <Input
              value={emailId}
              defaultValue={emailId}
              type="emailId"
              onChange={(emid) => setEmailId(emid.target.value)}
            />
          </Form.Item>
          <Form.Item label="Mobile No" name="mobileNo">
            <Input
              value={mobileNo}
              defaultValue={mobileNo}
              onChange={(mob) => setMobileNo(mob.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleEdit}
              disabled={!updateFormIsComplete}
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UsersPage;
