
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "./Register";
import Logout from "../pages/Logout";
import Company from "./Company";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="campany"
          element={
            <Layout>
              <Company />
            </Layout>
          }
        />
<Route
          path="logout"
          element={
            <Layout>
              <Logout />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;