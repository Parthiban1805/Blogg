import React from 'react'
import { FaCamera,FaUser,FaLock  } from "react-icons/fa";


const Profile = () => {
  return (
   <>
   <div className="profile-container">
      <h1 className="profile-title">Update Profile</h1>
      <form className="profile-form" >
        <div className="profile-image-section">
          <label htmlFor="profileImage" className="profile-image-label">
          
            
           
              <div className="profile-placeholder">
                
                <img src='' alt='Avatar'  className="profile-image" />
              </div>
            
            <FaCamera className="profile-camera-icon" />
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            // onChange={handleImageChange}
            className="profile-image-input"
          />
        </div>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Update Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Old Password"
            // value={oldPassword}
            // onChange={(e) => setOldPassword(e.target.value)}
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="New Password"
            // value={newPassword}
            // onChange={(e) => setNewPassword(e.target.value)}
            className="profile-input"
          />
        </div>

        <button type="submit" className="profile-button">Update Profile</button>
      </form>
    </div>
   
   
   
   
   </>
  )
}

export default Profile
