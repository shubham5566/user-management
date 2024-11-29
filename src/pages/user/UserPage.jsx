import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/userSlice";
import { Link } from "react-router-dom";

function UserPage() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  // Filter users based on search query (search by name or email)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        User List
      </h1>
      <div className="flex justify-between mb-6">
        {/* Search Box */}
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-lg shadow-sm w-full"
          />
        </div>

        {/* Add New User Button */}
        <div>
          <Link to="/add-user">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Add New User
            </button>
          </Link>
        </div>
      </div>

      {status === "loading" && (
        <p className="text-center text-blue-500 font-medium">Loading...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-500 font-semibold">
          Error: {error}
        </p>
      )}
      {status === "succeeded" && filteredUsers.length === 0 && (
        <p className="text-center text-gray-500">No users found</p>
      )}
      {status === "succeeded" && filteredUsers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </h2>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPage;