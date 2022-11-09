import React, { useState } from "react";
import { Input, Form, Col, Row, Radio, Select, Button } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const { Option } = Select;
  const registerValue = {
    firstName,
    lastName,
    emailId,
    password,
    mobileNo,
    address,
    gender,
    state,
  };

  // const formIsComplete =
  //   !!firstName &&
  //   !!lastName &&
  //   !!emailId &&
  //   !!password &&
  //   !!mobileNo &&
  //   !!address &&
  //   !!gender &&
  //   !!state;

  const handleSubmit = () => {
    axios
      .post("https://localhost:44364/api/UserRegistrations", registerValue)
      .then((res) => {
        console.log("Data Saved");
      })
      .catch(
        (err) => {
          console.error(err);
        }

        // axios.post("https://localhost:44364/api/UserRegistrations", {
        //   registerValue,
        // })
        //   .then((res) => console.log("Posting Data", res))
        //   .catch((error) => console.log(error));
      );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Registration Page</h1>
      <Row>
        <Col span={8}>
          <Form.Item
            label="FirstName"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'FirstName is Required',
              },
            ]}
          >
            <Input
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="LastName"
            name="lastName"
            rules={[
              {
                required: true,
                message : 'LastName is Required'
              },
            ]}
          >
            <Input
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Email Id"
            name="emailId"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid EmailId',
              },
              {
                required: true,
                message: 'Please input your EmailId',
              },
            ]}
          >
            <Input
              onChange={(em) => setEmailId(em.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Password is Required'
              },
            ]}
          >
            <Input.Password
              onChange={(pw) => setPassword(pw.target.value)}
              rules={[
                {
                  required: true,
                  message:'Password is Required',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Mobile No"
            name="mobileNo"
            rules={[
              {
                required: true,
                message : 'MobileNo is Required',
                min:10,
                max:10,
              }
            ]}
          >
            <Input
              type="number"
              onChange={(mn) => setMobileNo(mn.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Address is Required',
              },
            ]}
          >
            <Input onChange={(add) => setAddress(add.target.value)} />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message : 'Gender is Required',
              },
            ]}
          >
            <Radio.Group onChange={(mf) => setGender(mf.target.value)}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message : 'State is Required',
              },
            ]}
          >
            <Select onChange={(st) => setState(st)}>
              <Option value="Bihar">Bihar</Option>
              <Option value="Madhya Pradesh">Madhya Pradesh</Option>
              <Option value="Andhra Pradesh">Andhra Pradesh</Option>
              <Option value="Uttar Pradesh">Uttar Pradesh</Option>
              <Option value="Telangana State">Telangana State</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              onClick={handleSubmit}
             
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Registration;
