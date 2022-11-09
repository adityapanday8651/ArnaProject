import React from "react";

import "antd/dist/antd.css";
import { Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";

function NavbarPage(props) {
  const location = useLocation();
  console.log("location", location);
  if (location.pathname.startsWith("/")) {
    return (
      <Layout className="layout">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="/">
            <Link to="/home">Home</Link>
          </Menu.Item>

          <Menu.Item key="/products">
            <Link to="/products">Products</Link>
          </Menu.Item>

          <Menu.Item key="/signup">
            <Link to="/signup" />
            SignUp
          </Menu.Item>

          <Menu.Item key="/users">
            <Link to="/users" />
            Users
          </Menu.Item>
        </Menu>
      </Layout>
    );
  }
}

export default NavbarPage;
