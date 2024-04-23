'use client'

import {FC, useState} from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

import {SidebarPath} from "@/app/content/constants";


interface SidebarItem extends SidebarPath {
    index: number,
    closeSidebar: () => void
}

const parentVariants = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const childVariants = {
    initial: {y: '-100%', opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: '-100%', opacity: 0},
};

const MobileSidebarItem: FC<SidebarItem> = ({closeSidebar, ...path}: SidebarItem) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    function toggleSubmenu() {
        if (path.hasSubItems && path.openMenuIcon) {
            setIsSubmenuOpen(!isSubmenuOpen)
        }
    }

    return (
        <div
            className='flex flex-col justify-between align-middle hover:bg-gray-600 p-4 transition duration-200'>

            <div className='flex justify-between'>
                <Link href={path.path}
                      className='text-white hover:text-orange-500'
                      onClick={closeSidebar}>
                    {path.pathName}
                </Link>

                {(isSubmenuOpen && path.openMenuIcon) ?
                    <path.openMenuIcon onClick={toggleSubmenu}
                                       className='text-white hover:scale-110 text-2xl cursor-pointer'/> :
                    <path.icon onClick={toggleSubmenu}
                               className={`text-white text-2xl ${path.hasSubItems && 'hover:scale-110 cursor-pointer'}`}/>}

            </div>
            {
                (path.hasSubItems && isSubmenuOpen) && (
                    <div className='overflow-hidden'>
                        <motion.div
                            className='flex flex-col gap-2 pt-4'
                            variants={parentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {path.subItems?.map(
                                (subPath, subIndex) => (
                                    <motion.div
                                        key={subIndex}
                                        variants={childVariants}
                                    >
                                        <Link
                                            href={subPath.path}
                                            className='text-white hover:text-orange-500 pl-4'
                                            onClick={closeSidebar}
                                        >
                                            {subPath.pathName}
                                        </Link>
                                    </motion.div>
                                )
                            )}
                        </motion.div>
                    </div>
                )
            }
        </div>
    )
};

export default MobileSidebarItem
