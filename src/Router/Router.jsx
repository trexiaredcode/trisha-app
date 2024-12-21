import {Route, Routes} from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Blogs from '../Pages/Blogs'
import HomePages from '../Pages/HomePages'
import Content from '../Pages/Content'
import Users from '../Pages/Users'
const Router = () => {
  return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePages />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="about" element={<Content/>} />/
                <Route path="users" element={<Users/>} />



            </Route>
        </Routes>

  )
}

export default Router