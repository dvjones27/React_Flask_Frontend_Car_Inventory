import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
import { signInWithPopup, signOut,  } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import Background from '../assets/images/peter-broomfield-m3m-lnR90uM-unsplash.jpg'

function Navbar() {
  const [isVisible, setIsVisible] =useState(false);


  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
  }

  
  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, 
        Providers.google, );
        if ( response.user ) {
            location.reload();
        }
  }

const dropDown = () => {
  setIsVisible(!isVisible)
}

const clicked = () => {
  setIsVisible(false)
}


  
  return (
    <nav 
    style={{ backgroundImage: `url(${Background})`}} 
    className ="flex items-center  justify-between flex-wrap bg-gray-900 bg-center bg-contain  p-4"> 
    <div className="flex items-center flex-shrink-0 text-white m-4">
        <Link to='/' className="font-semibold text-xl tracking-tight">Home</Link>
    </div>
    <div className="block">
        
        <Button 
        onClick={dropDown}
        className="flex  items-center px-3 py-2 text-semibold text-white-700 border rounded bg-gray-400 border-white-300 text-gray-900 hover:font-bold hover:text-red hover:border-red">
            <i className="fa-regular fa-car" ></i>
        </Button>
        
    </div>
      { isVisible ? ( 
            <div className="w-full block flex-grow items-center ">
                <div className="text-sm lg:flex-grow">
                    <Button className="p-3 m-5  justify-center ">
                        <div>
                            <Link to='/' onClick={ clicked } className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold fa-xl
                            text-gray-900 hover:font-bold hover:text-black'>
                                {/* Home */}
                                <i className="fa-regular fa-md fa-house"></i>
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5  justify-center ">
                        <div>
                            <Link to='/about' onClick={ clicked } className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold fa-xl
                            text-gray-900 hover:font-bold hover:text-black'>
                                {/* About */}
                                <i className="fa-regular fa-circle-info"></i>
                            </Link>
                        </div>
                    </Button>
                    {/* <Button className="p-3 m-5  justify-center">
                        <div>
                            <Link to='/profile' onClick={ clicked } className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold
                            text-gray-900 hover:font-bold hover:text-black'>
                                Profile
                            </Link>
                        </div>
                    </Button> */}
                    <Button className="p-3 m-5  justify-center ">
                        <div>
                            <Link to='/dashboard' onClick={ clicked } className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold fa-xl
                            text-gray-900 hover:font-bold hover:text-black'>
                                {/* Dashboard */}
                                <i className="fa-regular fa-md fa-table-columns"></i>
                                {/* <GoogleButton /> */}
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?

                        <Button className="p-3 m-5  justify-center ">
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} 
                        
                                className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold fa-xl
                                text-gray-900 hover:font-bold hover:text-black'>
                                    {/* Login */}
                                    <i className="fa-solid fa-md fa-person-circle-check"></i>
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className="p-3 m-5  justify-center">
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick()}} 
                                className='flex place-items-center text-center m-1 lg:inline-block lg:mt-0 text-semibold fa-xl
                                text-gray-900 hover:font-bold hover:text-black'>
                                    {/* Log Out */}
                                    <i className="fa-solid fa-person-circle-xmark"></i>
                                </Link>
                            </div>
                        </Button>
                     
                    }
                    
      
                  </div>
                </div>
                ) : ( 
            <></>
        )}
      
    </nav>
  )
}

export default Navbar

