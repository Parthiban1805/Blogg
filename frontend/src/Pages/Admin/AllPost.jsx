import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const AllPost = () => {
  return (
 <>
 <div className="container">
  <h1 className='text-center mb-4 text-white'>All Posts</h1>
  <div className='row'>
      <div className='col-md-4 mb-4 col-lg-4 col-12'>
        <div className='card h-100'>
            <img src="https://img.freepik.com/premium-photo/mechanical-arm-circuit-core-3d-rendering-digital-drawing_1094261-4768.jpg?w=1380" alt="" />
            <div className='card-body'>
                <h5 className='card-title'>Quantum Robot</h5>
                <p className='card-text'>This is our first robot</p>
            </div>
            <div className='card-footer d-flex justify-content-between'>
              <button className='btn btn-danger'>
                  <FaTrashAlt />Delete
              </button>
              <button className='btn btn-warning'>
                  <FaTrashAlt />Update
              </button>
            </div>
        </div>
      </div>
  </div>
 </div>
 </>
  )
}

export default AllPost
