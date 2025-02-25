import React, { useEffect, useState } from 'react';
import { BaseUrl, get } from '../services/Endpoint';

const Recentpost = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    useEffect(() => {
       getAllPosts();
    }, []);

    // Effect to filter posts when category or posts change
    useEffect(() => {
        if (selectedCategory) {
            const filtered = posts.filter(post => post.category === selectedCategory);
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);
        }
    }, [selectedCategory, posts]);

    const getAllPosts = async () => {
        try {
            const response = await get('/blog/getposts');
            const data = response.data;
            const sortedPosts = data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedPosts);
            setFilteredPosts(sortedPosts);
            // console.log(data.posts);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // This will trigger the useEffect to filter the posts
    };

    const clearCategoryFilter = () => {
        setSelectedCategory(null);
        // This will reset to show all posts
    };

    // Categories array
    const categories = [
        'Competitions',
        'Achievements',
        'Project',
        'Placement',
        'Product development',
        'Start-up'
    ];

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {/* Main Content Area */}
                <div style={{ flex: '2', padding: '10px' }}>
                    <h2 className="text-white text-center mb-5" style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '50px' }}>
                        {selectedCategory ? `${selectedCategory} Posts` : 'Recent Posts'}
                        {selectedCategory && (
                            <button 
                                className="btn btn-m btn-outline-primary ms-5" 
                                onClick={clearCategoryFilter}
                            >
                                Show All
                            </button>
                        )}
                    </h2>

                    {filteredPosts.length === 0 && (
                        <div className="text-white text-center">
                            <h3>No posts found in this category</h3>
                        </div>
                    )}

                    {filteredPosts.map((post, index) => {
                        return (
                            <div key={post._id || index} style={{ 
                                backgroundColor: '#2b2b2b',
                                border: '2px solid #198754',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                maxWidth: '800px',
                                margin: '0 auto',
                                marginTop: '50px'
                            }}>
                                <div>
                                    <h5 style={{ padding: '10px', fontSize: '1.7rem', fontWeight: 'bold', marginBottom: '10px', color: 'white', textAlign: 'center' }}>
                                        {post.title}
                                    </h5>
                                    {post.category && (
                                        <div className="text-center mb-2">
                                            <span className="badge bg-primary"></span>
                                        </div>
                                    )}
                                    <img 
                                        style={{ 
                                            width: '100%',
                                            height: '20%',
                                        }}  
                                        src={`${BaseUrl}/images/${post.image}`}
                                        alt={post.title}
                                    />
                                    <div style={{ padding: '20px', color: 'white' }}>
                                        <p style={{ marginBottom: '20px', fontSize: '1.2rem' }}>{post.desc}</p>
                                    
                                        <div className="container mt-5 mb-5 text-white">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="comment" className="form-label">Comment</label>
                                                    <textarea className="form-control bg-dark text-white" id="comment" rows="3" placeholder="Write your comment here" required></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit Comment</button>
                                            </form>
                                            {/* <hr />
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
                                            </div> */}
                                        </div>  
                                    </div>
                                </div>
                                <br />  
                            </div>
                        );
                    })}
                </div>

                {/* Sidebar */}
                <div style={{ flex: '0.5', padding: '20px', marginTop: '120px' }}>
                    <div style={{ backgroundColor: '#2b2b2b', padding: '20px', borderRadius: '5px' }}>
                        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '15px' }}>Labels</h3>
                        
                        <hr style={{ color: 'white' }} />
                        <div style={{ display: 'flex', fontSize: '1.2rem', flexDirection: 'column', gap: '15px' }}>
                            {categories.map((category, index) => (
                                <p 
                                    key={index}
                                    style={{ 
                                        color: 'white', 
                                        cursor: 'pointer',
                                        fontWeight: selectedCategory === category ? 'bold' : 'normal',
                                        textDecoration: selectedCategory === category ? 'underline' : 'none'
                                    }}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recentpost;