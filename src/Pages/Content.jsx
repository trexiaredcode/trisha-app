  import pic1 from '/src/assets/pic1.jpg'
  import pic2 from '/src/assets/pic2.jpg'
  import pic3 from '/src/assets/pic3.jpg'
  import pic4 from '/src/assets/pic4.jpg'
  import pic5 from '/src/assets/pic5.jpg'
  import pic6 from '/src/assets/pic6.jpg'

function Content() {
  return (
    <>




  
  <div className='flex flex-row items-center bg-yellow-50  w-full mx-auto'>
  
  
   <div className="grid grid-cols-3 gap-5 m-5 p-10">

        <img className="w-68 h-68 object-cover mb-6 " src={pic1} />
        <img className="w-68 h-68 object-cover mb-6 " src={pic2} />
        <img className="w-68 h-68 object-cover mb-6 " src={pic3} />
        <img className="w-68 h-68 object-cover mb-6 " src={pic4} />
        <img className="w-68 h-68 object-cover mb-6 " src={pic5} />
        <img className="w-68 h-68 object-cover mb-6 " src={pic6} />
      
    </div>


    <div className=' border-2 border-pink-300 border-solid h-full py-36 m-10 p-5 space-x-2 '>
<h1 className='text-center font-serif text-2xl tracking-widest uppercase font-bold space-x-4 mt-5 '>Welcome to The Gentle Sprout! 🌱</h1>

      <p className='text-md'>Hi, I’m Tresha, the writer behind The Gentle Sprout. This blog is my little corner of the internet where I share my thoughts, ideas, and the everyday things that inspire me.

Life is full of moments—big and small—that shape who we are. Here, I write about those moments, from reflections on personal growth to the joys and curiosities of life. It’s a place where random ideas come to life, stories are shared, and inspiration can be found in the simplest things.

Whether you’re here to read something uplifting, discover new perspectives, or just take a breather from your day, I hope you find a sense of connection. This blog isn’t just about me; it’s about creating a space where we can grow gently together—learning, laughing, and exploring along the way.

Thank you for stopping by and being part of this journey. 🌸 Let’s see where it takes us! 😊
      </p>

  
    </div>
  </div>

       </>
  )
}

export default Content