import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)


  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }


  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in
        const { uid, displayName, email } = user
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
        navigate("/browse")
      } else {
        //sign out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=>unsubscribe()
  }, [])

  return (
    <div className='flex items-center z-[2] bg-black sm:bg-transparent justify-between absolute w-full sm:bg-gradient-to-b sm:from-black '>
      <img className='w-36 ' src={LOGO} alt="logo" />
      {
        user && <button onClick={handleSignOut} className='font-bold bg-red-700 hover:bg-red-400 text-white rounded py-1 px-2 mr-5 cursor-pointer'>Sign Out</button>
      }
    </div>
  )
}

export default Header
