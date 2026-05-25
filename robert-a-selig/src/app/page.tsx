import HomePage from "./Home/HomePage"
import Footer from "./Header/footer";
import Header from "./Header/header";
import "./page.css"

export default function Home() {
  return (
    <><Header />
      <hr className="orange-border"/>
 <HomePage />
       <hr className="orange-border"/>
 <Footer />
    </>
  );
}