import { Table, Image, Col, Row, Spin, Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AllAPITest(){
    const [productData, setProductData] = useState("");
    const [flag, setFlag] = useState(true);
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    useEffect (() => {
        axios.get('https://dummyjson.com/products')
        .then((res) =>{
            setProductData(res.data.products);
            setFlag(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [flag]);
    const addData = {
        title,
        brand,
    };
    console.log('Choosen Value : ', addData);

    const addProduct = () => {
        axios.post('https://dummyjson.com/products/add',addData)
        .then((res) => {
            console.log(res.data);
            console.log('Products Addedd Successfully');
        })
    };
    const columnss = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text=> <a>{text}</a>
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: price=> <p style={{ color: '#ff0012', fontSize: 15 }}>{price}</p>
            
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: rating=> <b>{rating}</b>
        },
        {
            title: 'Images',
            dataIndex: 'images',
            key: 'images',
            render: (images) => {
                const Imagess = Array.from(new Set(images));
                return (
                <div>
                 <Image width={50} src={Imagess[0]}/>
                </div>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];
    return(
    <div>
        <h1>Add Products</h1>
        <Row>
           <Form>
            <Col>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required:true,
                        message: 'Title is required',
                    },
                ]}>
                <Input onChange={(tit) => setTitle(tit.target.value)} placeholder="Enter Title" />
              </Form.Item>
            </Col>
            <Col>
                <Form.Item
                  label="Brand"
                  name="brand"
                  rules={[
                    {
                        required: true,
                        message: 'Brand is required',
                    },
                  ]}
                >
                    <Input onChange={(bran) => setBrand(bran.target.value)} placeholder="Enter Brand" />
                </Form.Item>
            </Col>
           </Form>
        </Row>
        <Row>
            <Col span={8}>
                <Button type="primary" onClick={addProduct}>Add Products</Button>
            </Col>
        </Row>
        <Row>
        <h1>This is ProductData Table</h1>
      <Col span={24}>
        <Spin spinning={flag}>
          <Table
            style={{ maxWidth: '100', margin: '20px' }}
            dataSource={productData}
            columns={columnss}
            pagination={false}
            scroll={{x: 100, y: 400 }}
            size="small" 
            className="small-text-table"
            bordered
          />
          </Spin>
      </Col>
      </Row>
    </div>
    )
}
export default AllAPITest;