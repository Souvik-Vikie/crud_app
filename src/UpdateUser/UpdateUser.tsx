import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  saveUserChanges } from '../API/users';
import '../index.css';




const UpdateUser = ({editUserData,setEditUserData,setEditUser,setEdited,edited}:any) => {

      const initialErrors = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: ""
      };

      console.log("EditUserData",editUserData);
      
    const [details, setDetails] = useState(editUserData);
    const [errors, setErrors] = useState(initialErrors);
    
    console.log("Details Update",details);
    
    
  

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };
        if (!details.firstName) {
          newErrors.firstName = "First name is required";
          isValid = false;
        }
        if (!details.lastName) {
          newErrors.lastName = "Last name is required";
          isValid = false;
        }
        if (!details.phoneNumber) {
          newErrors.phoneNumber = "Phone number is required";
          isValid = false;
        }
        else if (!/^\d{10}$/.test(details.phoneNumber)) {
          newErrors.phoneNumber = "Phone number must be 10 digits long and consist of digits only";
          isValid = false;
        }
        if (!details.age) {
          newErrors.age = "Age is required";
          isValid = false;
        }
        setErrors(newErrors);
        return isValid;
      };
    




    const handleEditChange = (e: any) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setDetails({ ...details, [name]: value });
        console.log("EditData", details);
      }
    
      const handleSubmit = async (e:any) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
          }
        await saveUserChanges(details)
        setEditUser(false)
        setEdited(!edited)
      }


    const handleCancel = () => {
        setEditUser(false)
    }



    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-purple-600">
                        Update User
                    </h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-md font-medium text-gray-700 undefined"
                            >
                                First Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    className="block w-full text-sm mt-2 px-1 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleEditChange}
                                    value={details.firstName}
                                    required
                                />
                            </div>
                          <div style={{ color: "red" }}>{errors.firstName}</div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="lastName"
                                className="block text-md font-medium text-gray-700 undefined"
                            >
                                Last Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter Your First Name"
                                    className="block w-full text-sm mt-2 px-1 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleEditChange}
                                    value={details.lastName}
                                    required
                                />
                            </div>
                           <div style={{ color: "red" }}>{errors.lastName}</div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-md font-medium text-gray-700 undefined"
                            >
                                Phone Number
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    placeholder="Enter Your Phone Number"
                                    className="block w-full text-sm mt-2 px-1 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleEditChange}
                                    value={details.phoneNumber}
                                    required
                                />
                            </div>
                           <div style={{ color: "red" }}>{errors.phoneNumber}</div>

                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="age"
                                className="block text-md font-medium text-gray-700 undefined"
                            >
                                Age
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Enter Your Age"
                                    className="block w-full text-sm mt-2 px-1 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleEditChange}
                                    value={details.age}
                                    required
                                />
                            </div>
                          <div style={{ color: "red" }}>{errors.age}</div>

                        </div>

                        <div className="flex items-center mt-4">
                            <button className="w-4/12 px-4 py-2 mx-8 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                type="submit"
                            >
                                Save
                            </button>
                      
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-4/12 px-4 py-2 mx-8 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default UpdateUser;
