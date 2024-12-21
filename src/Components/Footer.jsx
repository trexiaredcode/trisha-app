import torong from '/src/assets/torong.png'
function Footer() {

    const currentYear = new Date().getFullYear();

  return (

    
    <div className="flex items-center justify-between border-solid border-2 border-pink-300 p-10 bg-red-100">
 
    <div className="flex items-center">
        <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest">© {currentYear} The Gentle Sprout. All rights reserved.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col text-center">
           <img src={torong} className='object-cover h-36 w-36' alt="" />
        </div>
    </div>

  
    <div className="flex flex-col items-center text-center">
        <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest mb-4">Connect with us</p>
        <div className="flex space-x-6 mt-2">
       
            <a href="#" className="text-2xl flex flex-col items-center">
                <i class="fab fa-instagram text-black w-8 h-8"></i>
                <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest mt-2">Instagram</p>
            </a>
            
        
            <a href="#" className="text-2xl flex flex-col items-center">
                <i class="fab fa-twitter text-black w-8 h-8"></i>
                <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest mt-2">Twitter</p>
            </a>

            
            <a href="#" className="text-2xl flex flex-col items-center">
                <i class="fab fa-youtube text-black w-8 h-8"></i>
                <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest mt-2">YouTube</p>
            </a>

           
            <a href="#" className="text-2xl flex flex-col items-center">
                <i class="fab fa-facebook text-black w-8 h-8"></i>
                <p className="font-[Quicksand] text-lg text-black font-medium tracking-widest mt-2">Facebook</p>
            </a>
        </div>
    </div>
</div>
  )
}

export default Footer
