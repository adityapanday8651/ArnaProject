import React, { useEffect, useState } from "react";
import axios from "axios";
import { Space, Table, Tag } from "antd";

function DataFetching() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const prodColumn = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  return (
    <>
      <h1>This is Ptoducts List</h1>
      <table>
        <tr>
          <td border={1}>
            <Table
              columns={prodColumn}
              dataSource={product}
              pagination={true}
            />
          </td>
        </tr>
      </table>
    </>
  );
}

export default DataFetching;
