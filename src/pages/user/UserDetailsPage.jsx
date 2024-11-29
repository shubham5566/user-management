import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../features/userSlice";

function UserDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  const user = users.find((user) => user.id === parseInt(id));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p className="text-center text-blue-500 font-medium">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!user) {
    return <p className="text-center text-gray-500">User not found</p>;
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 md:text-4xl">
        User Details
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
          {user.name}
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Email:</strong> {user.email}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Phone:</strong> {user.phone}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Website:</strong> {user.website}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Company:</strong> {user.company.name}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Address:</strong> {`${user.address.street}, ${user.address.city}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPage;