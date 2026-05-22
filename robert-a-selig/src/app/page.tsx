import Footer from "./Header/footer";
import Header from "./Header/header";
import "./page.css"

export default function Home() {
  return (
    <><Header />
      <hr className="orange-border"/>
      <main className="background-grey">
      <h1>To get started, edit the page.tsx file.</h1>
    </main>
       <hr className="orange-border"/>
 <Footer />
    </>
  );
}
