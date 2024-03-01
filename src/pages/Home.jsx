import React from 'react'

const Home = () => {
  return (
    <div>
       {/* Navbar  */}
       <div className='flex justify-around p-3 '>
        <img src='/Images/Logo (1).svg' alt='logo'/>
        <div className='flex gap-2.5 justify-between'>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>Home</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>Service</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>Feature</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>Product</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>Testimonial</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#18191F]'>FAQs</p>
        </div>
        <div className='flex gap-2.5 justify-between'>
            <button className='py-2.5 px-5 rounded-md bg-[#F5F7FA] text-[#4CAF4F]'>Login</button>
            <button className='py-2.5 px-5 rounded-md bg-[#4CAF4F] text-[#FFFFFF]'>Signup</button>
        </div>
       </div>

       {/* Container1 */}
       <div className='flex justify-around py-[80px] px-[144px]'>
        <div className='gap-4 px-4 py-8 text-left'>
            <p className='py-4 font-[600] text-[64px] leading-[76px] text-[#4D4D4D]'>Lessons and insights <span className='font-[600] text-[64px] leading-[76px] text-[#4CAF4F]'>from 8 years</span></p>
            <p className='py-4 font-[400] text-[16px] leading-[24px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
            <button className='my-2 px-3 py-2 font-[500] text-[16px] leading-[24px] text-[#FFFFFF] bg-[#4CAF4F] rounded'>Register</button>
        </div>
        <div>
            <img src='/Images/Illustration.svg' alt='pic'/>
        </div>
       </div>

       {/* Our Clients */}
       <div className='px-[144px]'>
       <p className='py-2 font-[600] text-[36px] leading-[44px] text-[#4D4D4D]'>Our Clients</p>
        <p className='py-2 font-[400] text-[16px] leading-[24px] text-[#717171]'>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-around py-2'>
            <img src='/Images/Logo_1.svg' alt='img'/>
            <img src='/Images/Logo (2).svg' alt='img'/>
            <img src='/Images/Logo (3).svg' alt='img'/>
            <img src='/Images/Logo (4).svg' alt='img'/>
            <img src='/Images/Logo (5).svg' alt='img'/>
            <img src='/Images/Logo (6).svg' alt='img'/>
            <img src='/Images/Logo (7).svg' alt='img'/>
        </div>
       </div>

       <div>
        <div>
            <p>Manage your entire community in a single system</p>
            <p>Who is Nextcent suitable for?</p>
        </div>
        <div className='flex justify-around'>
        <div>
            <img src='' alt=''/>
            <p>Membership Organisations</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div>
        <img src='' alt=''/>
            <p>National Associations</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div>
        <img src='' alt=''/>
            <p>Clubs And Groups</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        </div>
       </div>

       <div className='flex justify-around'>
       <div>
        <img src='' alt=''/>
       </div>
       <div>
        <p>The unseen of spending three years at Pixelgrade</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button>Learn More</button>
       </div>
       </div>

       <div>
       <div>
        <p>Helping a local <spn>business reinvent itself</spn></p>
        <p>We reached here with our hard work and dedication</p>
       </div>
       <div>
       <div>
        <img src='' alt=''/>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       <div>
       <img src='' alt=''/>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       <div>
       <img src='' alt=''/>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       <div>
       <img src='' alt=''/>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Home