import { Button, Form, Input, Row, Col} from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";

function StudentDetails (){

    const FindData = (val) => {
        console.log('val value : ', val);
        axios.get(`https://localhost:7024/api/Students/${val}`)
        .then((res) => {
            console.log('Response : ', res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    return (
        <div>
            <h1>This is StudentDetails</h1>
            <Form>
                <Col span={6}>
                  <Form.Item label="Enter StudentsId : " name="studentsId">
                    <Input onChange={(val) => FindData(val.target.value)} placeholder="Enter StudentsId" />
                  </Form.Item>
                </Col>
                <Button onClick={FindData} type="primary" >StudentDetailsFindById</Button>
            </Form>
        </div>
    )
}
export default StudentDetails;