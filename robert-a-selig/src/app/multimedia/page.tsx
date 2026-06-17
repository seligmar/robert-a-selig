import PageLayout from '../layout/pagelayout';
import './multimedia.css';

export default function multimedia() {
  return (
    <>
      <PageLayout>
        <h2>Multi-Media Presentations</h2>
        <div className='media-div'>
          <iframe
            className='media-div-iframe'
            width='809'
            height='455'
            src='https://www.youtube.com/embed/yoAHlGDjINI'
            title='Waging War In America: Operational Challenges of Armies During the American Revolution'
            // frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>{' '}
        </div>
        <div className='media-div-text'>
          {' '}
          <a href='https://www.youtube.com/watch?v=yoAHlGDjINI'>
            {' '}
            Waging War in America, 1775-1783: Operational Challenges of Five
            Armies. Panel discussion hosted by the American Revolution Institute
            of The Society of the Cincinnati on 1 August 2024
          </a>
        </div>{' '}
        <div className='media-div'>
          <iframe
            className='media-div-iframe'
            width='809'
            height='455'
            src='https://www.youtube.com/embed/nkx64Q5ACgc'
            title='Rochambeau at Morven with Dr. Peter A. Selig'
            // frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='media-div-text'>
          <a href='https://youtu.be/nkx64Q5ACgc'>Rochambeau at Morven</a>
        </div>{' '}
        <div className='media-div'>
          <iframe
            className='media-div-iframe'
            src='https://cdn.jwplayer.com/players/g1LLTbXU-xS4RtpB7.html'
            width='809'
            height='455'
            //  frameborder='0'
            scrolling='auto'
            title='March%20to%20Yorktown%20%7C%20C-SPAN.org'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='media-div-text'>
          <a href=' https://www.c-span.org/video/?327130-1/discussion-march-yorktown'>
            The March to Yorktown
          </a>
        </div>
        <div className='media-div'>
          <iframe
            className='media-div-iframe'
            src='https://cdn.jwplayer.com/players/BGJTHQ2a-xS4RtpB7.html'
            width='809'
            height='455'
            title='Revolutionary%20War%20Military%20Burials%20%7C%20C-SPAN.org'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>{' '}
        <div className='media-div-text'>
          <a href='  https://www.c-span.org/video/?453830-2/revolutionary-war-military-burials'>
            Revolutionary War Military Burials
          </a>
        </div>
        <div className='media-div'>
          <iframe
            className='media-div-iframe'
            width='809'
            height='455'
            src='https://www.youtube.com/embed/r0qGvd2P7qI'
            title='Dr. Robert Selig&#39;s Odell House Webinar'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>{' '}
        </div>
        <div className='media-div-text'>
          <a href='https://youtu.be/r0qGvd2P7qI'>
            Tuesday, 14 August 1781. The Day That Shook The World
          </a>
        </div>
        <div className='media-div'>
          <iframe
            title='The Logistics of Moving a Foreign-Speaking, 5,000-Man Army'
            className='media-div-iframe'
            width='809'
            height='455'
            data-name='pb-iframe-player'
            src='https://www.podbean.com/player-v2/?from=embed&i=mwert-1523c45-pb&square=1&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=3ab278&size=300'
            loading='lazy'
            allowFullScreen
          ></iframe>{' '}
        </div>
        <div>
          <a href=' https://amazingtalesct.podbean.com/e/could-you-move-a-5000-man-foreign-speaking-army-across-colonial-ct/'>
            Five podcasts in the series Amazing Tales from Off and On
            Connecticut‘s Beaten Path broadcast by Mike Allen
          </a>
        </div>
        <div className='media-div'>
          {' '}
          <iframe
            title='George Washington Slept Here - Or Did He?'
            width='809'
            height='455'
            data-name='pb-iframe-player'
            src='https://www.podbean.com/player-v2/?from=embed&i=wda3u-1480ba2-pb&square=1&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=3ab278&size=300'
            loading='lazy'
            allowFullScreen
          ></iframe>{' '}
        </div>
        <div className='media-div-text'>
          <a href='https://amazingtalesct.podbean.com/e/george-washington-slept-here-or-did-he/'>
            Wednesday, 16 August 2023: George Washington Slept Here - Or Did He?
          </a>
        </div>
        <div>
          Wednesday, 22 March 2023: When Hungarian Soldiers Came to Rural
          Connecticut for the Winter Wednesday, 2 February 2022: A Trail Like No
          Other - It Brought Us Freedom (Part 2) Wednesday, 26 January 2022:{' '}
          <a>A Trail Like No Other - It Brought Us Freedom </a>(Part 1; about
          the Washington-Rochambeau Revolutionary Route National Historic Trail)
        </div>
      </PageLayout>
    </>
  );
}
