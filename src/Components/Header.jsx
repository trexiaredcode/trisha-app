import {NavLink} from 'react-router'
function Header() {
  return (
    <>
    <div className="bg-yellow-50 border-solid border-2 border-pink-300 p-5 sticky top-0 ">
      <nav className="flex flex-row justify-center space-x-10 items-centers">
        <NavLink to="/" className="font-medium font-serif text-lg tracking-widest uppercase hover:text-pink-400">Home</NavLink>
        <NavLink to="about" className="font-medium font-serif text-lg tracking-widest uppercase  hover:text-pink-400 ">About</NavLink>
        <NavLink to="blogs" className="font-medium font-serif text-lg tracking-widest uppercase hover:text-pink-400 ">Blogs</NavLink>
        <NavLink to="users" className="font-medium font-serif text-lg tracking-widest uppercase hover:text-pink-400 ">Users</NavLink>
      
      </nav>
    </div>
    
</>
    
  )
  
}

export default Header;