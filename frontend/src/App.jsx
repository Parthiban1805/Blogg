import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import UserLayout from './Layout/UserLayout'
import AdminLayout from './Layout/AdminLayout'
import Dashboard from './Pages/Admin/Dashboard'
import AddPost from './Pages/Admin/AddPost'
import User from './Pages/Admin/User'
import AllPost from './Pages/Admin/AllPost'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Toaster />
    
      <Routes>
          <Route path='/' element={<UserLayout/>} >
          <Route index element={<Home />} />
          <Route path='post/:id' element={<Post />} ></Route>
          <Route path='profile/:id' element={<Profile />} ></Route>
          </Route>    
          <Route path='/dashboard' element={<AdminLayout/>} >
          <Route index element={<Dashboard/>} />        
          <Route path='addpost' element={<AddPost/>} />
          <Route path='users' element={<User/>} />
          <Route path='allpost' element={<AllPost/>} />
          </Route>      
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          
      </Routes>   
   </BrowserRouter>
   </>
  )
}

export default App
