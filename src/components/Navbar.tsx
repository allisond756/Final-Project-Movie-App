import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); 

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-emerald-950 p-6'>
            <div className='flex items-center flex-shrink-0 text-emerald-200 mr-6'>
                <Link to='/' className='font-semibold text-2xl tracking-wide'>
                    MovieWatch
                    <i className="fa-solid fa-video"></i>
                
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-emerald-200 border rounded border-emerald-200 hover:text-white hover:border-white'>
                    
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow ms-auto w-fit mr-16">
                    <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center lg:inline-block lg:mt-0
                             text-emerald-950 font-semibold hover:text-white'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center lg:inline-block lg:mt-0
                             text-emerald-950 font-semibold hover:text-white'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                        <div>
                            <Link to='/movies' onClick={ clicked} className='flex place-itmes-center lg:inline-block lg:mt-0
                             text-emerald-950 font-semibold hover:text-white'>
                                Browse Movies
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                        <div>
                            <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center lg:inline-block lg:mt-0
                             text-emerald-950 font-semibold hover:text-white'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {
                            !isAuthenticated ? 
                            <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-itmes-center lg:inline-block lg:mt-0
                                    text-emerald-950 font-semibold hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-2 bg-emerald-200 rounded-lg justify-center shadow shadow-emerald-500'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-itmes-center lg:inline-block lg:mt-0
                                    text-emerald-950 font-semibold hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar