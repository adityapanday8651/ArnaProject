import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import axios from "axios";
import { useState } from "react";

function EmployeeDept(){
    const [empDeptId, setEmpDeptId] = useState('');
    const [emp, setEmp] =useState('');
    console.log('EMployee : ', emp);
    console.log('Employee Data : ', empDeptId);
    const findDepartmentId = (dept) =>{
        axios.get(`https://localhost:7290/employee/${dept}`)
        .then((res) =>{
            setEmpDeptId(res.data)
        })
    }
    return (
        <div>
            <h1>This is Employee Department Page </h1>
            <Form>
                <Row>
                    <Col >
                <Form.Item
                  label="DepartmentId"
                  name="departmentId"
                  rules={[
                    {
                        required: true,
                        message: 'DepartmentId is required.'
                    }
                  ]}
                >
                    <InputNumber onSelect={(dept) => findDepartmentId(dept.target.value)} placeholder="DepartmentId" />
                </Form.Item>
                    </Col>
                </Row>

                <Col span={8}>
            <Form.Item label="Employee Select">
              <Select value={empDeptId} />
            </Form.Item>
          </Col>
            </Form>
        </div>
    )
}
export default EmployeeDept;