import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [
        {
            "title": "Home",
            "path": "home"
        },
        {
            "title": "about",
            "path": "about"
        },
        {
            "title": "projects",
            "path": "projects"
        },
        {
            "title": "skills",
            "path": "skills"
        },
    ]



    return (
        <nav>
            <ul className=' fixed top-0 w-full py-4 justify-end px-12 flex gap-10 capitalize bg-blue-400 '>
                {
                    menu.map((elem, index) => {
                        return (
                            <Link key={index} href={`#${elem.path}`} className={` font-bold text-white menu-items `}>
                                <li>
                                    {elem.title}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar