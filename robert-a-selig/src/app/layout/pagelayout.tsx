//   import Footer from "./header/footer";
// import Header from "./header/header";
import Footer from "../header/footer"
import Header from "../header/header"
import "../page.css"
  
  export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
  <Header />
      <hr className="orange-border"/>
        <main className="background-grey">
      {/* <div className="background-grey"> */}
      <div className="background-white">
        <div className="home-header">
        {children}
             </div >       </div > 
                </main>
               <hr className="orange-border"/>
         <Footer />
            </>
        )}