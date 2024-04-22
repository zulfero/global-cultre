import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Herocard from "../components/Herocard";
import Site from "../components/Site";


function Layout({Children}){
    return(
    <div>
        
<Nav/>

<Hero/>
<Herocard/>
<Site/>
<main className="min-h-screen">{Children}</main>
<Footer/>
    </div>)
}
export default Layout
