import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <section className="register bg-light">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
          <a href="#" className="mb-4 text-dark text-decoration-none d-flex align-items-center">
            <img className="me-2" src="" alt="logo" width="32" height="32" />
            <Link to={'/'} style={{textDecoration:'none'}}> <span className="h4 mb-0 fw-bold" style={{color:'white',fontSize:'32px'}}>BIT</span></Link> 
          </a>
          <div className="card shadow-sm w-100" style={{ maxWidth: '400px',borderRadius: '10px' }}>
            <div className="card-body p-4">
              <h1 className="h5  fw-bold text-dark">Create an account</h1>
              <form >
                <div className=" text-center">
                  <label htmlFor="image" className="form-label">Profile Picture</label>
                  <div className="d-flex justify-content-center ">
                    <img 
                      src='https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?ga=GA1.1.749508214.1739944068&semt=ais_hybrid'
                      alt="avatar" 
                      className="rounded-circle" 
                      width="100" 
                      height="100"
                      style={{ cursor: 'pointer',objectFit:"cover" }}
                      // onClick={handleImageClick} // Click event to trigger file input
                    />
                  </div>
                  <input 
                    type="file" 
                    className="form-control d-none" // Hide the file input
                    id="image" 
                    accept="image/*" 
                    // onChange={handleImageChange} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="fullName" 
                    placeholder="John Doe" 
                    required 
                    // value={value.fullName} 
                    // onChange={(e) => setValue({ ...value, fullName: e.target.value })} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="name@company.com" 
                    required 
                    // value={value.email} 
                    // onChange={(e) => setValue({ ...value, email: e.target.value })} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="••••••••" 
                    required 
                    // value={value.password} 
                    // onChange={(e) => setValue({ ...value, password: e.target.value })} 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
              </form>
              <p className="mt-3 mb-0 text-muted">
                Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
