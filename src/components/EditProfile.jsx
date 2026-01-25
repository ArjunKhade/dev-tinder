import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({user}) => {

   const [firstname, setFirstName]= useState( user.firstname);
   const [lastname, setLastName]= useState( user.lastname);
   const [about, setAbout]= useState(user.about);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleEdit = () => {
      
   }
  return user && (
    <div>
        <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 shadow-lg w-96 rounded-lg overflow-hidden">
        <div className="card-body p-6">
          <h2 className="card-title text-center text-2xl font-bold mb-4">Edit profile</h2>
          <label>
            <span className="text-sm font-medium">FirstName</span>
            <input
              type="text"
              placeholder=""
              value={firstname}
              onChange={(e)=> setFirstName(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <label className="mt-4">
            <span className="text-sm font-medium">LastName</span>
            <input
              type="text"
              placeholder=""
              value={lastname}
              onChange={(e)=> setLastName(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <label className="mt-4">
            <span className="text-sm font-medium">About</span>
            <input
              type="text"
              placeholder=""
              value={about}
              onChange={(e)=> setAbout(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <button onClick={handleEdit} className="btn btn-primary w-full mt-6">Save</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditProfile