import React from 'react'

const UserCard = ({user}) => {

    const {firstname, lastname, id, skills, about, photourl } = user;
    if(user)
    console.log(user)
  return (
    <div>
        <div className="card bg-base-300 w-96 shadow-sm">
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
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Accept Invitation</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard