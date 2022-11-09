import { Button, Col, Form , Input, Row} from "antd";
import React, { useState } from "react";

const LoginPage=()=>{
    const [mobileNo, setMobileNo]=useState("");
    const [password, setPassword]=useState("");
    const[userLogin, setUserLogin]=useState(""); 

    const loginValue={
        mobileNo : mobileNo,
        password:password,
    }
    const submitThis=()=>{
        setUserLogin(loginValue);
    }
    console.log("User Login Details : ", userLogin);
    return(     
        <Form onSubmit={submitThis}>
               <h1>This is Login Page</h1>
               <Row>
                <Col span={6}>
               
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
               <Form.Item label="Password" name="password" rules={[
                {
                    required:true,
                    message : 'Password is Required Minimum 8',
                    min: 8,
                    max:15   
                }
               ]}>
                <Input.Password onChange={(pass)=>setPassword(pass.target.value)} />
               </Form.Item >

               <Form.Item>
                <Button type="primary" onClick={submitThis}>Login</Button>
               </Form.Item>

               </Col>
               </Row>
            
        </Form>
    )
}

export default LoginPage;