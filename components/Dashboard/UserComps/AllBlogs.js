import React, { useEffect, useState } from 'react';
import useBlogs from '../../hooks/useBlogs';

const AllBlogs = () => {
  const [blogs, loading] = useBlogs();
  console.log(blogs);

  return (
    <div className="md:pt-[5rem] pt-3 w-full">
      <div className="card-body">
        <h2 className="card-title text-[#333]">All Blog</h2>
        <div className="">
          <input
            type="search"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary mx-2">Search</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Blog Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {blogs.map((blog) => {
              return (
                <tbody key={blog?._id}>
                  {/* <!-- row 1 --> */}
                  <tr>
                    <td>{blog?.title}</td>
                    <td>{blog?.author}</td>
                    <td>
                      <div className="badge badge-secondary">secondary</div>
                      <div className="badge badge-accent">accent</div>
                    </td>
                    <td>
                      <div>
                        <button className='btn btn-accent'>Edit</button>
                        <button className='btn btn-error mx-1'>Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

//{blogs?.map((blog) => {
//   return (
//     <div key={blog?._id}>
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           {/* <!-- head --> */}
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Favorite Color</th>
//             </tr>
//             <tr>
//               <td>{blog.title}</td>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <!-- row 1 --> */}
//             <tr>
//               <td>{blog?.title}</td>
//               <td>Quality Control Specialist</td>
//               <td>Blue</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// })}
