import { Col, Row, Form, Select } from "antd";
import { useState } from "react";
import JsonData from "../dataUser/Aditya.json";

function TestingPage(){
  const [title, setTitle] = useState('');
  const [detailsTitle , setDetailsTitle] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  console.log('All Json Data ' , JsonData);

  const linkApi = "https://jsonplaceholder.typicode.com/todos/1";
  console.log('Link API Only : ', linkApi);
  const productSelectBrands = (pbrands) =>{
    setBrand(pbrands);
    const filterBrands =Object.values(JsonData.products).filter((pfb) => pfb.brand === pbrands);
    const filterProductTitle = Object.values(filterBrands).map((infoTitle) => infoTitle.title);
    const filterProductPrice = Object.values(filterBrands).map((infoPrice) => infoPrice.price);
    const filterProductBrand =Object.values(filterBrands).map((infobrands) => infobrands.category);
    const filterProductRating = Object.values(filterBrands).map((infoRating) => infoRating.rating);
    const filterProductStocks = Object.values(filterBrands).map((infoStocks) => infoStocks.stock);

    let filterProductBrandArray = Array.from(new Set(filterProductBrand));
    let filterProductTitleArray = Array.from(new Set(filterProductTitle));
    let filterProductPriceArray = Array.from(new Set(filterProductPrice));
    let filterProductRatingArray = Array.from(new Set(filterProductRating));
    let filterProductStocksArray = Array.from(new Set(filterProductStocks));


    let usingArrayFrom = Array.from(filterProductTitleArray);
    console.log('usingArrayFrom : ', usingArrayFrom);
    usingArrayFrom = usingArrayFrom[0].split(',');
    setDetailsTitle(usingArrayFrom[0]);
    setTitle(usingArrayFrom[0]);

    setBrand(filterProductBrandArray);
    setCategory(filterProductBrandArray);
    setBrand(filterProductPriceArray);
    setPrice(filterProductPriceArray);
    setBrand(filterProductRatingArray);
    setRating(filterProductRatingArray);
    setBrand(filterProductStocksArray);
    setStock(filterProductStocksArray);
  }

  const productsChoose = {
    title:title,
    brand:brand,
  };
  console.log("Choosen Values  : ", productsChoose);
  const productsBrands = Object.values(JsonData.products).map((brandsProd) => brandsProd.brand);
  const productsBrandsArray = Array.from(new Set(productsBrands));
  console.log(' Products Brands : ', productsBrandsArray);
    return(
      <div>
        <Form>
      <h1>This is Products Information</h1>
      <Row>
      <Col span={8}>
            <Form.Item label="Products Brand">
              <Select onChange={(pbrands)=> productSelectBrands(pbrands)}>
                {productsBrandsArray.map((cpClass) => (
                  <Select.Option key={cpClass} value={cpClass}>
                    {cpClass}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
      <Col span={8}>
            <Form.Item label="Products title">
              <Select value={title}>
                <Select.Option value={detailsTitle} />
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Products Price">
              <Select value={price}>
                <Select.Option value={price}/>
                </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Products Categories">
              <Select value={category}>
                <Select.Option value={category} />
                </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Rating ">
              <Select value={rating}>
                <Select.Option value={rating} />
                </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Stocks ">
              <Select value={stock}>
                <Select.Option value={stock} />
                </Select>
            </Form.Item>
          </Col>
          </Row>
          </Form>
      </div>   
    )
}
export default TestingPage;