import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Site from "./Site";
import AdminForm from "../pages/AdminForm";
import Questionare from "../pages/Questionare";
import Register from "./Register";
import Logout from "../pages/Logout";
import Company from "./Company";
import Pay from "../pages/Pay";

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
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/site"
          element={
            <Layout>
              <Site />
            </Layout>
          }
        />
        <Route
          path="/adminform"
          element={
            <Layout>
              <AdminForm />
            </Layout>
          }
        />

        <Route
          path="/questionare"
          element={
            <Layout>
              <Questionare />
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
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/logout"
          element={
            <Layout>
              <Logout />
            </Layout>
          }
        />
        <Route
          path="/campany"
          element={
            <Layout>
              <Company />
            </Layout>
          }
        />
        <Route
          path="pay"
          element={
            <Layout>
              <Pay />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
