import React, { useEffect, useState } from 'react'
import { deleteUsers, getUserDetails } from '../API/users';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UpdateUser from '../UpdateUser/UpdateUser';



const UserDetails = () => {
  const [getUsers, setGetUsers] = useState([]);

  const [editID, setEditID] = useState<any>(null);
  const [deleted, setDeleted] = useState<boolean>(false)
  const [edited, setEdited] = useState<boolean>(false)
  const [editUser ,setEditUser] = useState<boolean>(false)
  const [editUserData, setEditUserData] = useState<any>({
    "_id": "",
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "age": "",
    "createdAt": "",
    "updatedAt": ""
  })

const navigate= useNavigate();
console.log("navigate",navigate);


  const handleEdit = (e: any, item: any) => {
    e.preventDefault();
    setEditID(item._id);
    const getData = {
      _id: item._id,
      firstName: item.firstName,
      lastName: item.lastName,
      phoneNumber: item.phoneNumber,
      age: item.age,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }
    setEditUserData(getData);
    setEditUser(true)
    console.log("edituserskkkkkkkkkkkkk",editUserData);
    
    
  }



  const handleDelete = async (item: any) => {
    await deleteUsers(item._id)
    setDeleted(!deleted);

  }

  const fetchuserdetails = async () => {
    let res =await getUserDetails()
     setGetUsers(res.data);
  }

  /////API Calls
  useEffect(() => {
    fetchuserdetails()
  }, [deleted, edited])

 const handlePush = () => {
  console.log("Hiii");
  navigate("./adduser");
}

  return (
    <div>
    {editUser ? <UpdateUser editUserData={editUserData} setEditUserData={setEditUserData} setEditUser={setEditUser} setEdited={setEdited} edited={edited}/> :

    <div className='flex flex-col items-center' >
      <div className='block text-3xl my-8 font-bold text-purple-600'>
        Welcome to iNeuron Dashboard
      </div>
      <table className="table-auto w-10/12 text-left">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th scope="col" className="px-4 py-2">
              First Name
            </th>
            <th scope="col" className="px-4 py-2">
              Last Name
            </th>
            <th scope="col" className="px-4 py-2">
              Phone Number
            </th>
            <th scope="col" className="px-4 py-2">
              Age
            </th>
            <th scope="col" className="px-4 py-2">
              Created At
            </th>
            <th scope="col" className="px-4 py-2">
              Updated At
            </th>
            <th scope="col" className="px-4 py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {getUsers.map((item: any) => {
            return (<>
              
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">
                    {item.firstName}
                  </td>
                  <td className="border px-4 py-2">
                    {item.lastName}
                  </td>
                  <td className="border px-4 py-2">
                    {item.phoneNumber}
                  </td>
                  <td className="border px-4 py-2">
                    {item.age}
                  </td>
                  <td className="border px-4 py-2">
                    {item.createdAt}
                  </td>
                  <td className="border px-4 py-2">
                    {item.updatedAt}
                  </td>
                  <td >
                    <button className='mx-2' onClick={(e) => handleEdit(e, item)} style={{ marginRight: "10px" }}><FontAwesomeIcon icon={faPen} /></button>
                    <button className='mx-2' onClick={() => handleDelete(item)}><FontAwesomeIcon icon={faTrash} />
                    </button>

                  </td>

                </tr>
            </>
            )
          })}
        </tbody>
      </table>
      <div>
        <button className="w-full mt-6 px-4 py-2  tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          type="submit"
          onClick={handlePush}
          
        >Add User
        </button>
      </div>
    </div>}
    </div>
  )
}

export default UserDetails;

