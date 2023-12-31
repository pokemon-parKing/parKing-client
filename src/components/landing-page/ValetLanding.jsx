import React from 'react'

function Valetlanding() {
    return (
        <main className="m-24"> 
            <div className='flex mx-auto w-9/12'>
                <div className='w-6/12'>
                  <span className='text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)]'>Profit from Parking, Made Effortless.</span>
                </div>
                <div className='w-6/12'>
                  <span className='text-xl text-left text-[var(--pk-beige)]'>Since our inception, we have been revolutionizing the parking industry by streamlining the process, making it quicker and more efficient for everyone involved. Our platform is designed to turn your parking space into a stress-free revenue generator</span>
                </div>
            </div>







            <div className='flex justify-between mt-12 ml-36 mr-36'>
              <div className='w-1/4 mt-12 text-center'>
                  <div className='valetLP__icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                    </svg>
                  </div>

                  <h2 className='text-xl text-left text-[var(--pk-beige)]'> List Your Garage</h2>
                  
                  <p>Set the Stage for Success: Begin by listing your garage with us. It's a simple process – just fill in the details about your parking space, including location, size, and any special features. This is your chance to showcase your garage to a wide array of potential customers.</p>
              </div>

              <div className='valetLP__instructions-steps'>
                  <div className='valetLP__icons'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>
                  </div>

                  <h2 className='text-xl text-left text-[var(--pk-beige)]'>Await Reservation Requests</h2>
                  
                  <p>Connect with Customers: Once your listing is live, sit back and watch as customers discover your garage. You'll receive reservation requests from users looking for convenient parking options. Our platform makes it easy to manage these requests, ensuring you're always in control.</p>
              </div>
              <div className='valetLP__instructions-steps'>
                  <div className='valetLP__icons'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                  </div>
                  <h2 className='text-xl text-left text-[var(--pk-beige)]'>Seamless Transactions</h2>
                  <p>Earn Effortlessly: When a reservation is made, the payment process is smooth and secure. We handle the transaction, ensuring you receive prompt and hassle-free payments. This way, you can focus on providing top-notch valet services while we take care of the financial details.</p>
              </div>
        </div>
        <div className='valetLP__garageInfo flex justify-between w-4/6 mx-auto mt-12 mb-72'>
          <div className='valetLP__garageCol-left w-6/12 flex flex-col'>
            <h1 className='text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)] mb-10'>Your Garage, Your Details</h1>
            <p className='text-xl text-left text-[var(--pk-beige)]'>Welcome to your personal garage dashboard. Here, you'll find all the essential details of your listed garage, from location to special features. This comprehensive overview ensures you're always up to date with every aspect of your parking space offering. Feel free to review or update your garage information to keep it current for your customers.</p>
          </div>
          <div className='valetLP__garageDetails flex flex-col w-1/3 gap-5 pt-5'> 

            {/* 

flex, flex-direction = flex flex-col
justify content space between = justify-between
justify-content = justify-center
align-items center = items-center
width: 70%; = w-4/6
margin: 0 auto; = mx-auto 
margin-bottom 50px = mb-12
text align center = text-center
width: 30%; = w-1/3
gap: 20px; = gap-5
padding-top 20 = pt-5
margin-bottom 40px =  mb-10
margin-top 50px = 
*/}

            <span>Name: Western Garage</span>
            <span>State: Texas</span>
            <span>City: Austin</span>
            <span>Address: 1234 Western St</span>
            <span>Zip Code: 12345</span>
            <span>Price: $10/hr</span>
            <span>Special Features: Covered, Security Cameras</span>
          </div>
      </div>  
      <div className='flex flex-col  justify-center items-center w-4/6 mx-auto '>
        <h2 className='text-4xl text-left letter-spacing: -0.025em text-[var(--pk-beige)] mb-12 text-center'>Stay on Top of Your Bookings</h2>
        <p className='text-xl text-left text-[var(--pk-beige)]'>Keep your business running smoothly by effortlessly managing your bookings. Access real-time updates on customer reservations, respond to requests promptly, and plan ahead with ease. Our intuitive platform empowers you to stay ahead and maintain control.</p>
        <button className='valetLP__viewReservationsBtn'>View Reservations</button> 
        {/* still gotta do  */}
        </div>

        


            


        </main>
      )
    }

export default Valetlanding


