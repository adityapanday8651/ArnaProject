import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DataFetching from "./dataUser/DataFetching";
import Registration from "./pages/Registration";
import NavbarPage from "./pages/NavbarPage";
import UsersPage from "./pages/UsersPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TestingPage from "./pages/TestingPage";
import CounterPageFetching from "./pages/CounterPageFetching";
import TestFlag from "./pages/TestFlag";
import AllAPITest from "./pages/AllAPITest";
import TablePdfDownload from "./pages/TablePdfDownload";
import StudentDetails from "./pages/StudentDetails";
import EmployeeDept from "./pages/EmployeeDept";
import UserNetPage from "./pages/UserNetPage";

function App() {
  return (
    //  <CounterPageFetching />
    // <TestFlag />
    // <AllAPITest />
    // <StudentDetails />
    // <EmployeeDept />
    <UserNetPage />
    // <TablePdfDownload />
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<NavbarPage />} />
    //     <Route path="/products" element={<DataFetching />} />
    //     <Route path="/signup" element={<Registration />} />
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <NavbarPage />
    //   <Routes>
    //   <Route index element={<LoginPage />}></Route>
    //     <Route path="/products" element={<DataFetching />} />
    //     <Route path="/signup" element={<Registration />} />
    //     <Route path="/users" element={<UsersPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
