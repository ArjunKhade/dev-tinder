import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../store/feedSlice';

const UserCard = ({user}) => {

  const dispatch = useDispatch();

   const handleAcceptRequest = () => {
    dispatch(removeUserFromFeed(id))
   }


    const {firstname, lastname, id, skills, about, photourl } = user;
    if(user)
    console.log(user)
  return user && (
    <div>
        <div className="card bg-base-200 w-96 shadow-sm">
  <figure>
    <img
      src={user && photourl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstname+ " "+ lastname}</h2>
    <p>{about}</p>
    <p>{skills.join(",")}</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleAcceptRequest}>Ignore</button>
      <button className="btn btn-secondary" onClick={handleAcceptRequest} >Accept Invitation</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard