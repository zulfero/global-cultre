import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Herocard from "../components/Herocards";
// import Site from "../components/Site";

function Layout({ children }) {
  return (
    <div>
      <Nav />

      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
