import Image from 'next/image';
import PageLayout from '../layout/pagelayout';
import roadmap from './route-map-vertical.jpg';
import './publications.css';

export default function publications() {
  return (
    <>
      <PageLayout>
        <h2>Publications</h2>
        {/*  https://nextjs.org/docs/app/api-reference/components/image */}
        {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
        <figure>
          <Image
            src={roadmap}
            alt='Portrait of Robert A. Selig'
            className='roadmap-image'
          />{' '}
          <figcaption>
            French map of the route to Yorktown, 1782
            <div className='image-caption-source'>
              Geography and Map Division, Library of Congress
            </div>
          </figcaption>
        </figure>
        MAJOR PUBLICATIONS AND RESEARCH REPORTS:
        <div>
          “Damages, Depredations, Sufferings and Destruction: The Landscape of
          Conflict and the ‘Late War with Great Britain’”. In: The Archaeology
          of the American Revolution Richard F. Veit and Matthew A. Kalos, eds.,
          (Gainesville: University Press of Florida, 2025 pp. 205-227.{' '}
        </div>
        <div>
          (With Wade P. Catts) Rochambeau's Engineers at Butts Hill Fort, July
          1780 - June 1781. Published on-line in June 2024 at:
          https://battleofrhodeisland.org/rochambeaus-engineers-at-butts-hill-fort-july-1780-june-1781/
        </div>{' '}
        <div>
          {' '}
          See also Gloria H. Schmidt, Digging in: Information from Robert
          Selig’s work on the French at Butts Hill at:
          https://battleofrhodeisland.org/
        </div>
        digging-in-information-from-robert-seligs-work-on-the-french-at-butts-hill/
        <div>
          {' '}
          Newport’s Last Slave Auction: Rochambeau’s Prizes. Published on-line
          in July 2024 at:
          https://battleofrhodeisland.org/newports-last-slave-auction-rochambeaus-prizes/
        </div>
        <div>
          The Citizens of Westfield and the Coming of the American Revolution,
          1774-1777 Research report prepared for the Westfield Historical
          Society (Westfield, NJ 2025) The Historical Record of the March of
          Continental Army Forces through Westfield, New Jersey, in August 1781.
          Research report prepared for the Westfield Historical Society
          (Westfield, NJ 2024) "L’expédition particulière and the American War
          of Independence, 1780–1783." In: Waging War in
          America 1775-1783. Operational Challenges of Five Armies Don N.
          Hagist, ed. (Warwick: Helion & Company, 2023), pp. 171-191.
        </div>
        <div>
          "The Washington-Rochambeau Revolutionary Route National Historic
          Trail." Newport History. Journal of the Newport Historical Society No.
          287 vol. 98, Winter 2022/Spring 2023), pp. 1-30.
        </div>{' '}
        <div>
          {' '}
          ”De Newport à Yorktown, à la Victoire et à la Gloire : la Route
          Washington-Rochambeau et la Victoire du 19 octobre 1781.” In : Actes
          du Colloque International : Victoire de Yorktown et naissance de
          l’amitié franco-Américaine Bulletin de la Société Archéologique
          Scientifique & Littéraire du Vendômois (2022), pp. 99-104. Note: all
          Washington-Rochambeau Revolutionary Route Resource Studies and Site
          surveys are available on-line at: https://w3r-us.org/history-by-state/
        </div>
        <div>
          {' '}
          What was he really up to? An Inquiry into the Revolutionary War
          activities of Col. John Rodgers of Rodger’s Tavern (Perryville:
          Rodgers Tavern Museum, 2023; revised in October 2025) at:
          https://www.rodgerstavern.com/post/revolutionarywaractivitiesofjohnrodgers
        </div>
        <div>
          ’…They Have Burned the Greater Part of Stone Arabia…’. Preservation
          Plan for the Battlefields of Stone Arabia and Klock’s Field, October
          19, 1780, Montgomery County, New York. Together with Wade P. Catts,
          RPA, Kevin Bradley, RPA and with contributions by Jon Jasewicz. 2
          vols., (Newark, DE: South River Heritage Consulting LLC: 2023)
          Cultural Resource Survey and Land and Water Based Route Reconnaissance
          for the Washington Rochambeau Revolutionary Route National Historic
          Trail (W3R-NHT) and Lafayette in Charles County, Maryland. (La Plata,
          MD: Maryland Veterans Museum at Patriot Park, 2023) Rochambeau in
          Rhode Island July 1780-June 1781. (2022) Available on-line at:
          https://battleofrhodeisland.org/rochambeau-in-rhode-island/
        </div>{' '}
        ‘“No Regular Corps could have maintained its Ground more firmly.” Site
        Documentation and Preservation Plan for the Battle of the Hook, October
        3, 1781. American Battlefield Protection Program Grant prepared for
        Gloucester Parks, Recreation and Tourism by Wade P. Catts, RPA, Robert
        A. Selig, Ph.D., Lt. Col. Lewis H. Burruss (ret.), and Kevin Bradley,
        RPA (Newark, DE: South River Heritage Consulting LLC, 2021) at:
        https://www.gloucesterva.info/1352/Battle-of-the-Hook “upwards of 20
        Batteaus all in a Body made a fine Appearance coming down the River, and
        must be very mortifying to those Motionless at a little Distance”. Water
        Trails of the Washington-Rochambeau Revolutionary Route National
        Historic Trail in the Hudson River Valley in 1781 and 1782. A Historical
        Overview and Resource Inventory. (Albany, NY: Hudson River Valley
        National Heritage Area, 2020) at:
        https://www.hudsonrivervalley.com/trails “En Avant to Victory: The
        Allied March to Yorktown June-October 1781.” In: The Ten Key Campaigns
        of the American Revolution Edward G. Lengel, ed. (Washington, D.C.:
        Regnery Publishing, 2020), pp. 199-215. The Franco-American Encampment
        in the Town of Greenburgh, 6 July – 18 August 1781: A Historical
        Overview and Resource Inventory. (Greenburgh, NY: Town of Greenburgh,
        2020) at:
        https://www.odellrochambeau.org/news/free-book-about-the-franco-american-philipsburg-encampment-available-now
        African-Americans, the Rhode Island Regiments, and the Battle of Fort
        Red Bank, 22 October 1777. (Gloucester, New Jersey: County of
        Gloucester, 2019) “In the Morning We Began to Strip and Bury the Dead:”
        A Context for Burial Practices During the American War for Independence”
        in: Conference Proceedings. Fields of Conflict. 10th Biennial
        International Conference 26-30 September 2018. 5 vols.(Mashantucket, CT:
        Mashantucket Pequot Museum and Research Center, 2019) vol. 3, pp. 78-92.
        Together with Wade P. Catts at:
        http://pequotwar.org/wp-content/uploads/2019/03/Volume-3-FOC-2018.pdf
        Battle of Paoli: Documentation and National Historic Landmark
        Nomination. Prepared for the Paoli Battlefield Preservation Fund and the
        American Battlefield Protection Program. (West Chester, Pennsylvania:
        John Milner Associates, Inc., 2014/2019). With Wade P. Catts, Tom
        McGuire, and Sean Moir “Left Newport … before Daylight and March’s to
        Chads Ford.” Military Terrain Analysis for two Brandywine Battlefield
        Strategic Landscapes Chester County, Pennsylvania. Prepared for the
        County of Chester and the American Battlefield Protection Program.
        (Newark, Delaware: South River Heritage Consulting, LLC., 2019).
        Together with Wade P. Catts and Sean Moir at:
        https://www.chescoplanning.org/Historic/pdf/BB-TechReport-South-Daylight.pdf
        “The Politics of Arming America or: Why are there still dozens of
        Vallière 4-lb Cannon à la suédoise in the United States but only four in
        all of Europe?” in: New Perspectives on the “Last Argument of Kings”.
        (Ticonderoga, New York: Fort Ticonderoga Press, 2018), pp. 30-51.
        “Hessian Savages, Frog-Eating Frenchmen, and Virtuous Americans,
        1776-1783: How Personal Experiences Change Time-honored Perceptions.”
        in: The American Revolution: A World War David K. Allison and Larrie D.
        Ferreiro, eds., (Washington, DC: Smithsonian Books, 2018), pp. 170-185.
        The Washington-Rochambeau National Historic Trail in the State of New
        Hampshire, 1783. An Historical and Architectural Survey. (Washington,
        DC: Washington- Rochambeau Revolutionary Route National Historic Trail
        [WaRo], 2018) The Washington-Rochambeau National Historic Trail in the
        Commonwealth of Massachusetts, 1781 - 1783. An Historical and
        Architectural Survey. (Boston: Washington-Rochambeau Revolutionary Route
        Association of Massachusetts, 2017) “The Army march’d at Day Break in
        two Columns.” Military Terrain Analysis for two Brandywine Battlefield
        Strategic Landscapes Chester County, Pennsylvania. Prepared for the
        County of Chester and the American Battlefield Protection Program. (West
        Chester, Pennsylvania: Commonwealth Heritage Group, Inc., 2017).
        Together with Wade P. Catts and Kevin Bradley at:
        https://www.chescoplanning.org/Historic/pdf/BB-TechReport-South-Daybreak.pdf
        Cultural Resources Survey of the Bennington Battlefield, Walloomsac, New
        York. Prepared for the New York State Office of Parks, Recreation, and
        Historic Preservation and the American Battlefield Protection Program.
        (Jackson, Michigan: Commonwealth Heritage Group, Inc., 2017). Together
        with Wade P. Catts, Christopher T. Espenshade, Elisabeth Lavigne, and
        James Montney at:
        https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx
        Hubbardton Battlefield National Register Nomination Revision. Prepared
        for the Vermont Division of Historic Preservation and the American
        Battlefield Preservation Program. (Jackson, Michigan: Commonwealth
        Heritage Group, Inc., 2017). Together with Wade P. Catts at:
        https://parks.ny.gov/historic-sites/benningtonbattlefield/education.aspx
        "It is Painful for Me to Lose so Many Good People”: Report of an
        Archeological Survey at Red Bank Battlefield Park (Fort Mercer),
        National Park, Gloucester County, New Jersey. Prepared for Gloucester
        County Department of Parks and Recreation and the American Battlefield
        Protection Program. (West Chester, Pennsylvania: Commonwealth Heritage
        Group, Inc., 2017). Together with Wade P. Catts, Elisabeth Lavigne,
        Kevin Bradley, Kathryn Wood, and David G. Orr at:
        https://www.gloucestercountynj.gov/DocumentCenter/View/959/Red-Bank-Battlefield-Archeology-Report-PDF?bidId=
        “Cheer Up My Boys, the Day is Ours….”: Field Survey, Preparation of
        Maps, and Preparation of Local and National Landmark/National Register
        Historic District Applications for the D’Ambrisi Property, Princeton,
        New Jersey. Prepared for the Princeton Battlefield Society and the
        American Battlefield Protection Program. (West Chester, Pennsylvania:
        Commonwealth Heritage Group, Inc., 2017). Together with Wade P. Catts
        and Kevin Bradley. Cultural Resource Survey and Land and Water Based
        Route Reconnaissance for the Washington-Rochambeau National Historic
        Trail in the District of Columbia, September 1781 to July 1782.
        (Washington, DC: Washington-Rochambeau National Historic Trail [WaRo],
        2016) “Rochambeau in New Jersey: The Good French Ally.” in: The American
        Revolution in New Jersey: Where the Battlefront Meets the Home Front
        James J. Gigantino II, ed., (New Brunswick, New Jersey: Rutgers
        University Press, 2015), pp. 85-105. The Washington-Rochambeau
        Revolutionary Route in the Commonwealth of Rhode Island, 1781 - 1783. An
        Historical and Architectural Survey. (Providence, Rhode Island: W3R
        Association of Rhode Island and Providence Plantations, 2015) Cultural
        Resource Survey and Land and Water Based Route Reconnaissance for the
        Washington Rochambeau Revolutionary Route National Historic Trail
        (W3R-NHT) in Maryland, focusing on the Contributions of the Eastern
        Shore to the Victory at Yorktown and the Role of Western Maryland in the
        Yorktown Campaign. (Baltimore, Maryland: Preservation Maryland, 2014)
        The Encampment of French Forces at Scott’s Plantation on 17/18 September
        1781. Excerpted from Historical Research Report on Belvoir (“Scott’s
        Plantation”) from the earliest known Date of European Contact to the
        Present with a particular Focus on the Encampment of French Forces on
        the Site on 17/18 September 1781. (URS Corporation: Baltimore, Maryland
        2014) Historical Research Report on Belvoir (“Scott’s Plantation”) from
        the earliest known Date of European Contact to the Present with a
        particular focus on the Encampment of French Forces on the Site on 17/18
        September 1781. Prepared for URS Corporation as Part of TO 19: Generals
        Highway Project located in Anne Arundel County, MD (URS Corporation:
        Baltimore, Maryland 2014) Cultural Resource Survey and Land and Water
        Based Route Reconnaissance for the Washington Rochambeau Revolutionary
        Route National Historic Trail in the Anacostia Trails Heritage Area,
        Prince George’s County, Maryland (Hyattsville, Maryland: Anacostia
        Trails Heritage Area, 2013) Cultural Resource Survey and Land and
        Water-Based Route Investigation of the French Encampments at Bush Town
        in Harford County, Maryland, on 10/11 September 1781 and from 24 to 29
        August 1782. (Baltimore, Maryland: W3R National Historic Trail Project
        in the State of Maryland, 2013) Battle of the Clouds Technical Report
        and Historical Overview. Prepared for the County of Chester and the
        American Battlefield Protection Program. (West Chester, Pennsylvania:
        John Milner Associates, Inc., 2013) Together with Wade P. Catts and Tom
        McGuire at: https://www.chescoplanning.org/Historic/BattleClouds.cfm
        Washington, Rochambeau, and the Yorktown Campaign of 1781.” in: A
        Companion to George Washington. Edward G. Lengel, ed. (Blackwell, 2012),
        pp. 266-287. Battle of Princeton Mapping Project: Report of Military
        Terrain Analysis and Battle Narrative, Princeton, New Jersey. Prepared
        for the Princeton Battlefield Society and the American Battlefield
        Protection Program. (West Chester, Pennsylvania: John Milner Associates,
        Inc., 2010). Together with Wade P. Catts and M. Harris at:
        https://pbs1777.org/wp-content/uploads/2020/08/2010-09_MilnerReport.pdf
        Investigation of the Spencer’s Ordinary (26 June 1781) and Green Spring
        (6 July 1781) Battlefields, James City County, Virginia. Prepared for
        the County of James City and the American Battlefield Protection
        Program. (Williamsburg, Virginia: Archaeological & Cultural Solutions,
        Inc., 2010). Together with Alain C. Outlaw and Mary B. Clemons.
        Revolutionary War Route and Transportation Survey in the Commonwealth of
        Virginia, 1781-1782. An Historical and Architectural Survey. (Richmond,
        Virginia: Virginia Department of Historic Resources, 2009) La Courageuse
        and La Contrebandiere. A Pair of Bronze 1758 Vallière Light 4-Pounder
        Cannon from the American War of Independence (privat. printed, 2008) The
        Washington-Rochambeau Revolutionary Route in the Commonwealth of
        Pennsylvania, 1781 - 1783. An Historical and Architectural Survey.
        (Philadelphia, Pennsylvania: Pennsylvania Society of Sons of the
        Revolution, 2007) The Washington-Rochambeau Revolutionary Route in the
        State of New Jersey, 1781-1783. An Historical and Architectural Survey.
        3 vols. (Trenton, New Jersey: New Jersey Historic Trust, Department of
        Community Affairs, 2006) "Historical Background." In:
        Washington-Rochambeau Revolutionary Route. Resource Study and
        Environmental Assessment (Boston, Massachusetts: The National Park
        Service Northeast and Capital Regions, 2006), pp. 9-26. March to
        Victory: Washington, Rochambeau, and the Yorktown Campaign of 1781. U.S.
        Army Center for Military History # 70-104-1 (Washington, DC, 2005), free
        at: https://history.army.mil/html/books/rochambeau/CMH_70-104-1.pdf 'En
        Avant' With Our French Allies: Sites, Markers, and Monuments in
        Connecticut Commemorating the Contributions of French Troops under the
        comte de Rochambeau to the Achievement of American Independence, 1780 to
        1782. (Hartford, Connecticut: Connecticut Historical Commission, 2004)
        Hussars in Lebanon! A Connecticut Town and Lauzun's Legion during the
        American Revolution, 1780-1781. (Lebanon, Connecticut: Lebanon
        Historical Society, 2004) The Washington-Rochambeau Revolutionary Route.
        Statement of National Significance. (Boston, Massachusetts: NPS
        Northeast and Capital Regions, 2003) The Washington-Rochambeau
        Revolutionary Route in the State of Delaware, 1781-1783. An Historical
        and Architectural Survey. (Dover: State of Delaware, 2003) The
        Washington-Rochambeau Revolutionary Route in the State of New York,
        1781-1782. An Historical and Architectural Survey. (Albany, New York:
        Hudson River Valley Greenway, 2001) Rochambeau's Cavalry: Lauzun's
        Legion in Connecticut 1780-1781. The Winter Quarters of Lauzun's Legion
        in Lebanon and its March Through the State in 1781. Rochambeau's
        Conferences in Hartford and Wethersfield. Historic and Architectural
        Survey. (Hartford, CT: Connecticut Historical Commission, 2000)
        Rochambeau in Connecticut: Tracing his Journey. Historic and
        Architectural Survey. (Hartford, Connecticut: Connecticut Historical
        Commission, 1999) MINOR PUBLICATIONS AND JOURNAL ARTICLES: “The Culture
        of Death: An Overview of Burial Practices during the American War of
        Independence.” The Brigade Dispatch. Journal Of The Brigade Of The
        American Revolution vol. 50, No. 1, (Winter 2023/24), pp. 3-18.
        “Rochambeau in Bolton. The Whys and Wherefores of the French Encampment
        on the farm of the Rev. George Colton, 21 to 24 June 1781.” The Brigade
        Dispatch. Journal Of The Brigade Of The American Revolution vol. 47, no.
        2, (Autumn 2020), pp. 3-13. “Severed Heads, Potato-Pits and Fence-Posts:
        A Cultural Context for the Burial of Casualties at Bennington, 16 August
        1777.” Journal of the Johannes Schwalm Historical Association vol. 22,
        (2019), pp. 38-46. “Involuntary Soldiers for America – the Rest of the
        Story.” Journal of the Johannes Schwalm Historical Association vol. 21,
        (2018), pp. 85-91. “Involuntary Soldiers for America: Count Friedrich
        Ludwig zu Wertheim-Löwenstein’s Creative Recruitment Practices,
        1781-1782.” Journal of the Johannes Schwalm Historical Association vol.
        20, (2017), pp. 11-18. “Father Ferdinand Farmer’s French-Canadian
        Connection.” Connecticut Maple Leaf vol. 16, no. 2 (Winter 2013-2014),
        pp. 61-65. “Eighteenth-Century Currencies.” The Brigade Dispatch.
        Journal Of The Brigade Of The American Revolution vol. 43, no. 3,
        (Autumn, 2013), pp. 16-31. “Site Lines: Mapping Rochambeau’s March
        across Connecticut” Connecticut Explored vol. 10, no. 2 (Spring 2012),
        pp. 48-49. “How did Yorktown become the largest town in America?” Le
        bulletin. Newsletter of l’Alliance Française, Chapitre de Grasse.
        Norfolk, VA. (January-February 2012), pp. 9-11. “Artillery at Yorktown:
        A Statistical Overview (Part 2 of 2) The Brigade Dispatch. Journal Of
        The Brigade Of The American Revolution vol. 40, no. 3, (Winter 2010),
        pp. 26-32. “Artillery at Yorktown: A Statistical Overview (Part 1 of 2)
        The Brigade Dispatch. Journal Of The Brigade Of The American Revolution
        vol. 40, no. 4, (Autumn 2010), pp. 1-11. “Heritage Tourism, Historical
        Re-Enactments and the Local Economy: A Global Perspective.” The Brigade
        Dispatch. Journal Of The Brigade Of The American Revolution vol. 40, no.
        2, (Summer 2010), pp. 2-11. “French Horse-Thieves, German
        Cattle-Rustlers, and Sticky-Fingered Virginia Militia: The Seedier Side
        of Life in Gloucester County during the Siege of October 1781.” The
        Brigade Dispatch. Journal Of The Brigade Of The American Revolution vol.
        39, no. 1, (Spring 2009), pp. 2-10. Selig, Robert A., translator, and
        Donald M. Londahl-Smidt, annotator. “Extracts from the Diary and Letters
        of Staff Captain Karl Ludwig, Freiherr von Doernberg, 1779-1781: Part 1
        – Germany to Portsmouth, March 28-May 30, 1779.” The Hessians: Journal
        of the Johannes Schwalm Historical Association. 11 (2008): 91-97.
        "Global Implications of the Peace of Paris, 3 September 1783." The
        Brigade Dispatch. Journal Of The Brigade Of The American Revolution vol.
        38, no. 4, (Winter 2008), pp. 2-29. "20 October 1781: The Day After the
        Surrender." The Brigade Dispatch. Journal Of The Brigade Of The American
        Revolution vol. 38, no. 2, (Summer 2008), pp. 2-16. "Old World Meets
        New: Franco-American Encounters and the expédition particulière,
        1780-1782." The Brigade Dispatch. Journal Of The Brigade Of The American
        Revolution vol. 37, no. 1, (Spring 2007), pp. 2-11. "Tracing the
        Yorktown Campaign of 1781 - 82." Notes on Virginia no. 51 (2007), pp.
        47-55. "Walk Where They Fought: Path to Victory!" The Armchair General
        (July 2006) (with Barnet Schecter) at: http://www.armchairgeneral.com/
        "Der Spanische Erbfolgekrieg in Übersee." In: Die Schlacht von
        Höchstädt/The Battle of Blenheim J. Erichsen and K. Heinemann, eds.,
        (Ostfildern: Jan Thorbecke, 2004), pp. 90-95. "Hessians Fighting for
        American Independence? German Deserters recruited for Lauzun's Legion in
        America, 1780 - 1782." Journal of the Johannes Schwalm Historical
        Association vol. 7, no. 4, (2004), pp. 39-51. "Eyewitness to Yorktown."
        Military History (February 2003), pp. 58-64. (based on the letters of
        comte Schwerin, a lieutenant in the company of grenadiers in the Royal
        Deux-Ponts regiment to his uncle the Prince of Neuwied. "Das Deutsche
        Königlich-Französische Infanterie Regiment von Zweybrücken or Royal
        Deux-Ponts." Journal of the Johannes Schwalm Historical Association.
        Part 1: April 1756 - March 1780, in vol. 6, no. 4, (2000), pp. 52-59.
        Part 2: March 1780 - June 1781, in vol. 7, no. 1, (2001), pp. 43-53.
        Part 3: July 1781 - June 1783, in vol. 7, no. 2, (2002), pp. 29-43. Part
        4: June 1783 - 21 July 1791, in vol. 7, no. 3, (2003), pp. 42-52.
        "Putting the Washington - Rochambeau Trail on the Map." Flintlock &
        Powderhorn, Magazine of the Sons of the Revolution vol. 21, no. 1,
        (Spring 2003), pp. 4-15. “The Revolution’s Black Soldiers.” Journal of
        the Afro-American Historical and Genealogical Society vol. 22, No. 1,
        (2003), pp. 1-11. "A New View of Old Williamsburg. A Huntington Library
        Manuscript Provides Another Glimpse of the City in 1781." Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        22, no. 1, (Spring 2000), pp. 30-34. The author is an unidentified
        officer in the Soissonnois Regiment of Infantry. "Traveling On the
        Washington-Rochambeau-Revolutionary-Route." Daughters of the American
        Revolution Magazine vol. 135, no. 5, (May 2001), pp. 428-435. "The word
        liberté was frequently heard. The Royal Deux-Ponts in the American and
        the French Revolutions." Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 21, no. 1, (Spring 2001), pp.
        80-84. "Johann Georg Wüst. Der König von Ostindien." Damals. Das
        aktuelle Magazin für Geschichte und Kultur vol. 32, no. 11, (November
        2000), pp. 66-71. "The Iconography to Triumph and Surrender." Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        23, no. 3 (Autumn 2000), pp. 72-77. "From Newport to Yorktown: Following
        the Road to Victory." Colonial Williamsburg. The Journal of the Colonial
        Williamsburg Foundation vol. 22, no. 3 (Autumn 2000), pp. 66-71. “’Mon
        tres cher oncle’" Lt. Graf Wilhelm von Schwerin writes home from a
        Virginia Victory. Colonial Williamsburg. The Journal of the Colonial
        Williamsburg Foundation vol. 22, No. 2, Summer 2000), pp. 48-54. “Mount
        Vernon After Washington: The Rescue of an American Memory.” Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        22, No. 1, (Spring 2000), pp. 48-54. "Nothing but Sky and Water:
        Descriptions of Transatlantic Travel from the Journal of Georg Daniel
        Flohr, Grenadier, Royal Deux-Ponts, 1780-1783." Naval History vol. 13,
        no. 5, (September/October 1999), pp. 29-34. "The duc de Lauzun and his
        Légion, Rochambeau's most troublesome, colorful soldiers." Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        21, no. 6, (December 1999/January 2000), pp. 56-63. "François Joseph
        Paul Comte de Grasse, the Battle off the Virginia Capes, and the
        American Victory at Yorktown." Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 21, no. 5, (October/November
        1999), pp. 26-32. "The Prince and the Pauper: Christian von Zweibrücken
        and Lucy Randolph." German Life vol. 6, no. 2, (August/September 1999),
        pp. 40-42. "A French Volunteer who lived to rue America's Revolution:
        Denis Jean Florimond de Langlois, Marquis du Bouchet" Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        21, no. 3, (June/July 1999), pp. 16-25. "Who were the Huguenots?"
        Colonial Williamsburg. The Journal of the Colonial Williamsburg
        Foundation vol. 21, no. 2, (April/May 1999), pp. 67-71.
        "Eighteenth-Century European and American Currencies." Beyond Germanna
        vol. 11, No. 2, (March 1999), pp. 616-617. "Georg Daniel Flohr" Beyond
        Germanna vol. 10, no. 6, (November 1998), pp. 591-592, and vol. 11, no.
        1, (January 1999), pp. 606-607. "Wilhelmsburg in the Year 1702: The
        Account of Franz Ludwig Michel." Colonial Williamsburg. The Journal of
        the Colonial Williamsburg Foundation vol. 20, no. 4, (Summer 1998), pp.
        23-31 at: www.patc.net/michel2.html "America the Ungrateful: The
        Not-So-Fond Remembrances of Louis François Dupont d'Aubevoye, comte de
        Lauberdière." American Heritage vol. 48, no. 1, (February 1997), pp.
        101-106. "The Revolution's Black Soldiers. They fought for both Sides in
        their Quest for Freedom." Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 19, No. 4, (Summer 1997), pp.
        15-19.   “Virginia's Black Codes.” Colonial Williamsburg. The Journal of
        the Colonial Williamsburg Foundation vol. 19, No. 4, (Summer 1997), pp.
        20-21. "Emigration and the Safety-Valve Theory in the Eighteenth
        Century: Some Mathematical Evidence from the Prince-Bishopric of
        Würzburg" Yearbook of the Society for German-American Studies vol. 31,
        (1996), pp. 137-55; together with Dr. Duane Broline. "And is, Alas! The
        Hour of our Parting Come?" Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 18, no. 4, (Summer 1996), pp.
        46-53. "The Freshest Advices (post-script to my essay 'And is, Alas! The
        Hour of our Parting Come')" Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 19, no. 1, (Fall 1996), pp. 14-15.
        "Lauberdière's Journal. The Revolutionary War Journal of Louis François
        Bertrand d'Aubevoye, comte de Lauberdière." Colonial Williamsburg. The
        Journal of the Colonial Williamsburg Foundation vol. 18, no. 1, (Autumn
        1995), pp. 33-37. "The Freshest Advices (post-script to my essay
        'Lauberdière's Journal')" Colonial Williamsburg. The Journal of the
        Colonial Williamsburg Foundation vol. 18, no. 2, (Winter 1995-96), pp.
        6-7. "Storming the Redoubts (Yorktown, 14 October 1781)." Military
        History Quarterly vol. 8, no. 1, (Autumn 1995), pp. 18-27. "Deux-Ponts
        Germans. Unsung Heroes of the American Revolution." German Life vol. 2,
        no. 2, (August/September 1995), pp. 50-53. "Finding Fame in Virginia:
        But Fortune eluded Baron Friedrich Wilhelm von Steuben." Colonial
        Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
        17, no. 2, (Winter 1994-95), pp. 55-59. "Private Flohr's Other Life: The
        young German fought for American Independence, went home and returned as
        a man of peace." American Heritage vol. 45, no. 6,(October 1994), pp.
        94-95.{' '}
        <div>
          "Light Infantry Lessons from America? Johann von Ewald's Experiences
          in the War for Independence." Studies in Eighteenth-Century Culture 23
          (1993), pp. 111-129.{' '}
        </div>
        <div>
          "The French Capture of St. Eustatius, 26 November 1781." Journal of
          Caribbean History vol. 27, no. 2, (December 1993), pp. 129-143.{' '}
        </div>
        <div>
          "A German Soldier in New England During the Revolutionary War: The
          Account of Georg Daniel Flohr." Newport History vol. 65, no. 223,
          (Fall 1993), pp. 48-65.{' '}
        </div>
        <div>
          "A German Soldier in America, 1780-1783: The Journal of Georg Daniel
          Flohr.” William and Mary Quarterly vol. 50, no. 3, (July 1993), pp.
          575-590. Also in "The Periodical Observer" Wilson Quarterly vol. 18,
          no. 1, (Winter 1994), pp. 136-137.
        </div>{' '}
        <div>
          {' '}
          "Georg Daniel Flohr's Journal: A New Perspective." Colonial
          Williamsburg. The Journal of the Colonial Williamsburg Foundation vol.
          15, no. 4, (Summer 1993), pp. 47-53.{' '}
        </div>
        <div>
          "Private Flohr's America. From Newport to Yorktown and the Battle that
          won the War: a German Foot Soldier who fought for American
          Independence tells all about it in a newly discovered Memoir."
          American Heritage vol. 43, no. 8, (December 1992), pp. 64-71. Repr. in
          Battles and Leaders F. Allen, ed., (New York: Forbes, 1994), pp. 2-9.
        </div>
        <div>
          "Idea and Practice of the ius emigrandi in the Holy Roman Empire from
          the Reformation to the French Revolution." Yearbook of the Society for
          German-American Studies vol. 27, (1992), pp. 15-22.
        </div>
        <div>
          "The Price of Freedom: Poverty, Emigration and Taxation in the
          Prince-Bishopric of Würzburg in the Eighteenth Century." Yearbook of
          the Society for German-American Studies vol. 26, (1991), pp. 105-126.
        </div>
        <div>
          {' '}
          "Emigration, Fraud, Humanitarianism and the Founding of Londonderry,
          South Carolina, 1763-1765." 18th-Century Studies vol. 23, no. 1, (Fall
          1989), pp. 1- 23.{' '}
        </div>
        <div>
          "Regulations for the Child-Weavers in the Juliusspital Workhouse in
          Würzburg (1731)." Schatzkammer der deutschen Sprache, Dichtung und
          Geschichte vol. 14, no. 2, (Fall 1988), pp. 117-129.
        </div>
        <div>
          "Eighteenth-Century Last Wills and Testaments as a Source for Social
          History. Winterhausen as a Case Study." Proceedings of the Thirteenth
          Annual European Studies Conference Omaha, Nebraska, 1988, pp. 317-328.
        </div>
        <div>
          "Underpaid and Overworked': The Plight of Servants in Eighteenth
          Century Franconia." Proceedings of the Twelfth Annual European Studies
          Conference Omaha, Nebraska, 1987, pp. 255-266.
        </div>
        <div>
          "Mangy Sheep and Greedy Shepherds': Emigration from the
          Prince-Bishopric of Würzburg during the Eighteenth Century and its
          Causes." Proceedings of the Eleventh Annual European Studies
          Conference Omaha, Nebraska, 1986, pp. 238-249.
        </div>
        <div>
          "Friedrich Wilhelm von Steubens Kommando in Virginia (1780/81)" in:
          Friedrich Wilhelm von Steuben. Leben, Zeit, und Zeitgenossen. W.
          Giesebrecht, ed., (Würzburg: Handelsdruckerei, 1980), pp. 115-125.
        </div>
        <div>ENTRIES IN ENCYCLOPEDIAS AND REFERENCE WORKS: </div>
        <div>
          "Abatis", "Desertion, Army", "Discipline, Army", "Infantry", "Light
          Infantry", "Manuals, Military", " Recruitment, Army ", "Redoubt",
          "Strategy", "Tactics, Infantry." in: Colonial Wars of North America
          1512-1763. An Encyclopedia Alan Gallay, ed., (New York: Garland,
          1996), pp. 1, 172, 176-77, 308, 383, 412-13, 624-25, 625, 722-23,
          735-36
        </div>
        <div>
          "Augustus II, King of Poland, Elector of Saxony", "Bavaria, Revolt in
          (1705-06)", “Cayenne", "Gertruydenberg", "Maximilian Emanuel von
          Wittelsbach, Elector of Bavaria", "Orsbeck, Johann Hugo von, and
          Lothringen, Karl Joseph von, Electors of Treves", "Pfalz-Neuburg,
          Johann Wilhelm von der, Elector Palatinate", “Schönborn, Lothar Franz
          von, Elector of Mainz", "Tyrol, Revolt in (1703)." in: Historical
          Dictionary of the Treaties of the War of the Spanish Succession Linda
          and Marsha Frey, eds.(Westport: Greenwood Press, 1995), pp. 22-23,
          35-36, 88-89, 181-83, 278-81, 322-23, 343-44, 401-03, 448-49.
        </div>
        <div>
          "Royal-Deux-Ponts", "Friedrich Wilhelm von Steuben." in: Encyclopedia
          of the American Revolution Richard C. Blanco, ed., 2 Vols. (New York:
          Garland, 1993), vol. 2, pp. 1436-39, and 1579-85.
        </div>
        <div>
          "Franconia", "Artisans", "Peasants", in: Encyclopedia of 1848
          Revolutions J. Chastain, ed., Published only on the Internet at:
          www.cats.ohiou.edu/~chastain/
        </div>
      </PageLayout>
    </>
  );
}
