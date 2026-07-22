import Image from 'next/image';
import PageLayout from '../layout/pagelayout';
//import roadmap from './route-map-vertical.jpg';
import './publications.css';

export default function publications() {
  return (
    <>
      <PageLayout>
        <h2>Publications</h2>
        {/*  https://nextjs.org/docs/app/api-reference/components/image */}
        {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
        <div className='publications-grid'>
          <figure className='publications-figure'>
            <Image
              src='/route-map-vertical.jpg'
              alt='French map of the route to Yorktown, 1782'
              className='roadmap-image'
              width={250}
              height={700}
            />{' '}
            <figcaption className='publications-figure-caption'>
              French map of the route to Yorktown, 1782
              <div className='image-caption-source'>
                Geography and Map Division, Library of Congress
              </div>
            </figcaption>
          </figure>
          {/* </div> */}
          <div className='publications-grid-column'>
            <h3 className='publication-margin'>
              MAJOR PUBLICATIONS AND RESEARCH REPORTS:
            </h3>
            <div className='publication-margin'>
              French Engineers at Butts Hill Fort: Results of Research in the
              Archives du Génie, Service Historique de la Defense (SHD) and in
              the Archives Nationales de France (ANF) for Manuscripts and Maps
              related to French Engineers at Butts Hill Fort in Portsmouth,
              Rhode Island. Published online in July 2026 at:{' '}
              <a
                href='https://battleofrhodeisland.org/butts-hill-fort-frenchengineers/'
                target='_blank'
              >
                https://battleofrhodeisland.org/butts-hill-fort-frenchengineers/
              </a>
            </div>
            <div className='publication-margin'>
              “Damages, Depredations, Sufferings and Destruction: The Landscape
              of Conflict and the ‘Late War with Great Britain’”. In:{' '}
              <i>The Archaeology of the American Revolution</i> Richard F. Veit
              and Matthew A. Kalos, eds., (Gainesville: University Press of
              Florida, 2025) pp. 205-227 (With Wade P. Catts).
            </div>
            <div className='publication-margin'>
              Rochambeau's Engineers at Butts Hill Fort, July 1780 - June 1781.
              Published online in June 2024 at:{' '}
              <a
                href=' https://battleofrhodeisland.org/rochambeaus-engineers-at-butts-hill-fort-july-1780-june-1781/'
                target='_blank'
              >
                https://battleofrhodeisland.org/rochambeaus-engineers-at-butts-hill-fort-july-1780-june-1781/
              </a>
            </div>{' '}
            <div className='publication-margin'>
              {' '}
              See also Gloria H. Schmidt, Digging in: Information from Robert
              Selig’s work on the French at Butts Hill at:{' '}
              <a
                href='https://battleofrhodeisland.org/digging-in-information-from-robert-seligs-work-on-the-french-at-butts-hill/'
                target='_blank'
              >
                https://battleofrhodeisland.org/digging-in-information-from-robert-seligs-work-on-the-french-at-butts-hill/
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              Newport’s Last Slave Auction: Rochambeau’s Prizes. Published
              on-line in July 2024 at:{' '}
              <a
                href=' https://battleofrhodeisland.org/newports-last-slave-auction-rochambeaus-prizes/'
                target='_blank'
              >
                https://battleofrhodeisland.org/newports-last-slave-auction-rochambeaus-prizes/
              </a>
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                The Citizens of Westfield and the Coming of the American
                Revolution, 1774-1777{' '}
              </i>
              Research report prepared for the Westfield Historical Society
              (Westfield, NJ 2025){' '}
            </div>
            <div className='publication-margin'>
              <i>
                The Historical Record of the March of Continental Army Forces
                through Westfield, New Jersey, in August 1781.
              </i>{' '}
              Research report prepared for the Westfield Historical Society
              (Westfield, NJ 2024){' '}
            </div>
            <div className='publication-margin'>
              <i>
                "L’expédition particulière and the American War of Independence,
                1780–1783."{' '}
              </i>
              In:
              <i>
                 Waging War in America 1775-1783. Operational Challenges of Five
                Armies
              </i>
               Don N. Hagist, ed. (Warwick: Helion & Company, 2023), pp.
              171-191.
            </div>
            <div className='publication-margin'>
              "The Washington-Rochambeau Revolutionary Route National Historic
              Trail."{' '}
              <i>Newport History. Journal of the Newport Historical Society </i>
              no. 287 vol. 98, Winter 2022/Spring 2023), pp. 1-30.
            </div>
            <div className='publication-margin'>
              {' '}
              ”De Newport à Yorktown, à la Victoire et à la Gloire : la Route
              Washington-Rochambeau et la Victoire du 19 octobre 1781.” In :
              Actes du Colloque International : Victoire de Yorktown et
              naissance de l’amitié franco-Américaine Bulletin de la Société
              Archéologique Scientifique & Littéraire du Vendômois (2022), pp.
              99-104.{' '}
            </div>{' '}
            <div className='publication-margin'>
              Note: all Washington-Rochambeau Revolutionary Route Resource
              Studies and Site surveys are available on-line at:{' '}
              <a href='https://w3r-us.org/history-by-state/' target='_blank'>
                https://w3r-us.org/history-by-state/
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                What was he really up to? An Inquiry into the Revolutionary War
                activities of Col. John Rodgers of Rodger’s Tavern{' '}
              </i>
              (Perryville: Rodgers Tavern Museum, 2023; revised in October 2025)
              at:{' '}
              <a
                href='https://www.rodgerstavern.com/post/revolutionarywaractivitiesofjohnrodgers'
                target='_blank'
              >
                https://www.rodgerstavern.com/post/revolutionarywaractivitiesofjohnrodgers
              </a>
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                ’…They Have Burned the Greater Part of Stone Arabia…’.
                Preservation Plan for the Battlefields of Stone Arabia and
                Klock’s Field, October 19, 1780, Montgomery County, New
                York.{' '}
              </i>{' '}
              Together with Wade P. Catts, RPA, Kevin Bradley, RPA and with
              contributions by Jon Jasewicz. 2 vols., (Newark, DE: South River
              Heritage Consulting LLC: 2023){' '}
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                Cultural Resource Survey and Land and Water Based Route
                Reconnaissance for the Washington Rochambeau Revolutionary Route
                National Historic Trail (W3R-NHT).{' '}
              </i>{' '}
              (La Plata, MD: Maryland Veterans Museum at Patriot Park, 2023)
            </div>
            <div className='publication-margin'>
              Rochambeau in Rhode Island July 1780-June 1781. (2022) Available
              on-line at:{' '}
              <a
                href=' https://battleofrhodeisland.org/rochambeau-in-rhode-island/'
                target='_blank'
              >
                https://battleofrhodeisland.org/rochambeau-in-rhode-island/
              </a>
            </div>{' '}
            <div className='publication-margin'>
              “
              <i>
                No Regular Corps could have maintained its Ground more firmly.
                ”Site Documentation and Preservation Plan for the Battle of the
                Hook, October 3, 1781.{' '}
              </i>
              American Battlefield Protection Program Grant prepared for
              Gloucester Parks, Recreation and Tourism by Wade P. Catts, RPA,
              Robert A. Selig, Ph.D., Lt. Col. Lewis H. Burruss (ret.), and
              Kevin Bradley, RPA (Newark, DE: South River Heritage Consulting
              LLC, 2021) at:{' '}
              <a
                href='https://www.gloucesterva.info/1352/Battle-of-the-Hook'
                target='_blank'
              >
                https://www.gloucesterva.info/1352/Battle-of-the-Hook
              </a>{' '}
            </div>
            <div className='publication-margin'>
              <i>
                “upwards of 20 Batteaus all in a Body made a fine Appearance
                coming down the River, and must be very mortifying to those
                Motionless at a little Distance”. Water Trails of the
                Washington-Rochambeau Revolutionary Route National Historic
                Trail in the Hudson River Valley in 1781 and 1782. A Historical
                Overview and Resource Inventory.{' '}
              </i>
              (Albany, NY: Hudson River Valley National Heritage Area, 2020) at:{' '}
              <a
                href=' https://www.hudsonrivervalley.com/trails'
                target='_blank'
              >
                https://www.hudsonrivervalley.com/trails
              </a>
            </div>
            <div className='publication-margin'>
              <i>“En Avant </i>to Victory: The Allied March to Yorktown
              June-October 1781.” In:{' '}
              <i>The Ten Key Campaigns of the American Revolution</i> Edward G.
              Lengel, ed. (Washington, D.C.: Regnery Publishing, 2020), pp.
              199-215.{' '}
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                The Franco-American Encampment in the Town of Greenburgh, 6 July
                – 18 August 1781: A Historical Overview and Resource Inventory.
              </i>
              (Greenburgh, NY: Town of Greenburgh, 2020) at:{' '}
              <a
                href='https://www.odellrochambeau.org/news/free-book-about-the-franco-american-philipsburg-encampment-available-now'
                target='_blank'
              >
                {' '}
                https://www.odellrochambeau.org/news/free-book-about-the-franco-american-philipsburg-encampment-available-now
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                African-Americans, the Rhode Island Regiments, and the Battle of
                Fort Red Bank, 22 October 1777.{' '}
              </i>{' '}
              (Gloucester, New Jersey: County of Gloucester, 2019)
            </div>
            <div className='publication-margin'>
              “In the Morning We Began to Strip and Bury the Dead:” A Context
              for Burial Practices During the American War for Independence” in:
              <i>
                {' '}
                Conference Proceedings. Fields of Conflict. 10th Biennial
                International Conference 26-30 September 2018.{' '}
              </i>
              5 vols.(Mashantucket, CT: Mashantucket Pequot Museum and Research
              Center, 2019) vol. 3, pp. 78-92. Together with Wade P. Catts at:{' '}
              <a
                href='http://pequotwar.org/wp-content/uploads/2019/03/Volume-3-FOC-2018.pdf'
                target='_blank'
              >
                http://pequotwar.org/wp-content/uploads/2019/03/Volume-3-FOC-2018.pdf
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                Battle of Paoli: Documentation and National Historic Landmark
                Nomination. Prepared for the Paoli Battlefield Preservation Fund
                and the American Battlefield Protection Program.{' '}
              </i>{' '}
              (West Chester, Pennsylvania: John Milner Associates, Inc.,
              2014/2019). With Wade P. Catts, Tom McGuire, and Sean Moir.
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                “Left Newport … before Daylight and March’s to Chads Ford.”
                Military Terrain Analysis for two Brandywine Battlefield
                Strategic Landscapes Chester County, Pennsylvania. Prepared for
                the County of Chester and the American Battlefield Protection
                Program.{' '}
              </i>
              (Newark, Delaware: South River Heritage Consulting, LLC., 2019).
              Together with Wade P. Catts and Sean Moir at:{' '}
              <a
                href='https://www.chescoplanning.org/Historic/Campaign1777/South-TechReport-Daylight.pdf'
                target='_blank'
              >
                https://www.chescoplanning.org/Historic/Campaign1777/South-TechReport-Daylight.pdf
              </a>
            </div>{' '}
            <div className='publication-margin'>
              “The Politics of Arming America or: Why are there still dozens of
              Vallière 4-lb Cannon <i>à la suédoise </i>in the United States but
              only four in all of Europe?” in:{' '}
              <i>New Perspectives on the “Last Argument of Kings”. </i>
              (Ticonderoga, New York: Fort Ticonderoga Press, 2018), pp. 30-51.
            </div>
            <div className='publication-margin'>
              {' '}
              “Hessian Savages, Frog-Eating Frenchmen, and Virtuous Americans,
              1776-1783: How Personal Experiences Change Time-honored
              Perceptions.” in: <i>The American Revolution: A World War </i>
              David K. Allison and Larrie D. Ferreiro, eds., (Washington, DC:
              Smithsonian Books, 2018), pp. 170-185.
            </div>
            <div className='publication-margin'>
              The Washington-Rochambeau National Historic Trail in the State of
              New Hampshire, 1783. An Historical and Architectural Survey.
              (Washington, DC: Washington- Rochambeau Revolutionary Route
              National Historic Trail [WaRo], 2018){' '}
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                The Washington-Rochambeau National Historic Trail in the
                Commonwealth of Massachusetts, 1781 - 1783. An Historical and
                Architectural Survey.{' '}
              </i>
              (Boston: Washington-Rochambeau Revolutionary Route Association of
              Massachusetts, 2017)
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                “The Army march’d at Day Break in two Columns.” Military Terrain
                Analysis for two Brandywine Battlefield Strategic Landscapes
                Chester County, Pennsylvania. Prepared for the County of Chester
                and the American Battlefield Protection Program.{' '}
              </i>
              (West Chester, Pennsylvania: Commonwealth Heritage Group, Inc.,
              2017). Together with Wade P. Catts and Kevin Bradley at:{' '}
              <a
                href='https://www.chescoplanning.org/Historic/Campaign1777/South-TechReport-Daybreak.pdf#:~:text=This%20report%20provides%20detailed,and%20the%20road%20network'
                target='_blank'
              >
                https://www.chescoplanning.org/Historic/Campaign1777/South-TechReport-Daybreak.pdf#:~:text=This%20report%20provides%20detailed,and%20the%20road%20network
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                Cultural Resources Survey of the Bennington Battlefield,
                Walloomsac, New York. Prepared for the New York State Office of
                Parks, Recreation, and Historic Preservation and the American
                Battlefield Protection Program.{' '}
              </i>
              (Jackson, Michigan: Commonwealth Heritage Group, Inc., 2017).
              Together with Wade P. Catts, Christopher T. Espenshade, Elisabeth
              Lavigne, and James Montney at:{' '}
              <a
                href='https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx'
                target='_blank'
              >
                https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                Hubbardton Battlefield National Register Nomination Revision.
                Prepared for the Vermont Division of Historic Preservation and
                the American Battlefield Preservation Program.{' '}
              </i>{' '}
              (Jackson, Michigan: Commonwealth Heritage Group, Inc., 2017).
              Together with Wade P. Catts at:{' '}
              <a
                href='https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx'
                target='_blank'
              >
                https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                "It is Painful for Me to Lose so Many Good People”: Report of an
                Archeological Survey at Red Bank Battlefield Park (Fort Mercer),
                National Park, Gloucester County, New Jersey. Prepared for
                Gloucester County Department of Parks and Recreation and the
                American Battlefield Protection Program.{' '}
              </i>
              (West Chester, Pennsylvania: Commonwealth Heritage Group, Inc.,
              2017). Together with Wade P. Catts, Elisabeth Lavigne, Kevin
              Bradley, Kathryn Wood, and David G. Orr at:{' '}
              <a
                href=' https://www.gloucestercountynj.gov/DocumentCenter/View/959/Red-Bank-Battlefield-Archeology-Report-PDF?bidId='
                target='_blank'
              >
                https://www.gloucestercountynj.gov/DocumentCenter/View/959/Red-Bank-Battlefield-Archeology-Report-PDF?bidId=
              </a>
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                “Cheer Up My Boys, the Day is Ours….”: Field Survey, Preparation
                of Maps, and Preparation of Local and National Landmark/National
                Register Historic District Applications for the D’Ambrisi
                Property, Princeton, New Jersey. Prepared for the Princeton
                Battlefield Society and the American Battlefield Protection
                Program.{' '}
              </i>
              (West Chester, Pennsylvania: Commonwealth Heritage Group, Inc.,
              2017). Together with Wade P. Catts and Kevin Bradley.
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                Cultural Resource Survey and Land and Water Based Route
                Reconnaissance for the Washington-Rochambeau National Historic
                Trail in the District of Columbia, September 1781 to July 1782.
              </i>{' '}
              (Washington, DC: Washington-Rochambeau National Historic Trail
              [WaRo], 2016){' '}
            </div>
            <div className='publication-margin'>
              “Rochambeau in New Jersey: The Good French Ally.” in:
              <i>
                The American Revolution in New Jersey: Where the Battlefront
                Meets the Home Front James J. Gigantino II, ed.,{' '}
              </i>
              (New Brunswick, New Jersey: Rutgers University Press, 2015), pp.
              85-105.{' '}
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                The Washington-Rochambeau Revolutionary Route in the
                Commonwealth of Rhode Island, 1781 - 1783. An Historical and
                Architectural Survey.{' '}
              </i>{' '}
              (Providence, Rhode Island: W3R Association of Rhode Island and
              Providence Plantations, 2015){' '}
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                Cultural Resource Survey and Land and Water Based Route
                Reconnaissance for the Washington Rochambeau Revolutionary Route
                National Historic Trail (W3R-NHT) in Maryland, focusing on the
                Contributions of the Eastern Shore to the Victory at Yorktown
                and the Role of Western Maryland in the Yorktown Campaign.{' '}
              </i>{' '}
              (Baltimore, Maryland: Preservation Maryland, 2014){' '}
            </div>
            <div className='publication-margin'>
              <i>
                The Encampment of French Forces at Scott’s Plantation on 17/18
                September 1781. Excerpted from Historical Research Report on
                Belvoir (“Scott’s Plantation”) from the earliest known Date of
                European Contact to the Present with a particular Focus on the
                Encampment of French Forces on the Site on 17/18 September 1781.
              </i>{' '}
              (URS Corporation: Baltimore, Maryland, 2014)
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                Historical Research Report on Belvoir (“Scott’s Plantation”)
                from the earliest known Date of European Contact to the Present
                with a particular focus on the Encampment of French Forces on
                the Site on 17/18 September 1781. Prepared for URS Corporation
                as Part of TO 19: Generals Highway Project located in Anne
                Arundel County, MD
              </i>{' '}
              (URS Corporation: Baltimore, Maryland, 2014){' '}
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                Cultural Resource Survey and Land and Water Based Route
                Reconnaissance for the Washington Rochambeau Revolutionary Route
                National Historic Trail in the Anacostia Trails Heritage Area,
                Prince George’s County, Maryland{' '}
              </i>{' '}
              (Hyattsville, Maryland: Anacostia Trails Heritage Area, 2013)
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                Cultural Resource Survey and Land and Water-Based Route
                Investigation of the French Encampments at Bush Town in Harford
                County, Maryland, on 10/11 September 1781 and from 24 to 29
                August 1782.{' '}
              </i>{' '}
              (Baltimore, Maryland: W3R National Historic Trail Project in the
              State of Maryland, 2013){' '}
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                Battle of the Clouds Technical Report and Historical Overview.
                Prepared for the County of Chester and the American Battlefield
                Protection Program.{' '}
              </i>{' '}
              (West Chester, Pennsylvania: John Milner Associates, Inc., 2013)
              Together with Wade P. Catts and Tom McGuire at:{' '}
              <a
                href='https://www.chescoplanning.org/Historic/BattleClouds.cfm'
                target='_blank'
              >
                https://www.chescoplanning.org/Historic/BattleClouds.cfm{' '}
              </a>
            </div>
            <div className='publication-margin'>
              "Washington, Rochambeau, and the Yorktown Campaign of 1781.” in: A
              Companion to George Washington. Edward G. Lengel, ed. (Blackwell,
              2012), pp. 266-287.{' '}
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                Battle of Princeton Mapping Project: Report of Military Terrain
                Analysis and Battle Narrative, Princeton, New Jersey. Prepared
                for the Princeton Battlefield Society and the American
                Battlefield Protection Program.{' '}
              </i>
              (West Chester, Pennsylvania: John Milner Associates, Inc., 2010).
              Together with Wade P. Catts and M. Harris at:{' '}
              <a
                href=' https://pbs1777.org/wp-content/uploads/2020/08/2010-09_MilnerReport.pdf'
                target='_blank'
              >
                https://pbs1777.org/wp-content/uploads/2020/08/2010-09_MilnerReport.pdf
              </a>
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                Investigation of the Spencer’s Ordinary (26 June 1781) and Green
                Spring (6 July 1781) Battlefields, James City County, Virginia.
                Prepared for the County of James City and the American
                Battlefield Protection Program.{' '}
              </i>{' '}
              (Williamsburg, Virginia: Archaeological & Cultural Solutions,
              Inc., 2010). Together with Alain C. Outlaw and Mary B. Clemons.
            </div>
            <div className='publication-margin'>
              <i>
                {' '}
                Revolutionary War Route and Transportation Survey in the
                Commonwealth of Virginia, 1781-1782. An Historical and
                Architectural Survey.{' '}
              </i>{' '}
              (Richmond, Virginia: Virginia Department of Historic Resources,
              2009)
            </div>{' '}
            <div className='publication-margin'>
              <i>
                La Courageuse and La Contrebandiere. A Pair of Bronze 1758
                Vallière Light 4-Pounder Cannon from the American War of
                Independence{' '}
              </i>{' '}
              (privat. printed, 2008){' '}
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                The Washington-Rochambeau Revolutionary Route in the
                Commonwealth of Pennsylvania, 1781 - 1783. An Historical and
                Architectural Survey.
              </i>{' '}
              (Philadelphia, Pennsylvania: Pennsylvania Society of Sons of the
              Revolution, 2007)
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                The Washington-Rochambeau Revolutionary Route in the State of
                New Jersey, 1781-1783. An Historical and Architectural
                Survey.{' '}
              </i>{' '}
              3 vols. (Trenton, New Jersey: New Jersey Historic Trust,
              Department of Community Affairs, 2006){' '}
            </div>
            <div className='publication-margin'>
              "Historical Background." In:{' '}
              <i>
                Washington-Rochambeau Revolutionary Route. Resource Study and
                Environmental Assessment{' '}
              </i>
              (Boston, Massachusetts: The National Park Service Northeast and
              Capital Regions, 2006), pp. 9-26.{' '}
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                March to Victory: Washington, Rochambeau, and the Yorktown
                Campaign of 1781.{' '}
              </i>
              U.S. Army Center for Military History # 70-104-1 (Washington, DC,
              2005), free at:{' '}
              <a
                href='https://history.army.mil/Publications/Publications-Catalog/The-March-to-Victory/'
                target='_blank'
              >
                https://history.army.mil/Publications/Publications-Catalog/The-March-to-Victory/
              </a>
            </div>
            <div className='publication-margin'>
              <i>
                'En Avant' With Our French Allies: Sites, Markers, and Monuments
                in Connecticut Commemorating the Contributions of French Troops
                under the comte de Rochambeau to the Achievement of American
                Independence, 1780 to 1782.{' '}
              </i>{' '}
              (Hartford, Connecticut: Connecticut Historical Commission, 2004)
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                Hussars in Lebanon! A Connecticut Town and Lauzun's Legion
                during the American Revolution, 1780-1781.{' '}
              </i>{' '}
              (Lebanon, Connecticut: Lebanon Historical Society, 2004){' '}
            </div>
            <div className='publication-margin'>
              {' '}
              <i>
                {' '}
                The Washington-Rochambeau Revolutionary Route. Statement of
                National Significance.{' '}
              </i>
              (Boston, Massachusetts: NPS Northeast and Capital Regions,
              2003){' '}
            </div>{' '}
            <div className='publication-margin'>
              <i>
                {' '}
                The Washington-Rochambeau Revolutionary Route in the State of
                Delaware, 1781-1783. An Historical and Architectural Survey.
              </i>{' '}
              (Dover: State of Delaware, 2003){' '}
            </div>
            <div className='publication-margin'>
              <i>
                The Washington-Rochambeau Revolutionary Route in the State of
                New York, 1781-1782. An Historical and Architectural
                Survey.{' '}
              </i>{' '}
              (Albany, New York: Hudson River Valley Greenway, 2001){' '}
            </div>
            <div className='publication-margin'>
              <i>
                Rochambeau's Cavalry: Lauzun's Legion in Connecticut 1780-1781.
                The Winter Quarters of Lauzun's Legion in Lebanon and its March
                Through the State in 1781. Rochambeau's Conferences in Hartford
                and Wethersfield. Historic and Architectural Survey.
              </i>{' '}
              (Hartford, Connecticut: Connecticut Historical Commission, 2000)
            </div>
            <div className='publication-margin'>
              <i>
                Rochambeau in Connecticut: Tracing his Journey. Historic and
                Architectural Survey.{' '}
              </i>{' '}
              (Hartford, Connecticut: Connecticut Historical Commission, 1999)
            </div>
            <h3 className='publication-margin'>
              MINOR PUBLICATIONS AND JOURNAL ARTICLES:
            </h3>
            <div className='publication-margin'>
              “The Culture of Death: An Overview of Burial Practices during the
              American War of Independence.”{' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 50, no. 1, (Winter 2023/24), pp. 3-18.{' '}
            </div>
            <div className='publication-margin'>
              “Rochambeau in Bolton. The Whys and Wherefores of the French
              Encampment on the farm of the Rev. George Colton, 21 to 24 June
              1781.”{' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 47, no. 2, (Autumn 2020), pp. 3-13.{' '}
            </div>{' '}
            <div className='publication-margin'>
              “Severed Heads, Potato-Pits and Fence-Posts: A Cultural Context
              for the Burial of Casualties at Bennington, 16 August 1777.”
              <i> Journal of the Johannes Schwalm Historical Association </i>
              vol. 22, (2019), pp. 38-46.{' '}
            </div>
            <div className='publication-margin'>
              “Involuntary Soldiers for America – the Rest of the Story.”
              <i> Journal of the Johannes Schwalm Historical Association </i>
              vol. 21, (2018), pp. 85-91.{' '}
            </div>
            <div className='publication-margin'>
              “Involuntary Soldiers for America: Count Friedrich Ludwig zu
              Wertheim-Löwenstein’s Creative Recruitment Practices, 1781-1782.”
              <i>
                {' '}
                Journal of the Johannes Schwalm Historical Association{' '}
              </i>{' '}
              vol. 20, (2017), pp. 11-18.{' '}
            </div>
            <div className='publication-margin'>
              “Father Ferdinand Farmer’s French-Canadian Connection.”
              <i> Connecticut Maple Leaf </i> vol. 16, no. 2 (Winter 2013-2014),
              pp. 61-65.{' '}
            </div>{' '}
            <div className='publication-margin'>
              “Eighteenth-Century Currencies.” The Brigade Dispatch.{' '}
              <i>Journal Of The Brigade Of The American Revolution </i> vol. 43,
              no. 3, (Autumn, 2013), pp. 16-31.{' '}
            </div>{' '}
            <div className='publication-margin'>
              “Site Lines: Mapping Rochambeau’s March across Connecticut”
              <i> Connecticut Explored </i> vol. 10, no. 2 (Spring 2012), pp.
              48-49.{' '}
            </div>{' '}
            <div className='publication-margin'>
              “How did Yorktown become the largest town in America?”{' '}
              <i>
                Le bulletin. Newsletter of l’Alliance Française, Chapitre de
                Grasse. Norfolk, VA.
              </i>{' '}
              (January-February 2012), pp. 9-11.
            </div>{' '}
            <div className='publication-margin'>
              “Artillery at Yorktown: A Statistical Overview (Part 2 of 2){' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 40, no. 3, (Winter 2010), pp. 26-32.{' '}
            </div>{' '}
            <div className='publication-margin'>
              “Artillery at Yorktown: A Statistical Overview (Part 1 of 2){' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 40, no. 4, (Autumn 2010), pp. 1-11.{' '}
            </div>
            <div className='publication-margin'>
              “Heritage Tourism, Historical Re-Enactments and the Local Economy:
              A Global Perspective.”{' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 40, no. 2, (Summer 2010), pp. 2-11.{' '}
            </div>
            <div className='publication-margin'>
              “French Horse-Thieves, German Cattle-Rustlers, and Sticky-Fingered
              Virginia Militia: The Seedier Side of Life in Gloucester County
              during the Siege of October 1781.”{' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 39, no. 1, (Spring 2009), pp. 2-10. Selig, Robert A.,
              translator, and Donald M. Londahl-Smidt, annotator.{' '}
            </div>
            <div className='publication-margin'>
              “Extracts from the Diary and Letters of Staff Captain Karl Ludwig,
              Freiherr von Doernberg, 1779-1781: Part 1 – Germany to Portsmouth,
              March 28-May 30, 1779.”{' '}
              <i>
                The Hessians: Journal of the Johannes Schwalm Historical
                Association.
              </i>{' '}
              vol. 11 (2008): 91-97.
            </div>{' '}
            <div className='publication-margin'>
              "Global Implications of the Peace of Paris, 3 September 1783." The
              Brigade Dispatch.{' '}
              <i>Journal Of The Brigade Of The American Revolution </i>vol. 38,
              no. 4, (Winter 2008), pp. 2-29.{' '}
            </div>
            <div className='publication-margin'>
              {' '}
              "20 October 1781: The Day After the Surrender." The Brigade
              Dispatch.{' '}
              <i>Journal Of The Brigade Of The American Revolution </i>vol. 38,
              no. 2, (Summer 2008), pp. 2-16.{' '}
            </div>
            <div className='publication-margin'>
              {' '}
              "Old World Meets New: Franco-American Encounters and the
              <i> expédition particulière</i>, 1780-1782."{' '}
              <i>
                The Brigade Dispatch. Journal Of The Brigade Of The American
                Revolution{' '}
              </i>
              vol. 37, no. 1, (Spring 2007), pp. 2-11.
            </div>
            <div className='publication-margin'>
              {' '}
              "Tracing the Yorktown Campaign of 1781 - 82."{' '}
              <i>Notes on Virginia</i> no. 51 (2007), pp. 47-55.{' '}
            </div>
            <div className='publication-margin'>
              {' '}
              "Walk Where They Fought: Path to Victory!"{' '}
              <i>The Armchair General</i> (July 2006) (with Barnet Schecter) at:{' '}
              <a href='http://www.armchairgeneral.com/' target='_blank'>
                http://www.armchairgeneral.com/
              </a>
            </div>
            <div className='publication-margin'>
              "Der Spanische Erbfolgekrieg in Übersee." In:{' '}
              <i>Die Schlacht von Höchstädt/The Battle of Blenheim </i>J.
              Erichsen and K. Heinemann, eds., (Ostfildern: Jan Thorbecke,
              2004), pp. 90-95.{' '}
            </div>
            <div className='publication-margin'>
              "Hessians Fighting for American Independence? German Deserters
              recruited for Lauzun's Legion in America, 1780 - 1782."{' '}
              <i>Journal of the Johannes Schwalm Historical Association </i>vol.
              7, no. 4, (2004), pp. 39-51.{' '}
            </div>
            <div className='publication-margin'>
              "Eyewitness to Yorktown." <i>Military History </i>(February 2003),
              pp. 58-64. (based on the letters of <i>comte Schwerin</i>, a
              lieutenant in the company of grenadiers in the Royal Deux-Ponts
              regiment to his uncle the Prince of Neuwied).{' '}
            </div>{' '}
            <div className='publication-margin'>
              "Das Deutsche Königlich-Französische Infanterie Regiment von
              Zweybrücken or Royal Deux-Ponts."{' '}
              <i>Journal of the Johannes Schwalm Historical Association.</i>{' '}
              <p className='indent-publication'>
                {' '}
                Part 1: April 1756 - March 1780, in vol. 6, no. 4, (2000), pp.
                52-59.{' '}
              </p>
              <p className='indent-publication'>
                Part 2: March 1780 - June 1781, in vol. 7, no. 1, (2001), pp.
                43-53.{' '}
              </p>
              <p className='indent-publication'>
                Part 3: July 1781 - June 1783, in vol. 7, no. 2, (2002), pp.
                29-43.
              </p>{' '}
              <p className='indent-publication'>
                {' '}
                Part 4: June 1783 - 21 July 1791, in vol. 7, no. 3, (2003), pp.
                42-52.
              </p>
            </div>
            <div className='publication-margin'>
              {' '}
              "Putting the Washington - Rochambeau Trail on the Map."{' '}
              <i>
                Flintlock & Powderhorn, Magazine of the Sons of the
                Revolution{' '}
              </i>
              vol. 21, no. 1, (Spring 2003), pp. 4-15.
            </div>
            <div className='publication-margin'>
              “The Revolution’s Black Soldiers.”{' '}
              <i>
                Journal of the Afro-American Historical and Genealogical
                Society{' '}
              </i>
              vol. 22, no. 1, (2003), pp. 1-11.
            </div>
            <div className='publication-margin'>
              {' '}
              "A New View of Old Williamsburg. A Huntington Library Manuscript
              Provides Another Glimpse of the City in 1781." Colonial
              Williamsburg.{' '}
              <i>The Journal of the Colonial Williamsburg Foundation</i> vol.
              22, no. 1, (Spring 2000), pp. 30-34. The author is an unidentified
              officer in the Soissonnois Regiment of Infantry.
            </div>
            <div className='publication-margin'>
              "Traveling On the Washington-Rochambeau-Revolutionary-Route."
              <i> Daughters of the American Revolution Magazine </i> vol. 135,
              no. 5, (May 2001), pp. 428-435.{' '}
            </div>
            <div className='publication-margin'>
              "The word <i>liberté</i> was frequently heard. The Royal
              Deux-Ponts in the American and the French Revolutions."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 21, no. 1, (Spring 2001), pp. 80-84.
            </div>
            <div className='publication-margin'>
              "Johann Georg Wüst. Der König von Ostindien."{' '}
              <i>Damals. Das aktuelle Magazin für Geschichte und Kultur </i>vol.
              32, no. 11, (November 2000), pp. 66-71.
            </div>
            <div className='publication-margin'>
              "The Iconography to Triumph and Surrender."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>{' '}
              vol. 23, no. 3 (Autumn 2000), pp. 72-77.
            </div>
            <div className='publication-margin'>
              "From Newport to Yorktown: Following the Road to Victory."
              Colonial Williamsburg. The Journal of the Colonial Williamsburg
              Foundation vol. 22, no. 3 (Autumn 2000), pp. 66-71.
            </div>
            <div className='publication-margin'>
              “Mon tres cher oncle" Lt. Graf Wilhelm von Schwerin writes home
              from a Virginia Victory.{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>{' '}
              vol. 22, no. 2, Summer 2000), pp. 48-54.
            </div>
            <div className='publication-margin'>
              “Mount Vernon After Washington: The Rescue of an American Memory.”
              Colonial Williamsburg.{' '}
              <i>The Journal of the Colonial Williamsburg Foundation</i> vol.
              22, no. 1, (Spring 2000), pp. 48-54.
            </div>
            <div className='publication-margin'>
              "Nothing but Sky and Water: Descriptions of Transatlantic Travel
              from the Journal of Georg Daniel Flohr, Grenadier, Royal
              Deux-Ponts, 1780-1783." <i>Naval History</i> vol. 13, no. 5,
              (September/October 1999), pp. 29-34.
            </div>
            <div className='publication-margin'>
              "The <i>duc</i> de Lauzun and his <i>Légion</i>, Rochambeau's most
              troublesome, colorful soldiers."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>{' '}
              vol. 21, no. 6, (December 1999/January 2000), pp. 56-63.
            </div>
            <div className='publication-margin'>
              "François Joseph Paul Comte de Grasse, the Battle off the Virginia
              Capes, and the American Victory at Yorktown." Colonial
              Williamsburg.{' '}
              <i>The Journal of the Colonial Williamsburg Foundation</i> vol.
              21, no. 5, (October/November 1999), pp. 26-32.
            </div>
            <div className='publication-margin'>
              "The Prince and the Pauper: Christian von Zweibrücken and Lucy
              Randolph." <i>German Life</i> vol. 6, no. 2, (August/September
              1999), pp. 40-42.
            </div>
            <div className='publication-margin'>
              "A French Volunteer who lived to rue America's Revolution: Denis
              Jean Florimond de Langlois, Marquis du Bouchet"{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>
              vol. 21, no. 3, (June/July 1999), pp. 16-25.
            </div>
            <div className='publication-margin'>
              "Who were the Huguenots?"{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>{' '}
              vol. 21, no. 2, (April/May 1999), pp. 67-71.
            </div>
            <div className='publication-margin'>
              "Eighteenth-Century European and American Currencies."{' '}
              <i>Beyond Germanna</i> vol. 11, no. 2, (March 1999), pp.
              616-617.{' '}
            </div>
            <div className='publication-margin'>
              "Georg Daniel Flohr" <i>Beyond Germanna</i> vol. 10, no. 6,
              (November 1998), pp. 591-592, and vol. 11, no. 1, (January 1999),
              pp. 606-607.
            </div>
            <div className='publication-margin'>
              "Wilhelmsburg in the Year 1702: The Account of Franz Ludwig
              Michel."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 20, no. 4, (Summer 1998), pp. 23-31 at:{' '}
            </div>
            <div className='publication-margin'>
              "America the Ungrateful: The Not-So-Fond Remembrances of Louis
              François Dupont d'Aubevoye, <i>comte</i> de Lauberdière."{' '}
              <i>American Heritage</i> vol. 48, no. 1, (February 1997), pp.
              101-106.
            </div>
            <div className='publication-margin'>
              "The Revolution's Black Soldiers. They fought for both Sides in
              their Quest for Freedom."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 19, no. 4, (Summer 1997), pp. 15-19.
            </div>
            <div className='publication-margin'>
              “Virginia's Black Codes.”{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation 
              </i>
              vol. 19, no. 4, (Summer 1997), pp. 20-21.
            </div>
            <div className='publication-margin'>
              "Emigration and the Safety-Valve Theory in the Eighteenth Century:
              Some Mathematical Evidence from the Prince-Bishopric of Würzburg"
              <i> Yearbook of the Society for German-American Studies</i> vol.
              31, (1996), pp. 137-55; together with Dr. Duane Broline.
            </div>
            <div className='publication-margin'>
              "And is, Alas! The Hour of our Parting Come?"{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>
              vol. 18, no. 4, (Summer 1996), pp. 46-53.
            </div>
            <div className='publication-margin'>
              "The Freshest Advices (post-script to my essay 'And is, Alas! The
              Hour of our Parting Come')"{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 19, no. 1, (Fall 1996), pp. 14-15.
            </div>
            <div className='publication-margin'>
              {' '}
              "Lauberdière's Journal. The Revolutionary War Journal of Louis
              François Bertrand d'Aubevoye, <i>comte </i>de Lauberdière."
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>{' '}
              vol. 18, no. 1, (Autumn 1995), pp. 33-37.{' '}
            </div>
            <div className='publication-margin'>
              "The Freshest Advices (post-script to my essay 'Lauberdière's
              Journal')"{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 18, no. 2, (Winter 1995-96), pp. 6-7.{' '}
            </div>
            <div className='publication-margin'>
              "Storming the Redoubts (Yorktown, 14 October 1781)." Military
              History Quarterly vol. 8, no. 1, (Autumn 1995), pp. 18-27.
              "Deux-Ponts Germans. Unsung Heroes of the American Revolution."
              <i>German Life</i> vol. 2, no. 2, (August/September 1995), pp.
              50-53.
            </div>
            <div className='publication-margin'>
              "Finding Fame in Virginia: But Fortune eluded Baron Friedrich
              Wilhelm von Steuben."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation{' '}
              </i>
              vol. 17, no. 2, (Winter 1994-95), pp. 55-59.
            </div>
            <div className='publication-margin'>
              "Private Flohr's Other Life: The young German fought for American
              Independence, went home and returned as a man of peace."{' '}
              <i>American Heritage </i> vol. 45, no. 6,(October 1994), pp.
              94-95.{' '}
            </div>
            <div className='publication-margin'>
              "Light Infantry Lessons from America? Johann von Ewald's
              Experiences in the War for Independence."{' '}
              <i>Studies in Eighteenth-Century Culture</i> 23 (1993), pp.
              111-129.{' '}
            </div>
            <div className='publication-margin'>
              "The French Capture of St. Eustatius, 26 November 1781."{' '}
              <i>Journal of Caribbean History</i> vol. 27, no. 2, (December
              1993), pp. 129-143.{' '}
            </div>
            <div className='publication-margin'>
              "A German Soldier in New England During the Revolutionary War: The
              Account of Georg Daniel Flohr." <i>Newport History</i> vol. 65,
              no. 223, (Fall 1993), pp. 48-65.{' '}
            </div>
            <div className='publication-margin'>
              "A German Soldier in America, 1780-1783: The Journal of Georg
              Daniel Flohr.” <i>William and Mary Quarterly</i> vol. 50, no. 3,
              (July 1993), pp. 575-590. Also in "The Periodical Observer"{' '}
              <i>Wilson Quarterly</i> vol. 18, no. 1, (Winter 1994), pp.
              136-137.
            </div>{' '}
            <div className='publication-margin'>
              {' '}
              "Georg Daniel Flohr's Journal: A New Perspective."{' '}
              <i>
                Colonial Williamsburg. The Journal of the Colonial Williamsburg
                Foundation
              </i>
              vol. 15, no. 4, (Summer 1993), pp. 47-53.{' '}
            </div>
            <div className='publication-margin'>
              "Private Flohr's America. From Newport to Yorktown and the Battle
              that won the War: a German Foot Soldier who fought for American
              Independence tells all about it in a newly discovered Memoir."
              <i> American Heritage </i> vol. 43, no. 8, (December 1992), pp.
              64-71. Repr. in Battles and Leaders F. Allen, ed., (New York:
              Forbes, 1994), pp. 2-9.
            </div>
            <div className='publication-margin'>
              "Idea and Practice of the <i>ius emigrandi</i> in the Holy Roman
              Empire from the Reformation to the French Revolution."{' '}
              <i>Yearbook of the Society for German-American Studies </i> vol.
              27, (1992), pp. 15-22.
            </div>
            <div className='publication-margin'>
              "The Price of Freedom: Poverty, Emigration and Taxation in the
              Prince-Bishopric of Würzburg in the Eighteenth Century."{' '}
              <i>Yearbook of the Society for German-American Studies </i> vol.
              26, (1991), pp. 105-126.
            </div>
            <div className='publication-margin'>
              {' '}
              "Emigration, Fraud, Humanitarianism and the Founding of
              Londonderry, South Carolina, 1763-1765."{' '}
              <i>18th-Century Studies </i> vol. 23, no. 1, (Fall 1989), pp. 1-
              23.{' '}
            </div>
            <div className='publication-margin'>
              "Regulations for the Child-Weavers in the Juliusspital Workhouse
              in Würzburg (1731)."
              <i>
                Schatzkammer der deutschen Sprache, Dichtung und Geschichte
              </i>{' '}
              vol. 14, no. 2, (Fall 1988), pp. 117-129.
            </div>
            <div className='publication-margin'>
              "Eighteenth-Century Last Wills and Testaments as a Source for
              Social History. Winterhausen as a Case Study."{' '}
              <i>
                Proceedings of the Thirteenth Annual European Studies Conference
              </i>{' '}
              Omaha, Nebraska, 1988, pp. 317-328.
            </div>
            <div className='publication-margin'>
              "Underpaid and Overworked': The Plight of Servants in Eighteenth
              Century Franconia."{' '}
              <i>
                Proceedings of the Twelfth Annual European Studies Conference
              </i>{' '}
              Omaha, Nebraska, 1987, pp. 255-266.
            </div>
            <div className='publication-margin'>
              "Mangy Sheep and Greedy Shepherds': Emigration from the
              Prince-Bishopric of Würzburg during the Eighteenth Century and its
              Causes."{' '}
              <i>
                Proceedings of the Eleventh Annual European Studies Conference
              </i>{' '}
              Omaha, Nebraska, 1986, pp. 238-249.
            </div>
            <div className='publication-margin'>
              "Friedrich Wilhelm von Steubens Kommando in Virginia (1780/81)"
              in:{' '}
              <i>
                Friedrich Wilhelm von Steuben. Leben, Zeit, und Zeitgenossen.
              </i>
              W. Giesebrecht, ed., (Würzburg: Handelsdruckerei, 1980), pp.
              115-125.
            </div>
            <h3 className='publication-margin'>
              ENTRIES IN ENCYCLOPEDIAS AND REFERENCE WORKS:{' '}
            </h3>
            <div className='publication-margin'>
              "Abatis", "Desertion, Army", "Discipline, Army", "Infantry",
              "Light Infantry", "Manuals, Military", " Recruitment, Army ",
              "Redoubt", "Strategy", "Tactics, Infantry." in:{' '}
              <i>Colonial Wars of North America 1512-1763.</i> An Encyclopedia
              Alan Gallay, ed., (New York: Garland, 1996), pp. 1, 172, 176-77,
              308, 383, 412-13, 624-25, 625, 722-23, 735-36
            </div>
            <div className='publication-margin'>
              "Augustus II, King of Poland, Elector of Saxony", "Bavaria, Revolt
              in (1705-06)", “Cayenne", "Gertruydenberg", "Maximilian Emanuel
              von Wittelsbach, Elector of Bavaria", "Orsbeck, Johann Hugo von,
              and Lothringen, Karl Joseph von, Electors of Treves",
              "Pfalz-Neuburg, Johann Wilhelm von der, Elector Palatinate",
              “Schönborn, Lothar Franz von, Elector of Mainz", "Tyrol, Revolt in
              (1703)." in:{' '}
              <i>
                Historical Dictionary of the Treaties of the War of the Spanish
                Succession
              </i>{' '}
              Linda and Marsha Frey, eds.(Westport: Greenwood Press, 1995), pp.
              22-23, 35-36, 88-89, 181-83, 278-81, 322-23, 343-44, 401-03,
              448-49.
            </div>
            <div className='publication-margin'>
              "Royal-Deux-Ponts", "Friedrich Wilhelm von Steuben." in:
              <i> Encyclopedia of the American Revolution</i> Richard C. Blanco,
              ed., 2 vols. (New York: Garland, 1993), vol. 2, pp. 1436-39, and
              1579-85.
            </div>
            <div className='publication-margin'>
              "Franconia", "Artisans", "Peasants", in: Encyclopedia of 1848
              Revolutions J. Chastain, ed., Published only on the Internet at:{' '}
              <a href='www.cats.ohiou.edu/~chastain/' target='_blank'>
                www.cats.ohiou.edu/~chastain/
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
