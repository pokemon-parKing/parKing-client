import FooterEntry from './FooterEntry.jsx';
import { footerData } from '../../lib/Footer.js';


function Footer() {
  return (
    <footer className='bg-white-s pb-10'>
        <div className='flex flex-col items-center py-5'>
          <span className="text-2xl font-bold">ParKing Developers</span>
        </div>
        <div className="gap-y-8 col-span-1 grid grid-cols-1 md:grid-cols-2 footer-icon-meet:grid-cols-4   md:col-span-8  lg:mx-56 ">
          {footerData.map((entry, index) => (
                <div key={index} >
                  <FooterEntry entry={entry} />
                  
                </div>
            ))}
        </div>


    </footer>

  );
}

export default Footer;