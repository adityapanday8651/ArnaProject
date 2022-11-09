import { Button, Col, Form, Input, Row, Table } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TestFlag(){
    const [isShow, setIsShow] = useState(false);
    const [counter, setCounter] = useState('');
    const [counterPartyName, setCounterPartyName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const disableCounterPartyForm = !!counterPartyName && !!registrationNumber && !!mobileNo;
    console.log('disableCounterPartyForm : ', disableCounterPartyForm);
    const handleClick = () =>{
        setIsShow(current => !current);
    };
    const columns = [
        {
            title: 'EndurId',
            dataIndex: 'endurId',
            key: 'endurId',
          },
          {
            title: 'RegistrationNumber',
            dataIndex: 'registrationNumber',
            key: 'registrationNumber',
          },
          {
            title: 'CounterPartyName',
            dataIndex: 'counterPartyName',
            key: 'counterPartyName',
          },
          {
            title: 'KycEvolutionDate',
            dataIndex: 'kycEvolutionDate',
            key: 'kycEvolutionDate',
          },
        {
          title: 'CompanyStatus',
          dataIndex: 'companyStatus',
          key: 'companyStatus',
        },
        {
          title: 'Industry',
          dataIndex: 'industry',
          key: 'industry',
        },
        {
            title: 'CounterpartyClassification',
            dataIndex: 'counterpartyClassification',
            key: 'counterpartyClassification',
          },
      ];
      useEffect(() => {
        axios.get('https://localhost:7165/api/CounterParties').then((response) =>{
            setCounter(response.data);
        });
    }, []);
    return (
        <div>
            <Button type="primary" onClick={handleClick}>Open Details of CounterParty</Button>
            {isShow && (
                <div>
                    <Form>
                        <h1>Counter Party Registration</h1>
                      <Row>
                        <Col span={6}>
                          <Form.Item
                            label="CounterPartyName"
                            name="counterPartyName"
                            rules={[
                              {
                                required: true,
                                message: 'CounterPartyName is required',
                              }
                            ]}
                          >
                            <Input onChange={(cpt) => setCounterPartyName(cpt.target.value)} />
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item
                            label="RegistrationNumber"
                            name="registrationNumber"
                            rules={[
                              {
                                required: true,
                                message: 'RegistrationNumber is required',
                              }
                            ]}
                          >
                            <Input type="number" onChange={(reg) => setRegistrationNumber(reg.target.value)} />
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item
                            label="MobileNumber"
                            name="mobileNo"
                            rules={[
                                {
                                  required: true,
                                  message : 'MobileNo is Required.',
                                  min:10,
                                  max:10,
                                }
                              ]}
                            >
                            <Input onChange={(mnn) => setMobileNo(mnn.target.value)}/>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                </div>
            )}
            {disableCounterPartyForm && (
                <div>
                    <h1>This is Counter Parties Table</h1>
                  <Table
                    dataSource={counter}
                    columns={columns}
                  />
                </div>
            )}
        </div>
    );
}


export default TestFlag;