import React from 'react'

const UserCard = ({user}) => {
  console.log(user);
  const {firstName,lastName,gender,age,photoURL,about,skills}=user;
  return (
    <div className="card bg-base-300 w-64  shadow-sm ">
  <figure>
    <img
      src={photoURL}
      alt="photo"
      className="w-32 h-32 object-cover rounded-xl mx-auto my-2"
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{age+" "+gender}</p>
    <p>{about}</p>
    <p>{skills+" "}</p>
    <div className="card-actions justify-center my-2">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>

    </div>
  </div>
</div>
  )
}

export default UserCard;
