import {FC, ReactNode} from "react";
import Link from "next/link";

import './globals.css'
import NavBar from "@/app/components/Nav/NavBar";
import {exo2, orbitron} from "@/app/fonts";


interface LayoutProps {
    children: ReactNode
}

const RootLayout: FC<LayoutProps> = ({children}: LayoutProps) => {
    return (
        <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
        <body className='bg-orange-50 flex flex-col min-h-screen'>
        <header>
            <NavBar/>
        </header>
        <main className='py-3 pt-14 grow lg:px-[20%] px-4'>
            {children}
        </main>
        <footer className='text-center text-xs border-t py-3'>
            Game data and images courtesy of <Link href='https://rawg.io'
                                                   className='text-orange-800 hover:underline'>RAWG</Link>
        </footer>
        </body>
        </html>
    )
}

export default RootLayout