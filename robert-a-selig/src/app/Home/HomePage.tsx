import "./home-page.css"
import portrait from "./Robert_a_Selig.jpg"

export default function HomePage() { 
  return (
     <main className="background-grey">
      <div className="background-white">
      <h2>About</h2>
      <img src="/Robert_a_Selig.jpg" alt="Robert A. Selig portrait" className="portrait-image"/>
      {/* <portrait  /> */}
      <div className="home-content"> 
Robert A. Selig is a historical consultant who received his Ph.D. in history from the Universität Würzburg in Germany in 1988. He published a number of books on the American War of Independence such as Hussars in Lebanon! A Connecticut Town and Lauzun’s Legion during the American Revolution, 1780-1781 (Lebanon, 2004) and a translation of A Treatise on Partisan Warfare by Johann von Ewald. Introduction and Annotation by Robert A. Selig and David Curtis Skaggs (Westport, 1991).
      </div>
      <div className="home-content">
        He is a specialist on the role of French forces under the comte de Rochambeau during the American Revolutionary War and serves as project historian to the National Park Service for the Washington-Rochambeau Revolutionary Route National Historic Trail Project. For this project he researched and wrote surveys and resource inventories for the states of New Hampshire, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, the District of Columbia and Virginia through which American and French forces marched in 1781 and 1782. These reports are available on the internet at https://w3r-us.org/history-by-state/
      </div>
      <div className="home-content">
        He also served and serves as Project Historian for American Battlefield Protection Program projects such as the “Battle of Princeton”, “Battle of Green Spring and Spencer’s Ordinary”, the “Paoli Massacre”, “Battle of the Clouds”, “Battle of Red Bank”, “Battle of Bennington”, “Battle of Hubbardton” and the “Battle of Brandywine”.
      </div>
      <div className="home-content">
        He has been a regular contributor to German Life magazine for over 20 years and has also published more than 100 articles in American and German scholarly and popular history magazines such as the the William and Mary Quarterly, Eighteenth-Century Studies, the Yearbook of the Society for German-American Studies, Journal of Caribbean History, American Heritage, Naval History, Military History Quarterly, Colonial Williamsburg, German Life, Damals, (in German) and the Journal of the Johannes Schwalm Historical Association as well as chapters in various books and anthologies.
      </div>
      </div>
    </main>
  )
}     
     
