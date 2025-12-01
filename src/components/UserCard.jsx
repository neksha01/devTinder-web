import React from 'react'
import { BASE_UrL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserfromfeed } from '../utils/feedSlice';
import axios from "axios";


const UserCard = ({user}) => {
  console.log(user);
  const {_id,firstName,lastName,gender,age,photoURL,about,skills}=user;
  const dispatch=useDispatch();
  const handleSendRequest=async(status,userId)=>{
    try{
      const res=await axios.post(BASE_UrL+"send/"+status+"/"+userId,{},{
          withCredentials: true,
        })
        dispatch(removeUserfromfeed(userId));
    }catch(err){
      console.log(err.message);
      
    }
  }
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
      <button className="btn btn-accent" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>

    </div>
  </div>
</div>
  )
}

export default UserCard;
