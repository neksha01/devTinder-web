import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_UrL } from '../utils/constants';
import { addfeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch=useDispatch();
  const feed=useSelector((store=>store.feed))

  const getFeed=async()=>{
if (feed && feed.length > 0) return;

try{
const res=await axios.get(BASE_UrL+"user/feed",{withCredentials:true});
dispatch(addfeed(res?.data));
}catch(err){
  console.log(err);
  
}
 }

 useEffect(()=>{
  getFeed();
},[])

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <h1 className=" flex justify-center m-52 text-3xl">No more users!!!!</h1>
    );
  return  (
   
 feed && ( <div className='flex flex-wrap justify-around gap-2.5 my-4 mx-4 pb-20 pt-16'>
  {
    feed.map((user)=>(
 <UserCard key={user._id} user={user}/>
    ))
  }
  
   </div>)
  )
}

export default Feed
