import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUser } from "../../features/userSlice";

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
    website: Yup.string()
      .required("Website is required")
      .url("Invalid URL"),
    companyName: Yup.string()
      .required("Company name is required")
      .min(2, "Company name must be at least 2 characters"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      website: "",
      companyName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newUser = {
        id: Date.now(),
        name: values.name,
        email: values.email,
        address: { street: values.address },
        phone: values.phone,
        website: values.website,
        company: { name: values.companyName },
      };

      dispatch(addUser(newUser));
      console.log(newUser);
      navigate("/");
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        Add New User
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Website</label>
            <input
              type="text"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.website && formik.errors.website
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.website && formik.errors.website && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.website}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-3 w-full border rounded-lg shadow-sm mt-1 ${
                formik.touched.companyName && formik.errors.companyName
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.companyName}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
