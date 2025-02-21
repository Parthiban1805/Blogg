import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo3.png'

const Navbar = () => {
    
    const [isLogin, setIsLogin] = useState(true)

  return (
   <>
   <nav className="navbar d-flex justify-content-between   align-items-center p-3">
   <Link to={'/'} >
   <span style={{ display: 'flex', alignItems: 'center', gap: '8px',textDecoration: 'none' }}>
   <img className='img' src={logo} style={{ width: '80px', height: 'auto' }}  alt="" />
   <span style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>BIT</span>
   </span>
   </Link>
   <div className="d-flex align-items-center">

   {!isLogin ? <Link to={'/login'}><button className="btn_sign mx-3">Sign in</button></Link> :(
     <div className="dropdown">
     <div className="avatar-container pointer rounded-circle overflow-hidden bg-info" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px', cursor: "pointer" }}>

     <img className="img-fluid h-100 w-100 " style={{objectFit:"cover"}} src="https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?ga=GA1.1.749508214.1739944068&semt=ais_hybrid" alt="" />

     </div>
     <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
          
       <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li> 
       <li><Link className="dropdown-item" to={`/profile/1234`}>Profile</Link></li>
       <li><a className="dropdown-item "  style={{cursor:"pointer"}}>Sign Out</a></li>
         </ul>

      </div>
   ) }

  


   </div>
   </nav>
   
   </>
  )
}

export default Navbar
