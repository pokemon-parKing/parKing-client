import FooterEntry from './FooterEntry.jsx';
import { footerData } from '../../lib/Footer.js';
import Logo from '../../assets/parKing.png';


function Footer() {
  return (
    <footer className='mt-10 bg-white-s pb-2 flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-center items-center mt-8'>
          <div className='w-[30%] flex justify-center items-center'  >
            <img src={Logo} width='200px' />
          </div>
          <div className='flex item-center flex-col w-[60%] mt-2'>
            <div className='flex items-center justify-center font-semibold mb-4 text-xl italic'>
              <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 512 512" className='w-6 h-6 mr-1'>
                <path fill="currentColor" d="M255.563 21.125L162.5 53.188v216.75h17.563v35.093H333V269.94h17.564l-.002-216.594l-95-32.22zm-143.22 9.156v239.657h31.47V30.28zm256.907 0v239.657h31.47V30.28zM203.687 59.157l30.938 33.875l22.188-33.28l22.218 33.28l28.595-31.53l-11.688 63.656h-80zM77.844 288.626v34.28h83.53v-34.28zm273.844 0v34.28h83.53v-34.28zm-171.625 35.093v17.874h-17.408v15.22l187.75-.002v-15.218H333V323.72H180.062zM95.25 341.593v150.47l48.72-.002V341.595H95.25zm273.844 0v150.47l48.72-.002l-.002-150.468zM162.656 375.5v97.156h187.75V375.5z"/>
              </svg>
                Park like a monarch, where our parking space is your throne
              <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 512 512" className='w-6 h-6 ml-1'>
                <path fill="currentColor" d="M255.563 21.125L162.5 53.188v216.75h17.563v35.093H333V269.94h17.564l-.002-216.594l-95-32.22zm-143.22 9.156v239.657h31.47V30.28zm256.907 0v239.657h31.47V30.28zM203.687 59.157l30.938 33.875l22.188-33.28l22.218 33.28l28.595-31.53l-11.688 63.656h-80zM77.844 288.626v34.28h83.53v-34.28zm273.844 0v34.28h83.53v-34.28zm-171.625 35.093v17.874h-17.408v15.22l187.75-.002v-15.218H333V323.72H180.062zM95.25 341.593v150.47l48.72-.002V341.595H95.25zm273.844 0v150.47l48.72-.002l-.002-150.468zM162.656 375.5v97.156h187.75V375.5z"/>
              </svg>
            </div>
            <div className='flex item-center justify-center w-full text-center'>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
                We aim to optimize car parking and valet interactions, catering to high-traffic metropolitan areas,
                where parking logistics are often cumbersome and time-consuming.
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center py-5'>
          <span className="text-2xl font-bold flex items-center">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            Our Developers
          </span>
        </div>
        <div className="gap-8 col-span-1 grid grid-cols-1 md:grid-cols-4 footer-icon-meet:grid-cols-4">
          {footerData.map((entry, index) => (
                  <FooterEntry key={index} entry={entry} />
            ))}
        </div>
        <a className='mt-4 ml-auto mr-4 flex item-center text-xs font-semibold' href='https://github.com/pokemon-parKing'>parKing &#169;2024 - All Rights Reserved</a>
    </footer>

  );
}

export default Footer;