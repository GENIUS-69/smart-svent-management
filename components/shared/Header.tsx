import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className='w-36'>
                    <Image src="./assets/images/logo.svg" alt='logo' width={138} height={38} />
                </Link>
                /*22:36 */
            </div>
        </header>
    )
}

export default Header
