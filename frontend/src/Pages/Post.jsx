import React from 'react'

const Post = () => {
  return (
   <>
        <div className="container mt-5 mb-5 text-white">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='fw-bold text-white mb-4 display-4' >Qunatum Robot</h1>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o7Vc2xEAJEZIK1xEghND3GdcQtbsg7vd_Q&s" 
                        alt="Exploring the Art of Writing" 
                        className="img-fluid mb-4" 
                        style={{ borderRadius: "10px", maxHeight: "500px", objectFit: "cover", width: "100%" }}
                    />
                     <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste ab rem dicta sed incidunt fugiat suscipit adipisci exercitationem laborum architecto, deserunt aliquam hic ipsum, recusandae quibusdam error minus consequatur.</p>
                     <hr />
                     <h3 className="mt-5 mb-4">Leave a Comment</h3>
                     <form>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" rows="4" placeholder="Write your comment here" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" o>Submit Comment</button>
          </form>
          <hr />
          <h3 className="mt-5 mb-4">Comments</h3>
          <div className="bg-secondary p-3 rounded mb-3 d-flex">
            <img 
             src="https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?ga=GA1.1.749508214.1739944068&semt=ais_hybrid"
              alt="John Doe" 
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-1">Sabarevijay</h5>
              <p className="mb-0">Amazing</p>
            </div>
          </div>


                </div>
            </div>
        </div>   
   </>
  )
}

export default Post
