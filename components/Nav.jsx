'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, getProviders, useSession } from 'next-auth/react'
const Nav = () => {
    const [ providers, setProviders]= useState(null)
    const [toggleDropdown, setToggleDropDown] = useState(false);
    const {data : session} = useSession()
    
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders()
    })
    const handleToggleDropDown = () => {
        setToggleDropDown((prev) => !prev);
    };
    
    return (
        <nav className='flex-between w-full mb-16 pt-3'>

            {/* // logo on the left */}
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/logo.svg'
                    alt='S'
                    width={40}
                    height={40}
                    className='object-contain'
                    />
                <p className='logo_text'>Notes</p>
            </Link>

            {/* desktop view*/}
            <div className='sm:flex hidden'>
                {session?.user ?
                    <div className='flex gap-3 md:gap-5'>
                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>
                        <Link href={'/profile'}>
                            <Image src={session?.user.image} alt='profile' className='rounded-full' width={30} height={30} />
                        </Link>
                    </div>
                    :
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>

                        ))}
                    </>
                }
            </div>
            <div className='sm:hidden flex relative'>
                {session?.user?
                <div className='flex'>
                    <Image src={session?.user.image} alt='profile' width={30} height={30} className='rounded-full' onClick={handleToggleDropDown}/>

                    {toggleDropdown &&
                    <div className='dropdown'>
                        <Link href={'/'} className='dropdown_link' onClick={()=>setToggleDropDown(false)}>My Profile</Link>
                        <Link href={'/'} className='dropdown_link' 
                        onClick={()=>{
                            setToggleDropDown(false);
                        signOut();
                        }}>Sign Out</Link>
                    </div>}
                </div>
                :
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))}
                </>}
            </div>
        </nav>
    )
}

export default Nav
