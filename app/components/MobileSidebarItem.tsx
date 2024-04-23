'use client'

import {ElementType, FC, useEffect, useState} from 'react';

import {SidebarPath} from "@/app/constants";

interface SidebarItem extends SidebarPath {
    index: number
}

const MobileSidebarItem: FC<SidebarItem> = ({index, ...path}: SidebarItem) => {
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
                <a key={index}
                   href={path.path}
                   className='text-white hover:text-orange-500'>{path.pathName}</a>

                {(isSubmenuOpen && path.openMenuIcon) ?
                    <path.openMenuIcon onClick={toggleSubmenu}
                                       className='text-white hover:scale-110 text-2xl cursor-pointer'/> :
                    <path.icon onClick={toggleSubmenu}
                               className={`text-white text-2xl ${path.hasSubItems && 'hover:scale-110 cursor-pointer'}`}/>}

            </div>
            {
                (path.hasSubItems && isSubmenuOpen) && (
                    <div className='flex flex-col gap-2 pt-4'>
                        {path.subItems?.map(
                            (subPath, subIndex) => (
                                <a key={subIndex}
                                   href={subPath.path}
                                   className='text-white hover:text-orange-500 pl-4'>{subPath.pathName}</a>
                            )
                        )}
                    </div>
                )
            }
        </div>
    )
};

export default MobileSidebarItem
