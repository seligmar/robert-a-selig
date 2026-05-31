import HomePage from "./about/page"
import Contact from "./contact/page"
import Footer from "./header/footer";
import Header from "./header/header";
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