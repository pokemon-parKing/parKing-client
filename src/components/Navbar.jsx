
function Navbar() {
  return (
    <nav className='sticky top-2 z-50 h-[10vh] bg-[#171412] flex justify-between px-4 items-center border-b border-[rgb(57,55,52)]'>
        <div>
            <span className='text-3xl tracking-[11px] font-bold text-[#A9927D] '>ParKing</span>
        </div>
            
        <div className="flex gap-8">
            <span className='font-extralight
            tracking-[2px]
            text-[#A9927D]
            text-xs'>OUR APPS</span>
            <span className='font-extralight
            tracking-[2px]
            text-[#A9927D]
            text-xs'>HELP</span>
            <span className='font-extralight
            tracking-[2px]
            text-[#A9927D]
            text-xs'>SIGN IN</span>
            <span className='font-extralight
            tracking-[2px]
            text-[#A9927D]
            text-xs'>SIGN UP</span>
            <span className='font-extralight
            tracking-[2px]
            text-[#A9927D]
            text-xs'>FIND PARKING</span>
        </div>
    </nav>     
  )
}

export default Navbar
