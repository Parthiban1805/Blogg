import React, { useEffect, useState } from 'react';
import { get } from '../services/Endpoint';

const Recentpost = () => {
    const [post, setPost] = useState([])
  
    useEffect(()=>{
       getpost()
    },[])

    const getpost=async()=>{
        try {
            const response=await get('/blog/getposts')
            const data = response.data
            setPost(data.posts)
            console.log(data.posts)
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
    <div style={{ display: 'flex' }}>
      {/* Main Content Area */}
      <div style={{ flex: '2', padding: '10px' }}>
        <h2 className="text-white text-center mb-5" style={{ fontSize: '2rem', fontWeight: 'bold',marginTop:'50px' }}></h2>
        
        <div style={{ 
          backgroundColor: '#2b2b2b',
          border: '2px solid #198754',
          borderRadius: '10px',
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
               <div>
                <h5  style={{ padding: '10px', fontSize: '1.7rem',fontWeight: 'bold',marginBottom: '10px',color: 'white',textAlign:'center'}}>Quantum Robot</h5>
                <img 
                  style={{ 
                    width: '100%',
                    height: '20%',
                    // objectFit: 'cover'
                  }}  
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjbgPiQ1MJCgA_HUzAvWUNr7SBL9BnnoJmGnB2tdVq3Qs0lVd-oTrCty09NOyFUYS6761X23VOkV5mem3s0QCOzXcn_7659z_6Ajd_kBJKd3feeKFN2YHBG8b8TssluYUhpcF0z5X6ct73DiHsIigdfo6vl9NRmmu_X1x3cAYl0AP8b77dzjeM9FUppImo=w464-h464" 
                />
                <div style={{ padding: '20px', color: 'white' }}>
                 
                  <p style={{ marginBottom: '20px',fontSize: '1.2rem' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste ab rem dicta sed incidunt fugiat suscipit adipisci exercitationem laborum architecto, deserunt aliquam hic ipsum, recusandae quibusdam error minus consequatur.</p>
                
                  <div className="container mt-5 mb-5 text-white">
          <h3 className="mt-5 mb-4">Leave a Comment</h3>
                           <form>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className="form-control bg-dark text-white" id="comment" rows="3" placeholder="Write your comment here" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" >Submit Comment</button>
                </form>
                <hr />
                <h3 className="mt-3 mb-4">Comments</h3>
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
                <hr style={{ color: 'white' }} />
                </div>
                
        </div>
        <br />




        <div style={{ 
          backgroundColor: '#2b2b2b',
          border: '2px solid #198754',
          borderRadius: '10px',
          overflow: 'hidden',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
               <div>
                <h5  style={{ padding: '10px', fontSize: '1.7rem',fontWeight: 'bold',marginBottom: '10px',color: 'white',textAlign:'center'}}>Quantum Robot</h5>
                <img 
                  style={{ 
                    width: '80%',
                    height: '80%',
                    // objectFit: 'cover'
                  }}  
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjs_cZJNQN0c8t3yhvWvOdICJFaq3-b4pw1XbU46CbuEveSseqO8qS88XxP_wHV2GwJEJ3lCnf4OB7NueaXzz3CYwn70GGVfHMlxR3LWCgm1nfajdea8_PEbHptCizN_INhnNtNenR7c4yZegbSJ4hwFNNYLJ94fBqUUBe_ds-xNaVEAyoMaBY3wOVs7uk=w447-h443" 
                />
                <div style={{ padding: '20px', color: 'white' }}>
                 
                  <p style={{ marginBottom: '20px',fontSize: '1.2rem' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste ab rem dicta sed incidunt fugiat suscipit adipisci exercitationem laborum architecto, deserunt aliquam hic ipsum, recusandae quibusdam error minus consequatur.</p>
                
                  <div className="container mt-5 mb-5 text-white">
          <h5 className="mt-5 mb-4" >Leave a Comment</h5>
                           <form>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className="form-control bg-dark text-white" id="comment" rows="3" placeholder="Write your comment here" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" >Submit Comment</button>
                </form>
                <hr />
                <h3 className="mt-3 mb-4">Comments</h3>
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
                <hr style={{ color: 'white' }} />
                </div>
                
        </div>
        
      </div>

      {/* Sidebar */}
      <div style={{ flex: '0.5', padding: '20px', marginTop: '120px'  }}>
        <div style={{ backgroundColor: '#2b2b2b', padding: '20px', borderRadius: '5px' }}>
          <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '15px' }}>Labels</h3>
          <hr style={{ color: 'white' }} />
          <div style={{ display: 'flex',fontSize: '1.2rem', flexDirection: 'column', gap: '15px' }}>
            <p style={{ color: 'white', cursor: 'pointer' }}>Competitions</p>
            <p style={{ color: 'white', cursor: 'pointer' }}>Achievements</p>
            <p style={{ color: 'white', cursor: 'pointer' }}>Project</p>
            <p style={{ color: 'white', cursor: 'pointer' }}>Placement</p>
            <p style={{ color: 'white', cursor: 'pointer' }}>Product development</p>
            <p style={{ color: 'white', cursor: 'pointer' }}>Start-up</p>
          </div>
        </div>
      </div>

    
      
    </div>
    
    </div>
    
  );
};

export default Recentpost;