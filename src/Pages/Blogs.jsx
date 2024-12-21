import React from 'react'
import blog1 from '/src/assets/blog1.jpg'
import blog2 from '/src/assets/blog2.jpg'
import blog3 from '/src/assets/blog3.jpg'
import blog4 from '/src/assets/blog4.jpg'
import blog5 from '/src/assets/blog5.jpg'
import blog6 from '/src/assets/blog6.jpg'
import blog7 from '/src/assets/blog7.jpg'
import blog8 from '/src/assets/blog8.jpg'
import blog9 from '/src/assets/blog9.jpg'


function Blogs() {
  return (
    <div className=' bg-yellow-60 p-16'>

        <p className='text-7xl font-light tracking-widest text-center font-serif mt-10'>Blogs</p>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mt-10 p-20'>
                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog1} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2 '>When you are young they asume you know nothing.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog2} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>To be the quiet one in the loud world.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog3} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>I  don't want to grow up.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog4} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>"You handled it so well." Did I?</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog5} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>Empathy's paradox: a gift and a curse.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog6} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>For a moment, i stood by my own emptiness.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>


                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                    <img src={blog7} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                    <p className='text-2xl font-serif font-bold text-justify mb-2'>Who are you when nobody is watching?.</p>

                    <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div>

                <div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                <img src={blog8} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                <p className='text-2xl font-serif font-bold text-justify mb-2'>The art of seeing Beauty in Little Things.</p>

                <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


                </div><div className='border-1 shadow-xl p-10 rounded-md flex flex-col items-center bg-red-100'>

                <img src={blog9} className='w-full h-full object-cover mb-4 border-2 border-solid border-black' alt="" />

                <p className='text-2xl font-serif font-bold text-justify mb-2'>Stop pretending that it dosen't hurt.</p>

                <button className='mt-10 w-full p-4 px-5 border-2 border-solid border-black font-sans text-lg font-medium uppercase hover:bg-black hover:text-white tracking-widest transition-colors duration-300'> Read More</button>


</div>



       </div>




            


    </div>
  )
}

export default Blogs