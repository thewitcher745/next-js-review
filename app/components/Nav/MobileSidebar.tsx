import {FC} from 'react';

import {SIDEBAR_PATHS, SidebarPath} from "@/app/content/constants";
import MobileSidebarItem from "@/app/components/Nav/MobileSidebarItem";

interface Sidebar {
    isSidebarOpen: boolean,
    closeSidebar: () => void
}

const MobileSidebar: FC<Sidebar> = ({isSidebarOpen, closeSidebar}: Sidebar) => {

    return (
        <>
            {isSidebarOpen &&
                <div id='backdrop' className='w-full h-full absolute z-40 bg-black opacity-40' onClick={closeSidebar}/>}
            <div
                className={`fixed top-0 left-0 h-full w-60 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='flex justify-end p-4'>
                    <button className='text-white text-2xl' onClick={closeSidebar}>&times;</button>
                </div>

                <nav className='flex flex-col gap-2'>
                    {SIDEBAR_PATHS.map(
                        (path: SidebarPath, index: number) => (
                            <MobileSidebarItem key={index} closeSidebar={closeSidebar} {...path}/>
                        )
                    )
                    }
                </nav>
            </div>
        </>
    )
};

export default MobileSidebar
