import HomePage from "./about/page"
import Contact from "./contact/page"
import PageLayout from "./layout/pagelayout"; //"../layout/pagelayout"
import Footer from "./header/footer";
import Header from "./header/header";
import "./page.css"

export default function Home() {

  return (
    <>
    {/* <Header />
      <hr className="orange-border"/>
        <main className="background-grey">
      {/* <div className="background-grey"> 
      <div className="background-white">
        <div className="home-header"> */}
        <PageLayout>
 <HomePage />
  </PageLayout>
     {/* </div >       </div > 
        </main>
       <hr className="orange-border"/>
 <Footer />
    */} </>
  );
}