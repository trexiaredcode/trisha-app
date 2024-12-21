import {Link} from 'react-router'
import torong from '/src/assets/torong.png'


const HomePages = () => {
  return (
    <>




  
<div className="bg-red-100 p-11 flex flex-col items-center justify-center space-y-2">
      <img className="h-[340px] mx-auto mt-5" src={torong} alt="centerd-img" />

      <p className="text-pink-300 text-[40px] text-center font-extrabold "> The Gentle Sprout </p>
      <p className="text-black text-[15px] text-center">"Quietly dreaming, softly creating, endlessly growing."</p>
      <Link to="/about" className="bg-red-200 border-solid border-2 border-purple-300 font-bold p-3 px-5 rounded-full text-white text-center hover:bg-violet-400 ">About Me</Link>
    </div>
  
        </>
  )
}

export default HomePages