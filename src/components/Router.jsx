import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Site from "./Site";
import AdminForm from "../pages/AdminForm";
import Partner from "../pages/Partner";
import Questionare from "../pages/Questionare";

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
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
