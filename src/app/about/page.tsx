'use client';
import Image from 'next/image';
import Link from 'next/link';
import './home-page.css';

export default function HomePage() {
  return (
    <>
      <h2>About</h2>
      {/*  https://nextjs.org/docs/app/api-reference/components/image */}
      <Image
        src='/robert-a-selig/selig.png'
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
        inventories for the nine states and the District of Columbia (as well as
        the State of New Hampshire) through which American and French forces
        marched in 1781 and 1782. These reports are available throught the{' '}
        <a href='https://w3r-us.org/' target='_blank'>
          Washington-Rochambeau Revolutionary Route (W3R) US website
        </a>{' '}
        and can be searched by State. He also served and serves as Project
        Historian for{' '}
        <a href='https://www.nps.gov/orgs/2287/index.htm' target='_blank'>
          American Battlefield Protection Program
        </a>{' '}
        projects such as the “
        <a
          href=' https://pbs1777.org/wp-content/uploads/2020/08/2010-09_MilnerReport.pdf'
          target='_blank'
        >
          Battle of Princeton
        </a>
        ”, “Battle of Green Spring and Spencer’s Ordinary”, the “Paoli
        Massacre”, “Battle of the Clouds”, “Battle of Red Bank”, “Battle of
        Bennington”, “Battle of Hubbardton” and the “Battle of Brandywine”. He
        also serves as project historian to the{' '}
        <a
          href='https://www.rowan.edu/ric-edelman-college/departments/history/red-bank-battlefield/'
          target='_blank'
        >
          Battle of Redbank Archeology Project
        </a>
        .
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
          </i>
        </a>{' '}
        (Lebanon, 2004), and some 150 articles in American, German, and French
        scholarly and popular history magazines such as the{' '}
        <i>William and Mary Quarterly</i>, <i>Eighteenth-Century Studies</i>,
        the <i>Yearbook of the Society for German-American Studies</i>, as well
        as chapters in books and anthologies. His most recent publications
        include “Damages, Depredations, Sufferings and Destruction: The
        Landscape of Conflict and the ‘Late War with Great Britain’” in:{' '}
        <i>The Archaeology of the American Revolution</i> Richard F. Veit and
        Matthew A. Kalos, eds., (Gainesville: University Press of Florida, 2025)
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
      <div className='home-content'>
        Dr. Robert A. Selig's CV is available {''}
        <Link href={'/cv'}>here</Link>.
      </div>
    </>
  );
}
