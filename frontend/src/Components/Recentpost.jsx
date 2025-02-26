import React, { useEffect, useState } from "react";
import { BaseUrl, get } from "../services/Endpoint";

const Recentpost = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, []);

  // Effect to filter posts when category or posts change
  useEffect(() => {
    if (selectedCategory) {
      const filtered = posts.filter(
        (post) => post.category === selectedCategory
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const response = await get("/blog/getposts");
      const data = response.data;
      const sortedPosts = data.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
      setFilteredPosts(sortedPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
    "Competitions",
    "Achievements",
    "Project",
    "Placement",
    "Product development",
    "Start-up",
  ];

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-post-background">
    <div className="container-fluid">
      <div className="row">
        {/* Main Content Area */}
        <div className="col-md-9 order-2 order-md-1">
          <h2
            className="text-white text-center mb-5"
            style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "50px" }}
          >
            {selectedCategory ? `${selectedCategory} Posts` : "Recent Posts"}
            {selectedCategory && (
              <button
                className="btn btn-m btn-outline-primary ms-3"
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

          <div className="row">
            {filteredPosts.map((post, index) => {
              return (
                <div className="col-12 mb-4" key={post._id || index}>
                  <div
                    style={{
                      backgroundColor: "#2b2b2b",
                      border: "2px solid #198754",
                      borderRadius: "10px",
                      maxWidth: "800px",
                      overflow: "hidden",
                      margin: "0 auto",
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          padding: "10px",
                          fontSize: "1.7rem",
                          fontWeight: "bold",
                          marginBottom: "10px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        {post.title}
                      </h5>

                      <img
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "600px",
                          objectFit: "contain",
                        }}
                        src={`${BaseUrl}/images/${post.image}`}
                        alt={post.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/800x400?text=Image+Not+Available";
                        }}
                      />
                      <div
                        style={{
                          padding: "20px",
                          color: "white",
                          justifyContent: "center",
                        }}
                      >
                        <p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
                          {post.desc}
                        </p>

                        <div className="container mt-5 mb-5 text-white">
                          <form>
                            <div className="mb-3">
                              {/* <label htmlFor="comment" className="form-label">Comment</label> */}
                              <textarea
                                className="form-control bg-dark text-white"
                                id="comment"
                                rows="3"
                                placeholder="Write your comment here"
                                required
                              ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Submit Comment
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-3 order-1 order-md-2 mb-3 mb-md-0">
          <div
            style={{
              backgroundColor: "#2b2b2b",
              padding: "20px",
              borderRadius: "5px",
              marginTop: "120px",
            }}
          >
            <h3
              style={{ color: "white", fontSize: "2rem", marginBottom: "15px" }}
            >
              Labels
            </h3>

            <hr style={{ color: "white" }} />
            <div
              style={{
                display: "flex",
                fontSize: "1.2rem",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {categories.map((category, index) => (
                <p
                  key={index}
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontWeight:
                      selectedCategory === category ? "bold" : "normal",
                    textDecoration:
                      selectedCategory === category ? "underline" : "none",
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
    </div>
  );
};

export default Recentpost;
