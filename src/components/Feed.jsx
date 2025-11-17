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
  return  (
   
 feed && ( <div className='flex justify-center my-4'>
   <UserCard user={feed[0]}/>
   </div>)
  )
}

export default Feed
