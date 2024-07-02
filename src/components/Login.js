import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateSignIn, validateSignUp } from '../utils/validate'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';


const Login = () => {
  const dispatch = useDispatch()
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleSignData = () => {
    let message;
    if (isSignIn === true) {
      message = validateSignIn(email.current.value, password.current.value);
    } else {
      message = validateSignUp(name.current.value, email.current.value, password.current.value)
    }

    if (message === "Name is not valid") {
      alert("Name must be start from capital letter")
    }
    if (message === "Password is not valid") {
      alert("Minimum eight characters, at least one letter, one number and one special character")
    }
    setErrorMessage(message)
    if (message) return


    if (!isSignIn) {
      //signUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
          }).catch((error) => {
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const ermsg = errorCode.toString().slice(5)
          setErrorMessage(ermsg)
        });
    }
  }

  const handleSign = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <img className='absolute sm:block hidden' src={BG_IMG} alt="bgimage" />
      <Header />
      <div className=''>
        <form onSubmit={(e) => e.preventDefault()} className='absolute text-white bg-black bg-opacity-85 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg w-[300px] '>
          <h1 className='p-2 text-2xl my-2 font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn
            &&
            <input
              className='w-full p-2 my-2 rounded bg-gray-500 placeholder-white '
              type="text"
              placeholder='Full Name'
              ref={name}
            />}

          <input
            className='w-full p-2 my-4 rounded bg-gray-500 placeholder-white '
            type="email"
            placeholder='Email Address'
            ref={email}
          />

          <input
            className='w-full p-2 my-4 rounded bg-gray-500 placeholder-white'
            type="password"
            placeholder='Password'
            ref={password}
          />
          <p className='font-bold text-red-700'>{errorMessage}</p>
          <button onClick={handleSignData} className='w-full p-2 my-4 bg-red-700 hover:bg-red-400 rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>


          <p onClick={handleSign} className='w-full p-2 my-2 cursor-pointer'>
            {
              isSignIn ? "New to Netflix? SignUp Now" : "Already Registered? SignIn Now"
            }
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
