import HomePage from "./Home/HomePage"
import Contact from "./Contact/Contact"
import Footer from "./Header/footer";
import Header from "./Header/header";
import "./page.css"

export default function Home() {
  return (
    <><Header />
      <hr className="orange-border"/>
        <main className="background-grey">
      {/* <div className="background-grey"> */}
    
      <div className="background-white">
        <div className="home-header">
 <HomePage />
  <Contact />
        </div >       </div > 
        </main>
       <hr className="orange-border"/>
 <Footer />
    </>
  );
}