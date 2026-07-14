'use client';
import Image from 'next/image';
//import portrait from './selig.png';
import './home-page.css';
// simport LinkComponent from '../header/LinkComponent';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h2>About</h2>
      {/*  https://nextjs.org/docs/app/api-reference/components/image */}
      <Image
        src='/selig.png'
        alt='Portrait of Robert A. Selig'
        className='portrait-image'
        height={350}
        width={350}
      />
      <div className='home-content'>
        Robert A. Selig is a historical consultant who received his Ph.D. in
        history from the <i>Universität Würzburg</i> in Germany in 1988. He is a
        specialist on the role of French forces under the <i>comte</i> de
        Rochambeau during the American War of Independence and serves as project
        historian for the{' '}
        <a href='https://www.nps.gov/waro/index.htm' target='_blank'>
          Washington-Rochambeau Revolutionary Route National Historic Trail
          Project
        </a>
        . For this project he researched and wrote surveys and resource
        inventories for the nine states through which American and French forces
        marched in 1781 and 1782. He also served and serves as Project Historian
        for{' '}
        <a href='https://www.nps.gov/orgs/2287/index.htm' target='_blank'>
          American Battlefield Protection Program
        </a>{' '}
        projects such as the “Battle of Princeton”, “Battle of Green Spring and
        Spencer’s Ordinary”, the “Paoli Massacre”, “Battle of the Clouds”,
        “Battle of Red Bank”, “Battle of Bennington”, “Battle of Hubbardton” and
        the “Battle of Brandywine”.
      </div>
      <div className='home-content'>
        Among his publications are{' '}
        <a
          href='https://www.abebooks.com/first-edition/Hussars-Lebanon-Connecticut-town-Lauzuns-legion/32276164237/bd'
          target='_blank'
        >
          <i>
            Hussars in Lebanon: a Connecticut town and Lauzun's legion during
            the American Revolution
          </i>{' '}
        </a>{' '}
        (Lebanon, 2004), and some 150 articles in American, German, and French
        scholarly and popular history magazines such as the{' '}
        <i>William and Mary Quarterly</i>, <i>Eighteenth-Century Studies</i>,
        the <i>Yearbook of the Society for German-American Studies</i>, as well
        as chapters in books and anthologies. His most recent publications
        include “Damages, Depredations, Sufferings and Destruction: The
        Landscape of Conflict and the ‘Late War with Great Britain’” in:{' '}
        <i>The Archaeology of the American Revolution</i> Richard F. Veit and
        Matthew A. Kalos, eds., (Gainesville: University Press of Florida, 2025
        pp. 205-227 (with Wade P. Catts); “The Culture of Death: An Overview of
        Burial Practices during the American War of Independence.”{' '}
        <i>
          The Brigade Dispatch. Journal Of The Brigade Of The American
          Revolution
        </i>{' '}
        vol. 50 No. 1, (Winter 2023-2024), pp. 3-18;{' '}
        <i>“L’expédition particulière</i> and the American War of Independence,
        1780–1783." in:{' '}
        <i>
          Waging War in America 1775-1783. Operational Challenges of Five Armies
        </i>
         Don N. Hagist, ed. (Warwick: Helion & Company, 2023), pp. 171-191; « De
        Newport à Yorktown, à la Victoire et à la Gloire: la Route
        Washington-Rochambeau et la Victoire du 19 octobre » 1781{' '}
        <i>
          Bulletin Société de la Archéologique Scientifique et Littéraire du
          Vendômois Année 2022{' '}
        </i>
        , pp. 99-104.
      </div>
      <div className='home-content'>
        {' '}
        Honors and awards include the French <i>
          Ordre national du Mérite
        </i>{' '}
        (February 2022),{' '}
        <i>
          La Médaille d’Or des Valeurs Francophones of La Renaissance
          Française{' '}
        </i>
        (2019), the Erick Kurz Memorial Award for German-American History of the
        Steuben Society of America (2015), and the Distinguished Patriot Award,
        National Society of the Sons of the American Revolution (2012), as well
        as 2023, 2024 and 2025 Society of the Cincinnati Fellowships to conduct
        research in the library of the Society of the Cincinnati in Washington,
        DC.{' '}
      </div>
      {/* <div className='home-content'>
        He is a specialist on the role of French forces under the comte de
        Rochambeau during the American Revolutionary War and serves as project
        historian to the National Park Service for the . For this project he
        researched and wrote surveys and resource inventories for the states of
        New Hampshire, Rhode Island, Connecticut, New York, New Jersey,
        Pennsylvania, Delaware, Maryland, the District of Columbia and Virginia
        through which American and French forces marched in 1781 and 1782. These
        reports are available on the internet at:{' '}
        <a>https://w3r-us.org/history-by-state/.</a>
      </div> */}
      {/* <div className='home-content'>
        He has been a regular contributor to{' '}
        <a href='https://germanlife.com/' target='_blank'>
          German Life
        </a>{' '}
        magazine for over 20 years and has also published more than 100 articles
        in American and German scholarly and popular history magazines such as
        the the William and Mary Quarterly, Eighteenth-Century Studies, the
        Yearbook of the Society for German-American Studies, Journal of
        Caribbean History, American Heritage, Naval History, Military History
        Quarterly, Colonial Williamsburg, German Life, Damals, (in German) and
        the Journal of the Johannes Schwalm Historical Association as well as
        chapters in various books and anthologies.
      </div> */}
      <div className='home-content'>
        Dr. Robert A. Selig's CV is available {''}
        <Link href={'/cv'}>here</Link>.
      </div>
    </>
  );
}
