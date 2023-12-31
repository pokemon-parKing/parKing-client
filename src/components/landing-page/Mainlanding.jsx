import Navbar from '../Navbar'
import Valetlanding from './Valetlanding'
import photo1 from '../../assets/photo1.jpg'

function MainPage() {
  return (
    <main className=" flex flex-col bg-[#171412] font-light">
    {/*  font-family: "Poppins", sans-serif; font family for main */}
      <div className="flex my-28 mx-auto text-center my-28 mx-auto">
        <div className="w-[600px]">
    
          <h1 className='text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)]'>Valet Services and Parking Solutions for Everyday Needs and All Occasions.</h1>
        </div>
        <div className="relative h-full w-[480px]">
          <div className="hero1__rightCol-text">
             <p className="text-xl text-[#A9927D] text-left leading-8">Reliable, data-driven valet service for events of all sizes, ensuring guest convenience at every step, anywhere in the U.S.</p>
          </div>
          <div className="absolute top-32 left-0 h-16  w-64 bg-[var(--pk-burgundy)] flex justify-center items-center rounded-xl text-lg">
            <button className="w-full">Find Parking</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 right-11 absolute scale-75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
        <div className="w-full">
          <video className="w-10/12 h-auto mx-auto" width="100%"  height="100%" loop autoplay muted  autoPlay >
            <source src="src/assets/heroVid.mp4" type="video/mp4"/>
            <source src="/heroVid.ogg" type="video/ogg"/>
            <source src="/video/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div> 


        <div className='flex flex-col h-[120vh] p-37'>
      <div className=' flex flex-col items-center'>
        <p className='text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)]'>Elevate Your Parking Endeavor</p>
        <span className=' my-5 text-xl text-left text-[var(--pk-beige)]'>Economize Elegantly, Transform Your Travel</span>
      </div>
      <div className='flex py-25 gap-x-10'>
        <div className='text-center'>
          <div className='mx-auto mb-11 h-20 w-20 rounded-full bg-[var(--pk-beige-secondary)] relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-black w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span className='text-xl text-left text-[var(--pk-beige)]'>Affordable Parking Solutions</span>
          <p>Enjoy cost-effective parking solutions without compromising on quality. Our data-driven approach ensures efficient space utilization, reducing costs and enhancing your parking experience.</p>
        </div>
        <div className='inline-block mb-2.5 text-center h-14'>
          <div className='mx-auto mb-11 h-20 w-20 rounded-full bg-[var(--pk-beige-secondary)] relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-black w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            
          </svg></div>
          <span className='text-xl text-left text-[var(--pk-beige)]'>Insightful and User-Friendly Reporting</span>
          <p>Gain insights with our easy-to-understand reports. We track usage and efficiency to continually improve our services, ensuring you receive affordable, convenient parking solutions tailored to your needs.</p>
        </div>
        <div className='inline-block mb-2.5 text-center h-14'>
          <div className='mx-auto mb-11 h-20 w-20 rounded-full bg-[var(--pk-beige-secondary)] relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-black w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
          <span className='text-xl text-left text-[var(--pk-beige)]'>Enhanced Accessibility and Recognition</span>
          <p>Leverage the trust and recognition of Curbstand to find easily accessible and secure parking spaces. Our reputable service draws in more customers, offering you both affordability and peace of mind.</p>
        </div>
        <div className='inline-block mb-2.5 text-center h-14'> 
          <div className='   mx-auto mb-11 h-20 w-20 rounded-full bg-[var(--pk-beige-secondary)] relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-black w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
          </div>  
          <span className='text-xl text-left text-[var(--pk-beige)]'>Save More, Experience More</span>
          <p>Enjoy cost-effective parking solutions without compromising on quality. Our data-driven approach ensures efficient space utilization, reducing costs and enhancing your parking experience.</p>
        </div>
      </div>
      <div className='hero2__button'>

      </div>
    </div>
    <div className='h-[70vh] w-full'>
       <div className='flex w-4/5 h-[550px] bg-[rgb(68,55,55)] mx-auto'>
            <div className=' p-6 h-full mx-[100px]'>
                <img className="w-full h-full" src={photo1} alt='img' />
            </div>
            <div className='flex flex-col items-center text-center w-2/5 h-full py-[100px] px-12'>
                <h1 className='mb-7 text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)] mb-10'>Explore Career Opportunities with Us</h1>
                <p className='text-base text-xl text-left text-[var(--pk-beige)]'>Are you ready to advance your career with us? Discover exciting opportunities and apply today. Visit our Careers page for more information and to submit your application.</p>
            </div>
       </div> 
    </div>
    </main>
  )

}

export default MainPage
