import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.int';
import google from '../../../images/social/download.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement;
  if (error || error1) {
    errorElement =  <div>
        <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      </div>
  }

  if(user || user1){
    navigate('/home')
  }
    return (
        <div >
           <div className='d-flex align-items-center'>
           <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
           </div>
           <div>
                {errorElement}
               <button onClick={()=>{signInWithGoogle()}} className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={google} alt="" />
                  <span className='px-2'> Google Sign In</span>
                   </button>

               <button onClick={() =>{signInWithGithub()}} className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={facebook} alt="" />
                   <span className='px-2'>Facebook Sign In</span>
                   </button>
               <button onClick={()=>{signInWithGoogle()}} className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={github} alt="" />
                   <span className='px-2'>Github Sign In</span>
                   </button>
           </div>
        </div>
    );
};

export default SocialLogin;