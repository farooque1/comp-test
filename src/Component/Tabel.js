import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Tabel() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const jsonData = await response.json();
      setData(jsonData.users);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="container">
        <form class="row gy-2 gx-3 align-items-center py-3">
          <div class="col-7">
            <div class="input-group">
              <div class="input-group-text"> <i class="lni lni-user"></i></div>
              <input
                type="text"
                class="form-control"
                id="autoSizingInputGroup"
                placeholder="Search Name"
              />
            </div>
          </div>
          <div class="col-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text"> <i class="lni lni-agenda"></i></div>
              <input type="date" name="party" min="2017-04-01" max="2017-04-30"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-1">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div className="">
              <div class="input-group-text"><i class="lni lni-popup"></i></div>
            </div>
          </div>
          <div class="col-1">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div className="">
              <div class="input-group-text"><i class="lni lni-popup"></i></div>
            </div>
          </div>
        </form>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((user) => (
              <tr key={user.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Tabel;
