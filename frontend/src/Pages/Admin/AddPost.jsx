import React, { useState } from 'react';
import { post } from '../../services/Endpoint';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const AddPost = () => {
  const user = useSelector((state) => state.auth.user); // Get user from Redux
  const [postData, setPostData] = useState({
    image: null,
    title: '',
    description: '',
    category: ''
  });

  const categories = [
    'Competitions',
    'Achievements',
    'Project',
    'Placement',
    'Product development',
    'Start-up'
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPostData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    setPostData(prevState => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleCategorySelect = (category) => {
    setPostData(prevState => ({
      ...prevState,
      category: category
    }));
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();
    data.append('title', postData.title);
    data.append('desc', postData.description);
    data.append('category', postData.category);
    if (postData.image) {
      data.append('postimage', postData.image); // Ensure field name matches Multer's expectation
    }

    console.log('User Token:', user?.token); // Debugging token before request

    try {
      const response = await post('blog/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${user?.token}`, // Sending token in header
        },
        withCredentials: true, 
      });

      if (response.data.success) {
        toast.success('Post created successfully');
        setPostData({ image: null, title: '', description: '', category: '' });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white">
              <h2 className="text-center mb-0">Add New Post</h2>
            </div>
            <div className="card-body p-4 bg-light">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                  <label htmlFor="category" className="form-label">Select Category</label>
                  <div className="dropdown">
                    <button 
                      className="btn btn-dark dropdown-toggle w-100" 
                      type="button"
                      id="category"
                      onClick={() => setShowDropdown(!showDropdown)}
                      aria-expanded={showDropdown}
                    >
                      {postData.category || 'Choose a category...'}
                    </button>
                    <ul className={`dropdown-menu w-100 ${showDropdown ? 'show' : ''}`}>
                      {categories.map((category) => (
                        <li key={category}>
                          <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCategorySelect(category);
                            }}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="image" className="form-label">Upload Image</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    id="image"
                    onChange={handleImageChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title"
                    value={postData.title}
                    onChange={handleInputChange}
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea 
                    className="form-control" 
                    id="description"
                    value={postData.description}
                    onChange={handleInputChange}
                    rows="8" 
                    placeholder="Write your post description here"
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-dark btn-lg"
                    disabled={!postData.category}
                  >
                    Submit Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
