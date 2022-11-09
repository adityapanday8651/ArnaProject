import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";

function CounterPageFetching(){
    const [counter, setCounter] = useState('');
    console.log('Data : ', counter);

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
    
        <Table dataSource={counter} columns={columns} /> 
    );
}
export default CounterPageFetching;