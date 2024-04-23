'use client'

import Link from "next/link";
import {FiAlignJustify} from "react-icons/fi";
import {useState} from "react";
import MobileSidebar from "@/app/components/Nav/MobileSidebar";

export default function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    function toggleSidebarOpen() {
        setIsSidebarOpen(!isSidebarOpen)
    }

    function closeSidebar() {
        setIsSidebarOpen(false)
    }

    return (
        <nav>
            <MobileSidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
            <ul className='flex gap-2 sm:justify-between justify-center bg-orange-400 fixed w-full py-2 px-8'>
                <li>
                    <Link href='/' className='text-orange-800 hover:underline font-orbitron font-bold text-2xl'>Indie
                        Gamer</Link>
                </li>
                <div className='sm:flex gap-4 hidden'>
                    <li><Link href='/reviews' className='text-orange-800 hover:underline font-semibold'>Reviews</Link>
                    </li>
                    <li><Link href='/about' className='text-orange-800 hover:underline font-semibold'>About</Link></li>
                </div>
                <div onClick={toggleSidebarOpen}
                    className='sm:hidden absolute left-2 p-1 self-center rounded hover:scale-110 transition duration-100'>
                    <FiAlignJustify className='w-6 h-6 opacity-50'/>
                </div>
            </ul>
        </nav>
    );
}