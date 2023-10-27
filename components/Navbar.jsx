'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
const Navbar = () => {

    const [dropDown, setdropDown] = useState(false);

    return (

        <nav className="bg-[#7d86ff] top-0 left-0 right-0 z-50 fixed shadow-2xl drop-shadow-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
                <Link href="/" className="flex items-center">
                    <Image src="/mpg.jpg" width={70} height={70} className="h-8 mr-3 object-cover" alt="MPG Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">MalaysianPayGap</span>
                </Link>
                <button  onClick= {() => setdropDown((prev) => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded={dropDown ? "true" : "false"}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${dropDown ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 rounded hover:text-blue-700 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">Overview</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 rounded hover:text-blue-700 md:p-0 hover:bg-gray-100 md:hover:bg-transparent">Job Satisfaction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar