import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Site from "./Site";
import AdminForm from "../pages/AdminForm";
import Partner from "../pages/Partner";

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
          path="/partner"
          element={
            <Layout>
              <Partner />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
