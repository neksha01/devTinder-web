import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_UrL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionsSlice';

const Connections = () => {
  const connections=useSelector(store=>store.connection);
  console.log(connections);
  
  const dispatch=useDispatch();

  const fetchConnections=async()=>{
    try{
      const connections=await axios.get(BASE_UrL+"user/connections",{withCredentials:true});    
      dispatch(addConnection(connections.data.data));
    }catch(err){
      console.log(err.message); 
    }
  }
  
  useEffect(() => {
    fetchConnections();
  }, []);

  if(!connections)return;
  if(connections.length===0)
    return(
  <>
  <h1 className="text-center text-2xl my-10 text-green-300">
    No Connections Found
    </h1>
  </>
  )

  return (
    <div className='text-center my-10'>
     <h1 className='font-bold text-3xl text-blue-300'>Connections ({connections.length})</h1>
    {
      connections.map((connection)=>{
        const{_id,firstName,lastName,photoURL, age, gender, about}=connection;
        return(
          <div key={_id} className='flex items-center m-2 p-2 rounded-lg bg-base-300 w-1/2 mx-auto'>
            <div>
              <img
              alt="photo"
              src={photoURL}
              className='w-20 h-20 rounded-full object-contain'/>              
            </div>
            <div className='text-left m-4 p-4'>
              <h2 className='font-bold text-xl'>{firstName+" "+lastName}</h2>
               {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        )
      })
    }

    </div>
  )
}

export default Connections
