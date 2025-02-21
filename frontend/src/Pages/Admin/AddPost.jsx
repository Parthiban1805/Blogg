import React, { useState } from 'react';

const AddPost = () => {
  // Form data state
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    category: ''
  });

  // Categories array
  const categories = [
    
    'Competitions',
    'Achievements',
    'Project',
    'Placement',
    'Product development',
    'Start-up'
  ];

  // Category dropdown state
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [id]: value
  //   }));
  // };

  // const handleImageChange = (e) => {
  //   setFormData(prevState => ({
  //     ...prevState,
  //     image: e.target.files[0]
  //   }));
  // };

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  //   setFormData(prevState => ({
  //     ...prevState,
  //     category: category
  //   }));
  //   setShowDropdown(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the form submission
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
                      onClick={() => setShowDropdown(!showDropdown)}
                      aria-expanded={showDropdown}
                    >
                      {formData.category || 'Choose a category...'}
                    </button>
                    <ul className={`dropdown-menu w-100 ${showDropdown ? 'show' : ''}`}>
                      {categories.map((category) => (
                        <li key={category}>
                          <a 
                            className="dropdown-item" 
                            href="#"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleCategorySelect(category);
                            // }}
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
                    // onChange={handleImageChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title"
                    // value={formData.title}
                    // onChange={handleInputChange}
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea 
                    className="form-control" 
                    id="description"
                    // value={formData.description}
                    // onChange={handleInputChange}
                    rows="8" 
                    placeholder="Write your post description here"
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-dark btn-lg"
                    disabled={!formData.category} // Disable if no category selected
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