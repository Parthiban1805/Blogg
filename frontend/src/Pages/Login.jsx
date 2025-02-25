import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { BaseUrl } from '../services/Endpoint'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { SetUser } from '../redux/AuthSlice'



const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [value,setValue]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
            try {
                e.preventDefault()
                const response=await axios.post(`${BaseUrl}/auth/login`,value,{
                    withCredentials: true
                  })
                const data =response.data
                if (response.status===200) {
                    navigate('/')
                    toast.success(data.message)
                    dispatch(SetUser(data.user))
                }
                else{
                    toast.error("User not found")
                }
                console.log(data)

            } catch (error) {
                console.log(error)
            }
    }
  return (
    <>
    <section className="login bg-light">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
            
               
                <Link to="/" style={{textDecoration:'none'}}> <span className="h4 mb-0 fw-bold" style={{color:'white',fontSize:'32px'}} >BIT</span></Link>
        
            <div className="card shadow-sm w-100" style={{ maxWidth: '400px', borderRadius: '10px' }}>
                <div className="card-body p-4">
                    <h1 className="h5 mb-4 fw-bold text-dark">Sign in to your account</h1>
                    <form  onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your email</label>
                            <input
                                type="email"
                                name='email'
                                value={value.email}
                                onChange={handleChange}
                                className="form-control"
                                id="email"
                                placeholder="name@company.com"
                                required
                               
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                value={value.password}
                                onChange={handleChange}                           
                                name='password'
                                className="form-control"
                                id="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            {/* Optional content can be added here */}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign in</button>
                    </form>
                    <p className="mt-3 mb-0 text-muted">
                        Don’t have an account yet? <Link to="/register" className="text-primary">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Login
