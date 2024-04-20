import { BrowserRouter, Routes, Route } from "react-router-dom";
i
function Router() {
  return (
    <>
      <BrowserRouter />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <home />
            </Layout>
          }
        ></Route>
      </Routes>
      <BrowserRouter />
    </>
  );
}
export default Router;
