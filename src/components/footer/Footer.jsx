import FooterEntry from './FooterEntry.jsx';
import { footerData } from '../../lib/Footer.js'; 

function Footer() {
  return (
    <footer className='bg-white-s pb-10'>
        <div className='flex flex-col items-center py-5'>
          <span className="text-xl font-bold">ParKING</span>
          <span className="text-xl font-bold">Developers</span>
        </div>
        <div className="gap-y-8 col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 mx-96 ">
          {footerData.map((entry, index) => (
                <FooterEntry key={index} entry={entry} />
            ))}
        </div>


    </footer>
   
  );
}

export default Footer;