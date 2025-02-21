import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const User = () => {

  const users = [
    { id: 1, name: 'Vignesh', email: 'vignesh@example.com' },
    { id: 2, name: 'Surya', email: 'surya@example.com' },
    { id: 3, name: 'Vijay', email: 'vijay@example.com' },
    
  ];


  // const handleDelete = async (userId) => {
  //   // Display a confirmation dialog
  //   const confirmed = window.confirm('Are you sure you want to delete this user?');
  
  //   if (confirmed) {
  //     try {
  //       const response = await delet(`/dashboard/delete/${userId}`);
  //       const data = response.data;
  
  //       if (data.success) {
  //         toast.success(data.message);
  //         setLoadedata(!loadedata); // Trigger reloading the data
  //       } else {
  //         toast.error('Failed to delete the user.');
  //       }
  //     } catch (error) {
  //       console.error('Error deleting user:', error);
   
  //       if (error.response && error.response.data && error.response.data.message) {
  //           // setError(error.response.data.message); // Set error message from server response
  //           toast.error(error.response.data.message)
  //       } else {
  //           toast.error("An unexpected error occurred. Please try again.");
  //       }
  //     }
  //   }
  // };
  return (
    <div className="container ">
    <h1 className=" text-white mb-4">Users</h1>
    <div className="table-responsive">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr >
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete}
                >
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))}

          {/* {Users && Users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.FullName}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default User
